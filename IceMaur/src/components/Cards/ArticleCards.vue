<template>
    <div class="article-cards">
        <ArticleCard v-for="article in articles.items" :article="article.fields"></ArticleCard>
    </div>
</template>

<script setup lang="ts">
import ContentfulClient from '../../data/ContentfulClient';
import Article from '../../objects/Article';
import ArticleCard from './ArticleCard.vue';
import { toRefs } from 'vue';

interface Props {
    max?: number;
}

const props = defineProps<Props>();
const { max } = toRefs(props);
const articles = await ContentfulClient.getEntries<Article>({
    content_type: 'article',
    "limit": max?.value ?? 100
});
</script>

<style scoped lang="less">
.article-cards {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}
</style>