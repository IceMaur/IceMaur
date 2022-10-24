<template>
    <SpotifyButton :type="type" :to="trackId?.length === 22 ? { name: 'spotifyTrackDetail',
            params: {
                spotifyTrackId: trackId
            }} 
            : {}"
            :disabled="!trackId || trackId.length !== 22">
            <slot>Detail</slot>
    </SpotifyButton>
</template>

<script setup lang="ts">
import { toRefs } from 'vue';
import SpotifyButton from './SpotifyButton.vue';

interface Props {
    trackId: string,
    type: "primary" | "secondary",
}

const props = withDefaults(defineProps<Props>(), {
    type: "primary"
});
const { trackId, type } = toRefs(props);
</script>
