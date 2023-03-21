<script setup lang="ts">
import { onMounted, reactive } from 'vue'
import { getOptionInfo } from '@/apis/moment'
import { CameraFilled } from '@ant-design/icons-vue'
import { useOptionStore } from '@/store/option'

// 记录 option 信息
let optionInfo = reactive({
  name: null,
  avatar: null,
  background: null,
})

// 查看当前环境变量
// console.log(import.meta.env)

/**
 * 获取配置中的名称、头像及背景
 */
const onOptionInfo = async () => {
  await getOptionInfo().then((response: any) => {
    optionInfo.name = response[0].option_value
    optionInfo.avatar = response[1].option_value
    optionInfo.background = response[2].option_value
    useOptionStore().setOption(response)
  })
}

onMounted(() => {
  onOptionInfo()
})
</script>

<template>
  <div class="relative mx-auto max-w-3xl max-h-64">
    <div class="bg-cover bg-no-repeat bg-center bg-center max-w-3xl h-64 rounded-b-lg"
         :style="{backgroundImage: `url(${optionInfo.background})`}"></div>
    <div class="absolute top-4 right-5">
      <router-link to="/dashboard/index">
        <a-space>
          <camera-filled :style="{fontSize: '24px', color: '#fff'}"/>
        </a-space>
      </router-link>
    </div>
    <!-- 朋友圈顶部昵称 -->
    <div class="absolute bottom-3 right-32 text-2xl font-bold text-white text-shadow">{{ optionInfo.name }}</div>
    <!-- 朋友圈顶部头像 -->
    <div class="absolute -bottom-6 right-5 w-20 h-20 bg-local bg-cover bg-center rounded-lg ring-4 ring-white"
         :style="{backgroundImage: `url(${optionInfo.avatar})`}"></div>
  </div>
</template>

<style scoped lang="scss">

</style>