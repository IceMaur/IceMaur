<template>
    <div class="spotify-teaser">
        <h2><i class="fa-brands fa-spotify"></i> Spotify</h2>
        <SpotifyPlaylistIFrame class="spotify-card-frame" playlistId="1AFisGmwc7zEHbP3MZiyl1"></SpotifyPlaylistIFrame>
        <SpotifyButton type="secondary" to="/spotify">More</SpotifyButton>
    </div>
</template>

<script setup lang="ts">
import SpotifyButton from '../components/buttons/SpotifyButton.vue';
import SpotifyPlaylistIFrame from './iFrames/SpotifyPlaylistIFrame.vue';
</script>

<style scoped lang="less">
.spotify-teaser {
    background: linear-gradient(125deg, var(--color-spotify-primary) 50%, var(--color-main) 100%);
    border-radius: 1rem;
    max-width: 30rem;
    padding: 1.5rem 2rem 2rem;
    margin: 2rem auto 3rem;

    @media only screen and (min-width: 768px) {
        padding: 1.5rem 4rem 2rem;
        margin: 4rem auto 5rem;
    }

    & .fa-spotify {
        color: var(--color-main);
    }
}
</style>