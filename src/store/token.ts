import { defineStore } from 'pinia'

export const useTokenStore = defineStore('token', {
  state: () => ({token: ''}),

  actions: {
    setToken(tempToken: string) {
      this.$state.token = 'Bearer ' + tempToken
    },
    getToken() {
      return this.$state.token
    },
    cleanToken() {
      this.$state.token = ''
    },
  },

  persist: {
    enabled: true,
  },
})
