<template>
    <h1>Settings</h1>
    <h2>Appearance</h2>
    <AppearanceBlockButton>Default</AppearanceBlockButton>
    <AppearanceBlockButton value="dark">Dark</AppearanceBlockButton>
    <AppearanceBlockButton value="spotify">Spotify</AppearanceBlockButton>
    <AppearanceBlockButton value="author-page">Premium</AppearanceBlockButton>
    <h2>Spotify</h2>
    <SpotifyButton :disabled="!spotifyStore.playlistÌdForHeader && !spotifyStore.playlistÌdForBottom" @click="spotifyStore.resetPlaylists()">
        Reset banners
    </SpotifyButton>
</template>

<script setup lang="ts">
import AppearanceBlockButton from '../components/buttons/AppearanceBlockButton.vue';
import SpotifyButton from '../components/buttons/SpotifyButton.vue';
import { spotifyStore } from '../store/spotify.js'
</script>
