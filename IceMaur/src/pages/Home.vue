<template>
    <h1>The IceMaur</h1>
    <SpotifyTeaser>
      <SpotifyTrackIframe class="spotify-card-frame" trackId="3GTXok0dIm0mMqBiVklBYS" :height="152"></SpotifyTrackIframe>
    </SpotifyTeaser>
    <suspense>
      <QuoteCards></QuoteCards>
    </suspense>
    <SpotifyTeaser>
      <SpotifyPlaylistIFrame class="spotify-card-frame" playlistId="1AFisGmwc7zEHbP3MZiyl1"></SpotifyPlaylistIFrame>
    </SpotifyTeaser>
    <h2>Article cards</h2>
    <suspense>
      <ArticleCards :max="4"></ArticleCards>
    </suspense>
</template>

<script setup lang="ts">
import QuoteCards from '../components/Cards/QuoteCards.vue';
import ArticleCards from '../components/Cards/ArticleCards.vue';
import SpotifyTeaser from '../components/SpotifyTeaser.vue';
import SpotifyPlaylistIFrame from '../components/iFrames/SpotifyPlaylistIFrame.vue';
import SpotifyTrackIframe from '../components/iFrames/SpotifyTrackIframe.vue';
</script>

<style scoped lang="less">
.spotify-card-frame {
    margin-bottom: 1rem;
}
</style>