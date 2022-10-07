<template>
    <h1>The IceMaur</h1>
    <P>Welcome to the most random place!</P>
    <suspense>
      <QuoteCards></QuoteCards>
    </suspense>
</template>

<script setup lang="ts">
    import QuoteCards from '../components/Cards/QuoteCards.vue';
</script>