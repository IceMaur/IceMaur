<template>
    <div class="spotify-search">
        <input class="spotify-search-input" placeholder="PlaylistId" v-model="playlistId" />
        <SpotifyPlaylistButton :playlistId="playlistId" :type="type"></SpotifyPlaylistButton>
    </div>
</template>

<script setup lang="ts">
import { ref, toRefs } from 'vue';
import SpotifyPlaylistButton from '../components/buttons/SpotifyPlaylistButton.vue';

interface Props {
    type: "primary" | "secondary",
}

const props = withDefaults(defineProps<Props>(), {
    type: "primary"
});
const { type } = toRefs(props);

let playlistId = ref("");
</script>

<style scoped lang="less">
.spotify-search {
    margin: auto;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    max-width: 10rem;

    &-input {
        margin-bottom: 0.5rem;
        padding: 0.5rem;
        border: 0.125rem solid var(--color-spotify-secondary);
        color: var(--color-spotify-secondary);
        border-radius: 0.25rem;

        &:focus-visible {
            outline: unset;
            border: 0.125rem solid var(--color-spotify-primary);
        }
    }
}
</style>