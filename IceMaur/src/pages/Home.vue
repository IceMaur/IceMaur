<template>
    <h1>The IceMaur</h1>
    <suspense>
      <SpotifyHomeTrackTeaser></SpotifyHomeTrackTeaser>
    </suspense>
    <suspense>
      <QuoteCards></QuoteCards>
    </suspense>
    <SpotifyTeaser>
      <SpotifyIFrame class="spotify-card-frame" type="playlist" id="1AFisGmwc7zEHbP3MZiyl1"></SpotifyIFrame>
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
import SpotifyIFrame from '../components/iFrames/SpotifyIFrame.vue';
import SpotifyHomeTrackTeaser from '../components/SpotifyHomeTrackTeaser.vue';
</script>
