<template>
    <div class="spotify-track-cards">
        <BrandCard v-for="spotifyTrack in spotifyTracks.items" class="spotify-track-item" title="Spotify">
            <SpotifyTrackIframe class="spotify-card-frame" :trackId="spotifyTrack.fields.id"></SpotifyTrackIframe>
        </BrandCard>
    </div>
</template>

<script setup lang="ts">
import ContentfulClient from '../../data/ContentfulClient';
import SpotifyTrack from '../../objects/SpotifyTrack';
import BrandCard from '../../components/cards/BrandCard.vue';
import SpotifyTrackIframe from '../../components/iFrames/SpotifyTrackIframe.vue';

const spotifyTracks = await ContentfulClient.getEntries<SpotifyTrack>({
    content_type: 'spotifyTrack',
});
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
}
</style>