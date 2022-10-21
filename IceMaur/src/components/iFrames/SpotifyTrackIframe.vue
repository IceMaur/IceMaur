<template>
    <iframe style="border-radius:12px" 
            width="100%" 
            height="152" 
            frameBorder="0" 
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
            loading="lazy"
            :src="`https://open.spotify.com/embed/track/${trackId}?utm_source=generator`">
    </iframe>
</template>

<script setup lang="ts">
import { toRefs } from 'vue';

interface Props {
    trackId: string,
}

const props = defineProps<Props>();
const { trackId } = toRefs(props);
</script>