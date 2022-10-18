<template>
    <SpotifyButton :type="type" :to="playlistId?.length === 22 ? { name: 'spotify',
            params: {
                spotifyPlaylistId: playlistId
            }} 
            : {}"
            :disabled="!playlistId || playlistId.length !== 22"> 
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
