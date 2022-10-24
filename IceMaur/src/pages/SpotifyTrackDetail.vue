<template>
    <div class="spotify-detail-content">
        <SpotfiyH1>The Spotify track</SpotfiyH1>
        <SpotifyTrackIframe class="spotify-card-frame" :trackId="spotifyTrackId" :height="352"></SpotifyTrackIframe>
    </div>
    <h2>Other Playlists</h2>
    <Suspense>
        <SpotifyTrackCards :trackId="spotifyTrackId"></SpotifyTrackCards>
    </Suspense>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router';
import { spotifyStore } from '../store/spotify.js'
import SpotifyToggle from '../components/toggles/SpotifyToggle.vue';
import SpotifyTrackCards from '../components/cards/SpotifyTrackCards.vue';
import SpotfiyH1 from '../components/SpotfiyH1.vue';
import SpotifyTrackIframe from '../components/iFrames/SpotifyTrackIframe.vue';

const route = useRoute();
const spotifyTrackId = route.params.spotifyTrackId as string;
</script>

<style scoped lang="less">
.spotify-detail-content {
    margin-bottom: 3rem;
}
</style>