<template>
    <div class="spotify-track-cards">
        <BrandCard v-for="spotifyTrack in trackWithoutCurrentTrack" class="spotify-track-item" title="Spotify">
            <SpotifyTrackIframe class="spotify-card-frame" :trackId="spotifyTrack.fields.id"></SpotifyTrackIframe>
            <SpotifyDetailButton type="secondary" to="spotifyTrackDetail" :id="spotifyTrack.fields.id">{{spotifyTrack.fields.name}}</SpotifyDetailButton>
        </BrandCard>
        <BrandCard v-if="withTrackInput" class="spotify-track-item spotify-track-card-input" title="Spotify">
            <SpotifyInput to="spotifyTrackDetail" type="secondary"></SpotifyInput>
        </BrandCard>
    </div>
</template>

<script setup lang="ts">
import { toRefs } from 'vue';
import ContentfulClient from '../../data/ContentfulClient';
import SpotifyTrack from '../../objects/SpotifyTrack';
import BrandCard from '../../components/cards/BrandCard.vue';
import SpotifyTrackIframe from '../../components/iFrames/SpotifyTrackIframe.vue';
import SpotifyDetailButton from '../buttons/SpotifyDetailButton.vue';
import SpotifyInput from '../SpotifyInput.vue';

interface Props {
    trackId?: string,
    withTrackInput?: boolean
}

const props = withDefaults(defineProps<Props>(), { withTrackInput: true });
const { trackId, withTrackInput } = toRefs(props);

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

    &-card-input {
        width: 16rem;
    }
}
</style>