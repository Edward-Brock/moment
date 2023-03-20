<script setup lang="ts">
import { onMounted, reactive } from 'vue'
import { getOptionInfo } from '@/apis/moment'
import { patchSettingInfo } from '@/apis/dashboard/setting'

let optionInfo = reactive([
  {id: 1, option_name: 'moment_name', option_value: '', isModified: false},
  {id: 2, option_name: 'moment_avatar', option_value: '', isModified: false},
  {id: 3, option_name: 'moment_background', option_value: '', isModified: false},
])

let modifiedOptionInfo = reactive([])

/**
 * 将更新的值传回数据库中
 */
async function submitHandler() {
  for (const object of optionInfo) {
    if (object.isModified) {
      const id = object.id
      const params = {
        option_name: object.option_name,
        option_value: object.option_value,
      }
      await patchSettingInfo(id, params).then((response: any) => {
        console.log(response)
        return
      })
    }
  }
}

onMounted(() => {
  onOptionInfo()
})

/**
 * 获取配置中的名称、头像及背景
 */
const onOptionInfo = async () => {
  await getOptionInfo().then((response: any) => {
    optionInfo[0].option_value = response[0].option_value
    optionInfo[1].option_value = response[1].option_value
    optionInfo[2].option_value = response[2].option_value
  })
}
</script>

<template>
  <div>
    <header class="bg-white shadow">
      <div class="mx-auto max-w-7xl py-4 px-4 sm:px-6 lg:px-8">
        <h1 class="text-3xl font-bold tracking-tight text-gray-900">设置</h1>
      </div>
    </header>
    <div class="mx-auto my-6 max-w-7xl px-2 pb-6 sm:px-6 lg:px-8">
      <div class="mt-5 md:col-span-2 md:mt-0">
        <div class="shadow sm:overflow-hidden sm:rounded-md">
          <div class="space-y-6 bg-white px-4 py-5 sm:p-6">
            <div class="flex justify-between max-sm:flex-col">
              <div class="basis-2/3">
                <div class="grid grid-cols-2 gap-6 mb-4">
                  <div class="col-span-3 sm:col-span-2">
                    <label for="moment-name" class="block text-sm font-medium leading-6 text-gray-900">网站名称</label>
                    <div class="mt-2 flex rounded-md shadow-sm">
                      <input type="text" name="moment-name" id="moment-name"
                             class="block w-full flex-1 rounded-none rounded-l-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                             placeholder="输入一个网站名称" v-model="optionInfo[0].option_value"
                             @input="optionInfo[0].isModified = true"/>
                    </div>
                  </div>
                </div>

                <div class="grid grid-cols-2 gap-6 mb-4">
                  <div class="col-span-3 sm:col-span-2">
                    <label for="moment-avatar"
                           class="block text-sm font-medium leading-6 text-gray-900">网站头像</label>
                    <div class="mt-2 flex rounded-md shadow-sm">
                      <input type="text" name="moment-avatar" id="moment-avatar"
                             class="block w-full flex-1 rounded-none rounded-l-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                             placeholder="网站头像链接" v-model="optionInfo[1].option_value"
                             @input="optionInfo[1].isModified = true"/>
                    </div>
                  </div>
                </div>

                <div class="grid grid-cols-2 gap-6 mb-4">
                  <div class="col-span-3 sm:col-span-2">
                    <label for="moment-background"
                           class="block text-sm font-medium leading-6 text-gray-900">网站背景</label>
                    <div class="mt-2 flex rounded-md shadow-sm">
                      <input type="text" name="moment-background" id="moment-background"
                             class="block w-full flex-1 rounded-none rounded-l-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                             placeholder="网站背景链接" v-model="optionInfo[2].option_value"
                             @input="optionInfo[2].isModified = true"/>
                    </div>
                  </div>
                </div>
              </div>

              <div class="max-sm:mt-8">
                <label class="block text-sm font-medium leading-6 text-gray-900">预览头像</label>
                <div class="mt-2 flex items-center">
                  <span class="inline-block h-24 w-24 overflow-hidden rounded-lg bg-gray-100">
                    <img class="h-full w-full text-gray-300" :src="optionInfo[1].option_value || ''" fill="currentColor"
                         viewBox="0 0 24 24"/>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div class="bg-gray-50 px-4 py-3 text-right sm:px-6">
            <button type="button"
                    class="inline-flex justify-center rounded-md bg-indigo-600 py-2 px-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                    @click="submitHandler">
              保存
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">

</style>