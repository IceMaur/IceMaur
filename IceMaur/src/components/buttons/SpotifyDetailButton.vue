<template>
    <SpotifyButton :type="type" :to="id?.length === 22 ? { name: to,
            params: {
                id: id
            }} 
            : {}"
            :disabled="!id || id.length !== 22"> 
            <slot>Detail</slot>
    </SpotifyButton>
</template>

<script setup lang="ts">
import { toRefs } from 'vue';
import SpotifyButton from './SpotifyButton.vue';

interface Props {
    id: string,
    type: "primary" | "secondary",
    to: "spotifyPlaylistDetail" | "spotifyTrackDetail"
}

const props = withDefaults(defineProps<Props>(), {
    type: "primary"
});
const { id, type, to } = toRefs(props);
</script>
