<script setup lang="ts">
import { ArrowUpTrayIcon, BookmarkSquareIcon } from '@heroicons/vue/20/solid'
</script>

<template>
  <div>
    <header class="bg-white shadow">
      <div class="mx-auto max-w-7xl py-4 px-4 sm:px-6 lg:px-8">
        <h1 class="text-3xl font-bold tracking-tight text-gray-900">仪表盘</h1>
      </div>
    </header>
    <main>
      <div class="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between max-sm:mx-4">
          <div class="min-w-0 flex-1">
            <div class="mt-2 flex items-center text-sm text-gray-500">
              <BookmarkSquareIcon class="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400" aria-hidden="true"/>
              当前有 0 篇文章
            </div>
          </div>
          <div class="flex lg:mt-0 lg:ml-4">
            <span class="flex justify-end sm:ml-3">
              <button type="button"
                      class="inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                <ArrowUpTrayIcon class="-ml-0.5 mr-1.5 h-5 w-5" aria-hidden="true"/>
                添加文章
              </button>
            </span>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<style scoped lang="scss">

</style>