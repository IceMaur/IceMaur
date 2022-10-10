<template>
    <h1>The IceMaur</h1>
    <P>Welcome to the most random place!</P>
    <suspense>
      <QuoteCards></QuoteCards>
    </suspense>
    <h2>Article cards</h2>
    <suspense>
      <ArticleCards :max="4"></ArticleCards>
    </suspense>
</template>

<script setup lang="ts">
import QuoteCards from '../components/Cards/QuoteCards.vue';
import ArticleCards from '../components/Cards/ArticleCards.vue';
</script>