<template>
    <SpotifyTeaser v-if="spotifyTrack">
        <SpotifyIFrame class="spotify-card-frame" type="track" :id="spotifyTrack.fields.id" :height="152" />
    </SpotifyTeaser>
</template>

<script setup lang="ts">
import SpotifyTeaser from '../components/SpotifyTeaser.vue';
import SpotifyIFrame from '../components/iFrames/SpotifyIFrame.vue';
import ContentfulClient from '../data/ContentfulClient';
import Home from '../objects/Home';

const homePages = await ContentfulClient.getEntries<Home>({
    content_type: 'home',
});
const spotifyTrack = homePages?.items[0]?.fields?.spotifyTrack;
</script>

<style scoped lang="less">
.spotify-card-frame {
    margin-bottom: 1rem;
}
</style>