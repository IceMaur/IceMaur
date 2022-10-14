<template>
    <h1>The Spotify playlist</h1>
    <div style="left: 0; width: 100%; height: 380px; position: relative;"><iframe :src="`https://open.spotify.com/embed/playlist/${spotifyPlaylistId}?utm_source=oembed`" style="top: 0; left: 0; width: 100%; height: 100%; position: absolute; border: 0;" allowfullscreen allow="clipboard-write; encrypted-media; fullscreen; picture-in-picture;"></iframe></div>
    <h2>Options</h2>
    <div class="spotify-option">
        <Toggle class="spotify-toggle" v-model="spotifyStore.playlistÌdForHeader" :falseValue="null" :trueValue="spotifyPlaylistId"></Toggle>
        <label>Show playlist in the header</label>
    </div>
    <div class="spotify-option">
        <Toggle class="spotify-toggle" v-model="spotifyStore.playlistÌdForBottom" :falseValue="null" :trueValue="spotifyPlaylistId"></Toggle>
        <label>Show playlist in the bottom</label>
    </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router';
import Toggle from '@vueform/toggle'
import { spotifyStore } from '../store/spotify.js'

const route = useRoute();
const spotifyPlaylistId = route.params.spotifyPlaylistId;
</script>

<style src="@vueform/toggle/themes/default.css"></style>

<style scoped lang="less">
    .spotify {
        &-option {
            margin-bottom: 0.5rem;
        }

        &-toggle {
            margin-right: 0.5rem;

            --toggle-bg-on: var(--color-spotify-primary);
        }
    }
</style>