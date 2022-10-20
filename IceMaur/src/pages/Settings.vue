<template>
    <h1>Settings</h1>
    <h2>Appearance</h2>
    <AppearanceBlockButton>Default</AppearanceBlockButton>
    <AppearanceBlockButton value="dark">Dark</AppearanceBlockButton>
    <AppearanceBlockButton value="spotify">Spotify</AppearanceBlockButton>
    <AppearanceBlockButton value="author-page">Premium</AppearanceBlockButton>
    <h2>Spotify</h2>
    <ResetSpotifyBannersButton></ResetSpotifyBannersButton>
</template>

<script setup lang="ts">
import AppearanceBlockButton from '../components/buttons/AppearanceBlockButton.vue';
import ResetSpotifyBannersButton from '../components/buttons/ResetSpotifyBannersButton.vue'
</script>
