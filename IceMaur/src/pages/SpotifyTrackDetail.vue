<template>
    <div class="spotify-detail-content">
        <SpotfiyH1>The Spotify track</SpotfiyH1>
        <SpotifyIFrame class="spotify-card-frame" type="track" :id="id" :height="352"></SpotifyIFrame>
        <h2>Options</h2>
        <SpotifyToggle :model="spotifyStore.idForHeader" :trueValue="id" @change="(value) => spotifyStore.setIdForHeader(value, 'track')">
            Show track in the header
        </SpotifyToggle>
        <SpotifyToggle :model="spotifyStore.idForBottom" :trueValue="id" @change="(value) => spotifyStore.setIdForBottom(value, 'track')">
            Show track in the bottom
        </SpotifyToggle>
    </div>
    <h2>Other Tracks</h2>
    <Suspense>
        <SpotifyTrackCards :trackId="id"></SpotifyTrackCards>
    </Suspense>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router';
import { useSpotifyStore } from '../store/spotify.js'
import SpotifyToggle from '../components/toggles/SpotifyToggle.vue';
import SpotifyTrackCards from '../components/cards/SpotifyTrackCards.vue';
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