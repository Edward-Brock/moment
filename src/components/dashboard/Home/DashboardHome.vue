<script setup lang="ts">
import { ArrowUpTrayIcon, BookmarkSquareIcon } from '@heroicons/vue/20/solid'
import { getArticleInfo } from '@/apis/moment'
import { onMounted, ref } from 'vue'
import { useRouter } from "vue-router";

const articleInfo = ref('')

const columns = [
  {
    name: 'Id',
    dataIndex: 'article_id',
    key: 'article_id',
  },
  {
    title: 'Author',
    dataIndex: 'article_author',
    key: 'article_author',
  },
  {
    title: 'Avatar',
    dataIndex: 'article_avatar',
    key: 'article_avatar',
    ellipsis: true,
  },
  {
    title: 'Type',
    dataIndex: 'article_type',
    key: 'article_type',
  },
  {
    title: 'Date',
    dataIndex: 'article_date',
    key: 'article_date',
  },
  {
    title: 'Content',
    key: 'article_content',
    dataIndex: 'article_content',
  },
  {
    title: 'Visibility',
    key: 'article_visibility',
    dataIndex: 'article_visibility',
  },
  {
    title: 'Like',
    key: 'article_like',
    dataIndex: 'article_like',
  },
];

function createArticleHandler() {
  const router = useRouter()
  router.push('/dashboard/article')
}

/**
 * 获取所有文章内容
 */
const onArticleInfo = async () => {
  await getArticleInfo().then((response: any) => {
    console.log('DashboardHome ->', response)
    articleInfo.value = response
  })
}

onMounted(() => {
  onArticleInfo()
})
</script>

<template>
  <div>
    <header class="bg-white shadow">
      <div class="mx-auto max-w-7xl py-4 px-4 sm:px-6 lg:px-8">
        <h1 class="text-3xl font-bold tracking-tight text-gray-900">仪表盘</h1>
      </div>
    </header>
    <main>
      <div class="mx-auto max-w-7xl py-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between max-sm:mx-4">
          <div class="min-w-0 flex-1">
            <div class="mt-2 flex items-center text-sm text-gray-500">
              <BookmarkSquareIcon class="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400" aria-hidden="true"/>
              当前有 {{ articleInfo.length }} 篇文章
            </div>
          </div>
          <div class="flex lg:mt-0 lg:ml-4">
            <span class="flex justify-end sm:ml-3">
              <button type="button"
                      class="inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                      @click="createArticleHandler">
                <ArrowUpTrayIcon class="-ml-0.5 mr-1.5 h-5 w-5" aria-hidden="true"/>
                添加动态
              </button>
            </span>
          </div>
        </div>
        <!-- 文章动态 -->
        <div>
          <a-table :columns="columns" :data-source="articleInfo">
            <template #headerCell="{ column }">
              <template v-if="column.key === 'name'">
                <span>
                  <smile-outlined/>
                  Name
                </span>
              </template>
            </template>

            <template #bodyCell="{ column, record }">
              <template v-if="column.key === 'name'">
                <a>
                  {{ record.name }}
                </a>
              </template>
              <template v-else-if="column.key === 'tags'">
                <span>
                  <a-tag
                      v-for="tag in record.tags"
                      :key="tag"
                      :color="tag === 'loser' ? 'volcano' : tag.length > 5 ? 'geekblue' : 'green'"
                  >
                    {{ tag.toUpperCase() }}
                  </a-tag>
                </span>
              </template>
              <template v-else-if="column.key === 'action'">
                <span>
                  <a>Invite 一 {{ record.name }}</a>
                  <a-divider type="vertical"/>
                  <a>Delete</a>
                  <a-divider type="vertical"/>
                  <a class="ant-dropdown-link">
                    More actions
                    <down-outlined/>
                  </a>
                </span>
              </template>
            </template>
          </a-table>
        </div>
      </div>
    </main>
  </div>
</template>

<style scoped lang="scss">

</style>