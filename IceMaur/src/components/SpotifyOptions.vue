<template>
    <h2>Options</h2>
    <SpotifyToggle :model="spotifyStore.idForHeader" :trueValue="id" @change="(value) => spotifyStore.setIdForHeader(value, type)">
        Show {{type}} in the header
    </SpotifyToggle>
    <SpotifyToggle :model="spotifyStore.idForBottom" :trueValue="id" @change="(value) => spotifyStore.setIdForBottom(value, type)">
        Show {{type}} in the bottom
    </SpotifyToggle>
</template>

<script setup lang="ts">
import { toRefs } from 'vue';
import { useSpotifyStore } from '../store/spotify.js'
import SpotifyToggle from '../components/toggles/SpotifyToggle.vue';

interface Props {
    id: string,
    type: 'playlist' | 'track'
}

const props = defineProps<Props>();
const { id, type } = toRefs(props);

const spotifyStore = useSpotifyStore();
</script>