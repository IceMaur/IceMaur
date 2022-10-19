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
    input[type="radio"] {
        display: none;

        &+ label {
            cursor: pointer;
            margin-right: 1rem;
            padding: 0.5rem;
            background: var(--color-main);
            color: var(--color-secondary);
        }
    }

    input:checked + label {
        background: var(--color-tertiary);
        color: var(--color-main);
    }

    #appearance-spotify:checked + label {
        background: var(--color-spotify-primary);
    }

    #appearance-premium:checked + label {
        background: radial-gradient(ellipse farthest-corner at right bottom, #FEDB37 0%, #FDB931 8%, #9f7928 30%, #8A6E2F 40%, transparent 80%), radial-gradient(ellipse farthest-corner at left top, #FFFFFF 0%, #FFFFAC 8%, #D1B464 25%, #5d4a1f 62.5%, #5d4a1f 100%);
    }
</style>