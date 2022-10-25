import { defineStore } from 'pinia'
import { useStorage } from '@vueuse/core'

export const useSpotifyStore = defineStore('spotifyStore', {
  state: () => ({
    playlistÌdForHeader: useStorage('playlistÌdForHeader', null),
    playlistÌdForBottom: useStorage('playlistÌdForBottom', null),
    trackÌdForHeader: useStorage('trackÌdForHeader', null),
    trackÌdForBottom: useStorage('trackÌdForBottom', null)
  }),
  actions: {
    setPlaylistIdForHeader(id) {
      this.trackÌdForHeader = null;
      this.playlistÌdForHeader = id;
    },
    setPlaylistIdForBottom(id) {
      this.trackÌdForBottom = null;
      this.playlistÌdForBottom = id;
    },
    setTrackIdForHeader(id) {
      this.playlistÌdForHeader = null;
      this.trackÌdForHeader = id;
    },
    setTrackIdForBottom(id) {
      this.playlistÌdForBottom = null;
      this.trackÌdForBottom = id;
    },
    resetBanners() {
      this.playlistÌdForHeader = null;
      this.playlistÌdForBottom = null;
      this.trackÌdForHeader = null;
      this.trackÌdForBottom = null;
    }
  }
});