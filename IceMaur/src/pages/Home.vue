<template>
    <h1>The IceMaur</h1>
    <suspense>
      <SpotifyHomeTrackTeaser></SpotifyHomeTrackTeaser>
    </suspense>
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
import SpotifyHomeTrackTeaser from '../components/SpotifyHomeTrackTeaser.vue';
</script>
