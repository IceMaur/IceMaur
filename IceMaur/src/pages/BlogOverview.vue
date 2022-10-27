<template>
    <h1>All the random blogs in the IceMaur area!</h1>
    <suspense>
        <ArticleCards />
    </suspense>
</template>

<script setup lang="ts">
import ArticleCards from '../components/Cards/ArticleCards.vue';
</script>