<script setup lang="ts">
import { reactive } from 'vue'
import moment from 'moment'
import MdEditor from 'md-editor-v3'
import 'md-editor-v3/lib/style.css'
import { useOptionStore } from '@/store/option'
import { postArticleInfo } from '@/apis/dashboard/article'

const form = reactive({
  article_author: '' ? '' : useOptionStore().getOption()[0].option_value,
  article_avatar: '' ? '' : useOptionStore().getOption()[1].option_value,
  article_website: '',
  article_type: '',
  article_date: moment().format('YYYY-MM-DD[T]hh:mm:ss'),
  article_content: '',
})

async function submitHandler() {
  console.log(form)
  await postArticleInfo(form).then((response: any) => {
    console.log(response)
  })
}
</script>

<template>
  <div class="mx-auto max-w-7xl py-4 px-4 sm:px-6 lg:px-8">
    <div class="mt-5 md:col-span-2 md:mt-0">
      <div class="overflow-hidden shadow sm:rounded-md">
        <div class="bg-white px-4 py-5 sm:p-6">
          <div class="grid grid-cols-4 gap-6">

            <div class="col-span-4 sm:col-span-2" style="margin: 0 auto">
              <label class="block text-sm font-medium leading-6 text-gray-900">创作者头像预览</label>
              <div class="mt-2 flex justify-center items-center">
                  <span class="inline-block h-16 w-16 overflow-hidden rounded-lg bg-gray-100">
                    <img :src="form.article_avatar"/>
                  </span>
              </div>
            </div>

            <div class="col-span-4 sm:col-span-2">
              <label for="article-avatar" class="block text-sm font-medium leading-6 text-gray-900">创作者头像</label>
              <input type="text" name="article-avatar" id="article-avatar" autocomplete="article-avatar"
                     class="mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                     v-model="form.article_avatar"/>
            </div>

            <div class="col-span-4 sm:col-span-2">
              <label for="article-author" class="block text-sm font-medium leading-6 text-gray-900">创作者</label>
              <input type="text" name="article-author" id="article-author" autocomplete="article-author"
                     class="mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                     placeholder="booop" v-model="form.article_author"/>
            </div>

            <div class="col-span-4 sm:col-span-2">
              <label for="article-website"
                     class="block text-sm font-medium leading-6 text-gray-900">创作者网址</label>
              <div class="mt-2 flex rounded-md shadow-sm">
                <input type="text" name="article-website" id="article-website"
                       class="block w-full flex-1 rounded-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                       placeholder="https://booop.net" v-model="form.article_website"/>
              </div>
            </div>

            <div class="col-span-4 sm:col-span-2">
              <label for="article-type" class="block text-sm font-medium leading-6 text-gray-900">内容类型</label>
              <select id="article-type" name="article-type" autocomplete="article-type" v-model="form.article_type"
                      class="mt-2 block w-full rounded-md border-0 bg-white py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                <option disabled value="">选择内容类型</option>
                <option value="1">普通内容</option>
                <option value="2">推广内容</option>
              </select>
            </div>

            <div class="col-span-4 sm:col-span-2">
              <label for="article-date" class="block text-sm font-medium leading-6 text-gray-900">创作日期</label>
              <input type="datetime-local" step="1" name="article-date" id="article-date" autocomplete="article-date"
                     class="mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                     v-model="form.article_date"/>
            </div>

            <div class="col-span-4">
              <label for="article-content" class="block text-sm font-medium leading-6 text-gray-900">创作内容</label>
              <div class="mt-2">
                <MdEditor v-model="form.article_content" :preview="false"/>
              </div>
            </div>
          </div>
        </div>
        <div class="bg-gray-50 px-4 py-3 text-right sm:px-6">
          <button type="submit"
                  class="inline-flex justify-center rounded-md bg-indigo-600 py-2 px-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                  @click="submitHandler">
            保存
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">

</style>