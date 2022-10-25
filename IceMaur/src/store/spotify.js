import { defineStore } from 'pinia'
import { useStorage } from '@vueuse/core'

export const useSpotifyStore = defineStore('spotifyStore', {
  state: () => ({
    typeForHeader: useStorage('typeForHeader', 'playlist'),
    typeForBottom: useStorage('typeForBottom', 'playlist'),
    idForHeader: useStorage('idForHeader', null),
    idForBottom: useStorage('idForBottom', null),
  }),
  actions: {
    setIdForHeader(id, type) {
      this.typeForHeader = type;
      this.idForHeader = id;
    },
    setIdForBottom(id, type) {
      this.typeForBottom = type;
      this.idForBottom = id;
    },
    resetBanners() {
      this.idForHeader = null;
      this.idForBottom = null;
    }
  }
});