import { defineStore } from 'pinia'
import { useStorage } from '@vueuse/core'

export const useSettingsStore = defineStore('settings', {
    state: () => ({ appearance: useStorage('appearance', '') })
});