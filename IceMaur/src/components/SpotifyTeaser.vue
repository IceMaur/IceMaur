<template>
    <div class="spotify-teaser">
        <h2>Spotify</h2>
        <SpotifyIFrame class="spotify-card-frame" playlistId="1AFisGmwc7zEHbP3MZiyl1"></SpotifyIFrame>
        <SpotifyButton type="secondary" to="/spotify">More</SpotifyButton>
    </div>
</template>

<script setup lang="ts">
import SpotifyButton from '../components/buttons/SpotifyButton.vue';
import SpotifyIFrame from './iFrames/SpotifyIFrame.vue';
</script>

<style scoped lang="less">
.spotify-teaser {
    background: linear-gradient(125deg, var(--color-spotify-primary) 50%, var(--color-main) 100%);
    border-radius: 1rem;
    padding: 1.5rem 2rem 2rem;
    margin-top: 2rem;
    margin-bottom: 3rem;

    @media only screen and (min-width: 768px) {
        padding: 1.5rem 4rem 2rem;
    }
}
</style>