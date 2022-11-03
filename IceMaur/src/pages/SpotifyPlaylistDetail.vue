<template>
    <div class="spotify-detail-content">
        <SpotfiyH1>The Spotify playlist</SpotfiyH1>
        <SpotifyIFrame type="playlist" :id="id" :height="380" />
        <SpotifyOptions type="playlist" :id="id" />
    </div>
    <h2>Other Playlists</h2>
    <SpotifyPlaylistCards :spotifyPlaylistId="id" />
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router';
import SpotifyPlaylistCards from '../components/cards/SpotifyPlaylistCards.vue';
import SpotfiyH1 from '../components/SpotfiyH1.vue';
import SpotifyIFrame from '../components/iFrames/SpotifyIFrame.vue';
import SpotifyOptions from '../components/SpotifyOptions.vue';

const route = useRoute();
const id = route.params.id as string;
</script>

<style scoped lang="less">
.spotify-detail-content {
    margin-bottom: 3rem;
}
</style>