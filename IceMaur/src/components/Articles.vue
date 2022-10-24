<template>
    <h2><slot>Articles</slot></h2>
    <div class="article-cards">
        <ArticleCard v-for="article in articles" :article="article.fields"></ArticleCard>
    </div>
</template>

<script setup lang="ts">
import { Entry } from 'contentful';
import { toRefs } from 'vue';
import Article from '../objects/Article';
import ArticleCard from './cards/ArticleCard.vue';

interface Props {
    articles: Entry<Article>[]
}

const props = defineProps<Props>();
const { articles } = toRefs(props);
</script>

<style scoped lang="less">
.article-cards {
    display: flex;
    flex-wrap: wrap;
}
</style>