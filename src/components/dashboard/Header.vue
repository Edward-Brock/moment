<script setup lang="ts">
import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/vue/24/outline'
import router from '@/router'
import { useTokenStore } from '@/store'
import { message } from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'
import { ref } from 'vue'

const navigation = ref([
  {name: '仪表盘', href: '/dashboard/index', current: true},
  {name: '设置', href: '/dashboard/setting', current: false},
])

/**
 * 点击 logo 跳转回首页
 */
function backHome() {
  router.push('/')
}

/**
 * 顶端导航切换样式选择
 * @param index
 */
function selectHandler(index: number) {
  for (let i in navigation.value){
    navigation.value[i].current = false
    navigation.value[index].current = true
  }
}

/**
 * 退出当前账号
 */
function signOut() {
  // 清除 Token
  useTokenStore().cleanToken()
  message.success('退出成功')
  // 跳转回登录页面
  router.push('/login')
}
</script>

<template>
  <Disclosure as="nav" v-slot="{ open }">
    <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
      <div class="relative flex h-16 items-center justify-between">
        <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
          <!-- Mobile menu button-->
          <DisclosureButton
              class="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-200 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
            <span class="sr-only">Open main menu</span>
            <Bars3Icon v-if="!open" class="block h-6 w-6" aria-hidden="true"/>
            <XMarkIcon v-else class="block h-6 w-6" aria-hidden="true"/>
          </DisclosureButton>
        </div>
        <div class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
          <div class="flex flex-shrink-0 items-center cursor-pointer" @click="backHome">
            <img class="block h-8 w-auto lg:hidden"
                 src="../../assets/booop_moment_logo.png" alt="Booop Moment"/>
            <img class="hidden h-8 w-auto lg:block"
                 src="../../assets/booop_moment_logo.png" alt="Booop Moment"/>
          </div>
          <div class="hidden sm:ml-6 sm:block">
            <div class="flex space-x-4">
              <div v-for="(item, index) in navigation" :key="item.name"
                   :class="[item.current ? 'bg-gray-200 text-black' : 'text-gray-500 hover:bg-gray-100 hover:text-black', 'rounded-md px-3 py-2 text-sm font-medium']"
                   :aria-current="item.current ? 'page' : undefined">
                <router-link :to="item.href" @click="selectHandler(index)">{{ item.name }}</router-link>
              </div>
            </div>
          </div>
        </div>
        <div class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
          <!-- Profile dropdown -->
          <Menu as="div" class="relative ml-3">
            <div>
              <button type="submit"
                      class="flex-none rounded-md py-2.5 px-3.5 text-sm font-semibold text-gray-400 shadow-sm hover:text-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                      @click="signOut">
                退出
              </button>
            </div>
            <transition enter-active-class="transition ease-out duration-100"
                        enter-from-class="transform opacity-0 scale-95" enter-to-class="transform opacity-100 scale-100"
                        leave-active-class="transition ease-in duration-75"
                        leave-from-class="transform opacity-100 scale-100"
                        leave-to-class="transform opacity-0 scale-95">
              <MenuItems
                  class="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                <MenuItem v-slot="{ active }">
                  <a href="#" :class="[active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700']">退出</a>
                </MenuItem>
              </MenuItems>
            </transition>
          </Menu>
        </div>
      </div>
    </div>

    <DisclosurePanel class="sm:hidden">
      <div class="space-y-1 px-2 pt-2 pb-3">
        <DisclosureButton v-for="item in navigation" :key="item.name" as="a" :href="item.href"
                          :class="[item.current ? 'bg-gray-200 text-black' : 'text-gray-200 hover:bg-gray-100 hover:text-black', 'block rounded-md px-3 py-2 text-base font-medium']"
                          :aria-current="item.current ? 'page' : undefined">{{ item.name }}
        </DisclosureButton>
      </div>
    </DisclosurePanel>
  </Disclosure>
</template>

<style setup lang="ts">

</style>