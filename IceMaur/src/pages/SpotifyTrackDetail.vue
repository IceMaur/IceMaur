<template>
     <SpotfiyH1>The Spotify track</SpotfiyH1>
     <SpotifyTrackIframe class="spotify-card-frame" :trackId="spotifyTrackId" :height="352"></SpotifyTrackIframe>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router';
import { spotifyStore } from '../store/spotify.js'
import SpotifyToggle from '../components/toggles/SpotifyToggle.vue';
import SpotifyPlaylistCards from '../components/cards/SpotifyPlaylistCards.vue';
import SpotfiyH1 from '../components/SpotfiyH1.vue';
import SpotifyTrackIframe from '../components/iFrames/SpotifyTrackIframe.vue';

const route = useRoute();
const spotifyTrackId = route.params.spotifyTrackId as string;
</script>