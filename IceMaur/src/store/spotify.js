import { defineStore } from 'pinia'

export const useSpotifyStore = defineStore('spotifyStore', {
  state: () => ({
  playlistÌdForHeader: null,
  playlistÌdForBottom: null,
  trackÌdForHeader: null,
  trackÌdForBottom: null
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