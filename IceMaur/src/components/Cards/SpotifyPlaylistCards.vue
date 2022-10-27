<template>
    <div class="spotify-playlist-cards">
        <BrandCard v-for="otherPlaylist in otherPlaylists" class="spotify-playlist-item" title="Spotify">
            <SpotifyIFrame class="spotify-card-frame" type="playlist" :id="otherPlaylist.id" />
            <SpotifyDetailButton type="secondary" to="spotifyPlaylistDetail" :id="otherPlaylist.id">{{otherPlaylist.name}}</SpotifyDetailButton>
        </BrandCard>
        <BrandCard v-if="withPlaylistInput" class="spotify-playlist-item" title="Spotify">
            <SpotifyInput to="spotifyPlaylistDetail" type="secondary" />
        </BrandCard>
    </div>
</template>

<script setup lang="ts">
import { toRefs } from 'vue';
import SpotifyInput from '../SpotifyInput.vue';
import BrandCard from '../../components/cards/BrandCard.vue';
import SpotifyDetailButton from '../buttons/SpotifyDetailButton.vue';
import SpotifyIFrame from '../iFrames/SpotifyIFrame.vue';

interface Props {
    spotifyPlaylistId?: string,
    withPlaylistInput?: boolean
}

const props = withDefaults(defineProps<Props>(), { withPlaylistInput: true });
const { spotifyPlaylistId, withPlaylistInput } = toRefs(props);

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