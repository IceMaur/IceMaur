<template>
    <SpotifyButton :disabled="!spotifyStore.playlistÌdForHeader && !spotifyStore.playlistÌdForBottom" @click="spotifyStore.resetPlaylists()">
        Reset banners
    </SpotifyButton>
</template>

<script setup lang="ts">
import SpotifyButton from '../../components/buttons/SpotifyButton.vue';
import { spotifyStore } from '../../store/spotify.js'
</script>
