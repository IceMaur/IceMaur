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

<style scoped lang="less">
.spotify {
    &-header-iframe {
        max-width: 5rem;
        margin-right: auto;

        @media only screen and (min-width: 768px) {
            max-width: 18rem;
        }
    }

    &-bottom-iframe {
        position: fixed;
        right: 0;
        bottom: 0;
        max-width: 100%;
        width: 5rem;

        @media only screen and (min-width: 768px) {
            width: 18rem;
        }
    }

    &-card-frame {
        margin-bottom: 0.75rem;
        box-shadow: 1px 1px 8px var(--color-spotify-secondary);
    }
}
</style>