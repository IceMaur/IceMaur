<template>
    <iframe style="border-radius:12px" 
            width="100%" 
            frameBorder="0" 
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
            loading="lazy"
            :height="height" 
            :src="`https://open.spotify.com/embed/track/${trackId}?utm_source=generator`">
    </iframe>
</template>

<script setup lang="ts">
import { toRefs } from 'vue';

interface Props {
    trackId: string,
    height: number
}

const props = withDefaults(defineProps<Props>(), { height: 152 });
const { trackId } = toRefs(props);
</script>