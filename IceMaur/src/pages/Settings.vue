<template>
    <h1>Settings</h1>
    <h2>appearance</h2>
    <RadioBlockButton>Default</RadioBlockButton>
    <RadioBlockButton value="dark">Dark</RadioBlockButton>
    <RadioBlockButton value="spotify">Spotify</RadioBlockButton>
    <RadioBlockButton value="author-page">Premium</RadioBlockButton>
</template>

<script setup lang="ts">
import RadioBlockButton from '../components/buttons/RadioBlockButton.vue';
</script>
