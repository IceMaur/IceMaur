<template>
    <SpotfiyH1></SpotfiyH1>
    <div class="spotify-index-page">
        <SpotifyPlaylistInput></SpotifyPlaylistInput>
    </div>
    <h2>Playlists</h2>
    <SpotifyPlaylistCards :withPlaylistInput="false"></SpotifyPlaylistCards>
    <h2>Tracks</h2>
    <Suspense>
        <SpotifyTrackCards></SpotifyTrackCards>
    </Suspense>
</template>

<script setup lang="ts">
import SpotifyPlaylistInput from '../components/SpotifyPlaylistInput.vue';
import SpotifyPlaylistCards from '../components/cards/SpotifyPlaylistCards.vue';
import SpotfiyH1 from '../components/SpotfiyH1.vue';
import SpotifyTrackCards from '../components/cards/SpotifyTrackCards.vue';
</script>


<style scoped lang="less">
.spotify-index-page {
    margin-top: 3rem;
    margin-bottom: 3rem;
}
</style>