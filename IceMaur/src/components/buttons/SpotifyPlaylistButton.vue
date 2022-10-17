<template>
    <router-link :class="['spotify-button', type]" :to="playlistId ? { name: 'spotify',
            params: {
                spotifyPlaylistId: playlistId
            }} 
            : {}"
            :disabled="!playlistId"> 
            Detail
    </router-link>
</template>

<script setup lang="ts">
import { toRefs } from 'vue';

interface Props {
    playlistId: string,
    type: "primary" | "secondary",
}

const props = withDefaults(defineProps<Props>(), {
    type: "primary",
});
const { playlistId, type } = toRefs(props);
</script>

<style scoped lang="less">
.spotify-button {
    display: inline-block;
    text-decoration: none;
    border-radius: 2rem;
    padding: 0.825rem 1.825rem;
    transition: all .3s;

    &:not([disabled="true"]):hover {
        text-decoration: none;
        opacity: unset;
        background-color: var(--color-main);
        color: var(--color-spotify-primary);
    }

    &[disabled="true"] {
        cursor: not-allowed;
        opacity: 0.7;
    }

    &.primary {
        background-color: var(--color-spotify-primary);
        color: var(--color-main);

        &:not([disabled="true"]):hover {
            background-color: var(--color-main);
            color: var(--color-spotify-primary);
        }
    }

    &.secondary {
        background-color: var(--color-main);
        color: var(--color-spotify-secondary);

        &:not([disabled="true"]):hover {
            background-color: var(--color-spotify-secondary);
            color: var(--color-main);
        }
    }
}
</style>