<template>
    <SpotifyButton :disabled="!spotifyStore.playlistÌdForHeader 
                        && !spotifyStore.playlistÌdForBottom
                        && !spotifyStore.trackÌdForHeader
                        && !spotifyStore.trackÌdForBottom" 
                    @click="spotifyStore.resetBanners()">
        Reset banners
    </SpotifyButton>
</template>

<script setup lang="ts">
import SpotifyButton from '../../components/buttons/SpotifyButton.vue';
import { useSpotifyStore } from '../../store/spotify.js'

const spotifyStore = useSpotifyStore();
</script>
