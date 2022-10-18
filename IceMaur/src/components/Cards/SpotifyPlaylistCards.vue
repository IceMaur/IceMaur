<template>
    <div class="spotify-playlist-cards">
        <BrandCard v-for="otherPlaylist in otherPlaylists" class="spotify-playlist-item" title="Spotify">
            <SpotifyIFrame class="spotify-card-frame" :playlistId="otherPlaylist.id"></SpotifyIFrame>
            <SpotifyPlaylistButton type="secondary" :playlistId="otherPlaylist.id">{{otherPlaylist.name}}</SpotifyPlaylistButton>
        </BrandCard>
        <BrandCard class="spotify-playlist-item" title="Spotify">
            <SpotifyPlaylistInput type="secondary"></SpotifyPlaylistInput>
        </BrandCard>
    </div>
</template>

<script setup lang="ts">
import { toRefs } from 'vue';
import SpotifyPlaylistInput from '../../components/SpotifyPlaylistInput.vue';
import BrandCard from '../../components/cards/BrandCard.vue';
import SpotifyPlaylistButton from '../../components/buttons/SpotifyPlaylistButton.vue';
import SpotifyIFrame from '../../components/iFrames/SpotifyIFrame.vue';

interface Props {
    spotifyPlaylistId?: string
}

const props = defineProps<Props>();
const { spotifyPlaylistId } = toRefs(props);

const otherPlaylists = [
        { id: "1AFisGmwc7zEHbP3MZiyl1", name: "IceMaur"  },
        { id: "5661esMKH3Wp6Kmx1RJGkW", name: "Pirates"  },
        { id: "5cNJtY8UgI4CNdgHK2kU1x", name: "COD MW3"  },
    ].filter(p => p.id !== spotifyPlaylistId?.value);
</script>

<style scoped lang="less">
.spotify-playlist {
    &-cards {
        display: flex;
        flex-wrap: wrap;
    }

    &-item {
        margin-right: 1rem;
        width: 16rem;
    }
}
</style>