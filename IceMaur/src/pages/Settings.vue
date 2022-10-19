<template>
    <h1>Settings</h1>
    <h2>appearance</h2>
    <AppearanceBlockButton>Default</AppearanceBlockButton>
    <AppearanceBlockButton value="dark">Dark</AppearanceBlockButton>
    <AppearanceBlockButton value="spotify">Spotify</AppearanceBlockButton>
    <AppearanceBlockButton value="author-page">Premium</AppearanceBlockButton>
</template>

<script setup lang="ts">
import AppearanceBlockButton from '../components/buttons/AppearanceBlockButton.vue';
</script>
