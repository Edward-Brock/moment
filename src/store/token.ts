import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useTokenStore = defineStore('token', () => {
  const token = ref('')

  function setToken(tempToken: string) {
    token.value = 'Bearer ' + tempToken
  }

  function getToken() {
    return token.value
  }

  function cleanToken() {
    token.value = ''
  }

  return {
    token,
    setToken,
    getToken,
    cleanToken,
  }
}, {
  persist: true,
})
