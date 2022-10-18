<template>
    <SpotifyButton :type="type" :to="playlistId ? { name: 'spotify',
            params: {
                spotifyPlaylistId: playlistId
            }} 
            : {}"
            :disabled="!playlistId"> 
            <slot>Detail</slot>
    </SpotifyButton>
</template>

<script setup lang="ts">
import { toRefs } from 'vue';
import SpotifyButton from './SpotifyButton.vue';

interface Props {
    playlistId: string,
    type: "primary" | "secondary",
}

const props = withDefaults(defineProps<Props>(), {
    type: "primary"
});
const { playlistId, type } = toRefs(props);
</script>
