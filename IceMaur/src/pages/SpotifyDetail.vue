<template>
    <div class="spotify-detail-content">
        <SpotfiyH1>The Spotify playlist</SpotfiyH1>
        <div style="left: 0; width: 100%; height: 380px; position: relative;"><iframe :src="`https://open.spotify.com/embed/playlist/${spotifyPlaylistId}?utm_source=oembed`" style="top: 0; left: 0; width: 100%; height: 100%; position: absolute; border: 0;" allowfullscreen allow="clipboard-write; encrypted-media; fullscreen; picture-in-picture;"></iframe></div>
        <h2>Options</h2>
        <SpotifyToggle :model="spotifyStore.playlistÌdForHeader" :trueValue="spotifyPlaylistId" @change="(value) => spotifyStore.setPlaylistIdForHeader(value)">
            Show playlist in the header
        </SpotifyToggle>
        <SpotifyToggle :model="spotifyStore.playlistÌdForBottom" :trueValue="spotifyPlaylistId" @change="(value) => spotifyStore.setPlaylistIdForBottom(value)">
            Show playlist in the bottom
        </SpotifyToggle>
    </div>
    <h2>Other Playlists</h2>
    <SpotifyPlaylistCards :spotifyPlaylistId="spotifyPlaylistId"></SpotifyPlaylistCards>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router';
import { spotifyStore } from '../store/spotify.js'
import SpotifyToggle from '../components/toggles/SpotifyToggle.vue';
import SpotifyPlaylistCards from '../components/cards/SpotifyPlaylistCards.vue';
import SpotfiyH1 from '../components/SpotfiyH1.vue';

const route = useRoute();
const spotifyPlaylistId = route.params.spotifyPlaylistId as string;
</script>

<style scoped lang="less">
.spotify-detail-content {
    margin-bottom: 3rem;
}
</style>