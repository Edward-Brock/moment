<script setup lang="ts">
import { getArticleInfo, getArticleLikeInfo } from '@/apis/moment'
import { onMounted, ref } from 'vue'
import { HeartFilled } from '@ant-design/icons-vue'
import moment from 'moment'
import 'moment/dist/locale/zh-cn'
import MdEditor from 'md-editor-v3'
import 'md-editor-v3/lib/style.css'

moment.locale('zh-cn')

const articleInfo = ref()

const articleType: any = {
  normal: '普通内容',
  advertisement: '推广内容',
}

/**
 * 点击获取传递的 item 值，将其点赞数传至服务器并在本地进行累加
 * @param item
 */
function getArticleId(item: any) {
  // console.log(item)
  getArticleLikeInfo(item.article_id).then((response: any) => {
    item.article_like++
  })
}

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
  <div class="mx-4 my-16">
    <div class="flex my-8" v-for="item in articleInfo">
      <!-- 头像 -->
      <img class="w-10 h-10 rounded mr-4" :src="item.article_avatar">
      <!-- 内容 -->
      <div class="grow">
        <div class="flex items-center">
          <div class="cursor-pointer font-bold text-lg text-blue-800 block mr-2"
               @click="jumpWebsite(item.article_website)">
            {{ item.article_author }}
          </div>
          <div class="text-xs bg-gray-200 text-white p-0.5 rounded"
               v-if="articleType[item.article_type] === articleType.advertisement">
            推广
          </div>
        </div>
        <div class="text-gray-900">
          <MdEditor v-model="item.article_content" :previewOnly="true"/>
        </div>
        <div class="flex justify-between items-center">
          <div class="text-xs text-gray-400">{{ moment(item.article_date).fromNow() }}</div>
          <div class="text-gray-400 cursor-pointer" @click="getArticleId(item)">
            <div class="flex justify-center items-center">
                <heart-filled class="mr-1" :style="{fontSize: '14px', color: 'rgba(255, 0, 0, .75)'}"/>
              {{ item.article_like }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">

</style>