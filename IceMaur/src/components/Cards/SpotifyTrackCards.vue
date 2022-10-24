<template>
    <div class="spotify-track-cards">
        <BrandCard v-for="spotifyTrack in trackWithoutCurrentTrack" class="spotify-track-item" title="Spotify">
            <SpotifyTrackIframe class="spotify-track-frame" :trackId="spotifyTrack.fields.id"></SpotifyTrackIframe>
            <SpotifyTrackButton type="secondary" :trackId="spotifyTrack.fields.id">{{spotifyTrack.fields.name}}</SpotifyTrackButton>
        </BrandCard>
    </div>
</template>

<script setup lang="ts">
import { toRefs } from 'vue';
import ContentfulClient from '../../data/ContentfulClient';
import SpotifyTrack from '../../objects/SpotifyTrack';
import BrandCard from '../../components/cards/BrandCard.vue';
import SpotifyTrackIframe from '../../components/iFrames/SpotifyTrackIframe.vue';
import SpotifyTrackButton from '../buttons/SpotifyTrackButton.vue';

interface Props {
    trackId?: string,
}

const props = defineProps<Props>();
const { trackId } = toRefs(props);

const spotifyTracks = await ContentfulClient.getEntries<SpotifyTrack>({
    content_type: 'spotifyTrack',
});

const trackWithoutCurrentTrack = spotifyTracks.items.filter(t => t.fields.id !== trackId?.value);
</script>

<style scoped lang="less">
.spotify-track {
    &-cards {
        display: flex;
        flex-wrap: wrap;
    }

    &-item {
        margin-right: 1rem;
        width: 27rem;
        max-width: 100%;
    }

    &-frame {
        margin-bottom: 0.5rem;
    }
}
</style>