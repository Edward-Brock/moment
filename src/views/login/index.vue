<script setup lang="ts">
import { LockClosedIcon } from '@heroicons/vue/20/solid'
import { ref } from 'vue'
import { postLoginInfo } from '@/apis/login'
import { useTokenStore } from '@/store/token'
import router from '@/router'

const password = ref<string>()

function submitHandler() {
  onLoginInfo()
}

/**
 * 发送验证密码进行验证
 */
const onLoginInfo = async () => {
  const params = {
    password: password.value,
  }
  await postLoginInfo(params).then((response: any) => {
    // console.log(response)
    if (response.code === 0) {
      useTokenStore().setToken(response.data.token)
      router.push('/dashboard')
    }
    return
  })
}
</script>

<template>
  <div class="flex justify-center items-center h-screen bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
    <div class="w-full max-w-md space-y-8">
      <div>
        <img class="mx-auto h-14 w-auto" src="../../assets/booop_moment_logo.png" alt="Booop Moment"/>
        <h2 class="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">登录你的账户</h2>
      </div>
      <input type="hidden" name="remember" value="true"/>
      <div class="-space-y-px rounded-md shadow-sm">
        <div>
          <label for="password" class="sr-only">密码</label>
          <input id="password" name="password" type="password" autocomplete="current-password" required
                 class="relative block w-full rounded-md border-0 py-1.5 text-gray-900 text-center ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                 placeholder="输入验证密码" autofocus minlength="6" v-model="password"
                 @keydown.enter="submitHandler"/>
        </div>
      </div>

      <div class="flex items-center justify-between">
      </div>

      <div>
        <button type="submit"
                @click="submitHandler"
                class="group relative flex w-full justify-center rounded-md bg-indigo-600 py-2 px-3 text-sm font-semibold text-white hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
            <span class="absolute inset-y-0 left-0 flex items-center pl-3">
              <LockClosedIcon class="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" aria-hidden="true"/>
            </span>
          登录
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">

</style>