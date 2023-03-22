<script setup lang="ts">
import { getArticleInfo } from '@/apis/moment'
import { onMounted, ref } from 'vue'
import moment from 'moment'
import 'moment/dist/locale/zh-cn'

moment.locale('zh-cn')

const articleInfo = ref()

function jumpWebsite(url: string) {
  window.open(url, '_self')
}

/**
 * 获取所有文章内容
 */
const onArticleInfo = async () => {
  await getArticleInfo().then((response: any) => {
    // console.log(response)
    articleInfo.value = response
  })
}

onMounted(() => {
  onArticleInfo()
})
</script>

<template>
  <div class="mx-6 my-16">
    <div class="flex" v-for="item in articleInfo">
      <!-- 头像 -->
      <img class="w-14 h-14 rounded-lg mr-4" :src="item.article_avatar">
      <!-- 内容 -->
      <div>
        <div class="cursor-pointer">
          <div class="font-bold text-lg text-blue-900 block" @click="jumpWebsite(item.article_website)">
            {{ item.article_author }}
          </div>
        </div>
        <div class="text-gray-900">{{ item.article_content }}</div>
        <div class="flex justify-between items-center">
          <div class="text-sm text-gray-400 mt-2">{{ moment(item.article_date).fromNow() }}</div>
          <div class="text-gray-400">❤ {{ item.article_like }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">

</style>