<template>
    <div class="spotify-search">
        <input class="spotify-search-input" placeholder="PlaylistId" v-model="playlistId" />
        <router-link class="spotify-button" :to="playlistId ? { name: 'spotify',
            params: {
                spotifyPlaylistId: playlistId
            }} 
            : {}"
            :disabled="!playlistId"> 
            Detail
        </router-link>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

let playlistId = ref("");
</script>


<style scoped lang="less">
.spotify {
    &-search {
        margin: auto;
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        max-width: 10rem;
        margin-top: 3rem;

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

    &-button {
        display: inline-block;
        text-decoration: none;
        background-color: var(--color-spotify-primary);
        color: var(--color-main);
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
    }
}
</style>