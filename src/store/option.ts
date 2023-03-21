import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useOptionStore = defineStore('option', () => {
  let optionInfo = ref()

  function setOption(tempOption: string) {
    optionInfo.value = tempOption
  }

  function getOption() {
    return optionInfo.value
  }

  function cleanOption() {
    optionInfo.value = ''
  }

  return {
    optionInfo,
    setOption,
    getOption,
    cleanOption,
  }
}, {
  persist: true,
})
