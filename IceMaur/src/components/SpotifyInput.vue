<template>
    <div class="spotify-search">
        <input class="spotify-search-input" :placeholder="nameId" v-model="id" />
        <SpotifyDetailButton :to="to" :id="id" :type="type" />
        <p v-if="id.length > 0 && id.length !== 22" class="error-message">The {{nameId}} must has a length of 22 characters</p>
    </div>
</template>

<script setup lang="ts">
import { ref, toRefs } from 'vue';
import SpotifyDetailButton from './buttons/SpotifyDetailButton.vue';

interface Props {
    type?: "primary" | "secondary",
    to: "spotifyPlaylistDetail" | "spotifyTrackDetail"
}

const props = withDefaults(defineProps<Props>(), {
    type: "primary"
});
const { type, to } = toRefs(props);

let id = ref("");
const nameId = to.value === "spotifyPlaylistDetail" ? "PlaylistId" : "TrackId"
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

    & .error-message {
        text-align: center;
    }
}
</style>