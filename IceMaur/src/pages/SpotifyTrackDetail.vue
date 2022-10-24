<template>
    <div class="spotify-detail-content">
        <SpotfiyH1>The Spotify track</SpotfiyH1>
        <SpotifyTrackIframe class="spotify-card-frame" :trackId="spotifyTrackId" :height="352"></SpotifyTrackIframe>
        <h2>Options</h2>
        <SpotifyToggle :model="spotifyStore.trackÌdForHeader" :trueValue="spotifyTrackId" @change="(value) => spotifyStore.setTrackIdForHeader(value)">
            Show track in the header
        </SpotifyToggle>
        <SpotifyToggle :model="spotifyStore.trackÌdForBottom" :trueValue="spotifyTrackId" @change="(value) => spotifyStore.setTrackIdForBottom(value)">
            Show track in the bottom
        </SpotifyToggle>
    </div>
    <h2>Other Tracks</h2>
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