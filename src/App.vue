<script setup lang="ts">

</script>

<template>
  <div>
    <div class="mb-4">
      <div>
        <router-link to="/">Go to Moment</router-link>
      </div>
      <div>
        <router-link to="/login">Go to Login</router-link>
      </div>
    </div>
    <article>
      <router-view></router-view>
    </article>
  </div>
</template>

<style scoped>

</style>
