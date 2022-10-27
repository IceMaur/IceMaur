<template>
    <h1><i class="fa-solid fa-gear"></i> Settings</h1>
    <h2><i class="fa-solid fa-brush"></i> Appearance</h2>
    <AppearanceBlockButton>Default</AppearanceBlockButton>
    <AppearanceBlockButton value="dark">Dark</AppearanceBlockButton>
    <AppearanceBlockButton value="spotify">Spotify</AppearanceBlockButton>
    <AppearanceBlockButton value="author-page">Premium</AppearanceBlockButton>
    <h2><i class="fa-brands fa-spotify"></i> Spotify</h2>
    <ResetSpotifyBannersButton />
</template>

<script setup lang="ts">
import AppearanceBlockButton from '../components/buttons/AppearanceBlockButton.vue';
import ResetSpotifyBannersButton from '../components/buttons/ResetSpotifyBannersButton.vue'
</script>
