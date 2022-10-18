<template>
    <h1>The IceMaur</h1>
    <P>Welcome to the most random place!</P>
    <suspense>
      <QuoteCards></QuoteCards>
    </suspense>
    <SpotifyTeaser></SpotifyTeaser>
    <h2>Article cards</h2>
    <suspense>
      <ArticleCards :max="4"></ArticleCards>
    </suspense>
</template>

<script setup lang="ts">
import QuoteCards from '../components/Cards/QuoteCards.vue';
import ArticleCards from '../components/Cards/ArticleCards.vue';
import SpotifyTeaser from '../components/SpotifyTeaser.vue';
</script>