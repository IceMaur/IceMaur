import { reactive } from 'vue'

export const spotifyStore = reactive({
  playlistÌdForHeader: null,
  playlistÌdForBottom: null,
  setPlaylistIdForHeader(id) {
    this.playlistÌdForHeader = id;
  },
  setPlaylistIdForBottom(id) {
    this.playlistÌdForBottom = id;
  },
  resetPlaylists() {
    this.playlistÌdForHeader = null;
    this.playlistÌdForBottom = null;
  }
});