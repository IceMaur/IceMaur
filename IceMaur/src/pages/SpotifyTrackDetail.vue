<template>
    <div class="spotify-detail-content">
        <SpotfiyH1>The Spotify track</SpotfiyH1>
        <SpotifyIFrame class="spotify-card-frame" type="track" :id="id" :height="352" />
        <SpotifyOptions type="track" :id="id" />
    </div>
    <h2>Other Tracks</h2>
    <Suspense>
        <SpotifyTrackCards :trackId="id" />
    </Suspense>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router';
import SpotifyTrackCards from '../components/cards/SpotifyTrackCards.vue';
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