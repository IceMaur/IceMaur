<template>
    <h1>Settings</h1>
    <h2>appearance</h2>
    <input type="radio" id="appearance-default" value="" v-model="settingsStore.appearance" />
    <label for="appearance-default">Default</label>
    <input type="radio" id="appearance-dark" value="dark" v-model="settingsStore.appearance" />
    <label for="appearance-dark">Dark</label>
    <input type="radio" id="appearance-spotify" value="spotify" v-model="settingsStore.appearance" />
    <label for="appearance-spotify">Spotify</label>
    <input type="radio" id="appearance-premium" value="author-page" v-model="settingsStore.appearance" />
    <label for="appearance-premium">Premium</label>
</template>

<script setup lang="ts">
import { settingsStore } from '../store/settings.js'
</script>

<style scoped lang="less">
    input[type="radio"] + label {
        margin-right: 1rem;
    }
</style>