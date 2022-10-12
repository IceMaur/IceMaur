<template>
    <h1>The Spotify playlist</h1>
    <div style="left: 0; width: 100%; height: 380px; position: relative;"><iframe :src="`https://open.spotify.com/embed/playlist/${spotifyPlaylistId}?utm_source=oembed`" style="top: 0; left: 0; width: 100%; height: 100%; position: absolute; border: 0;" allowfullscreen allow="clipboard-write; encrypted-media; fullscreen; picture-in-picture;"></iframe></div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router';

const route = useRoute();
const spotifyPlaylistId = route.params.spotifyPlaylistId;
</script>