<template>
    <div class="spotify-detail-content">
        <SpotfiyH1>The Spotify playlist</SpotfiyH1>
        <SpotifyIFrame type="playlist" :id="id" :height="380"></SpotifyIFrame>
        <h2>Options</h2>
        <SpotifyToggle :model="spotifyStore.playlistÌdForHeader" :trueValue="id" @change="(value) => spotifyStore.setPlaylistIdForHeader(value)">
            Show playlist in the header
        </SpotifyToggle>
        <SpotifyToggle :model="spotifyStore.playlistÌdForBottom" :trueValue="id" @change="(value) => spotifyStore.setPlaylistIdForBottom(value)">
            Show playlist in the bottom
        </SpotifyToggle>
    </div>
    <h2>Other Playlists</h2>
    <SpotifyPlaylistCards :spotifyPlaylistId="id"></SpotifyPlaylistCards>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router';
import { useSpotifyStore } from '../store/spotify.js'
import SpotifyToggle from '../components/toggles/SpotifyToggle.vue';
import SpotifyPlaylistCards from '../components/cards/SpotifyPlaylistCards.vue';
import SpotfiyH1 from '../components/SpotfiyH1.vue';
import SpotifyIFrame from '../components/iFrames/SpotifyIFrame.vue';

const route = useRoute();
const id = route.params.id as string;
const spotifyStore = useSpotifyStore();
</script>

<style scoped lang="less">
.spotify-detail-content {
    margin-bottom: 3rem;
}
</style>