import { reactive } from 'vue'

export const spotifyStore = reactive({
  playlistÌdForHeader: null,
  playlistÌdForBottom: null,
  trackÌdForHeader: null,
  trackÌdForBottom: null,
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
});