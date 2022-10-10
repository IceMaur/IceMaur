<template>
    <div class="article-cards">
        <ArticleCard v-for="article in articles.items" :article="article.fields"></ArticleCard>
    </div>
</template>

<script setup lang="ts">
import ContentfulClient from '../../data/ContentfulClient';
import Article from '../../objects/Article';
import ArticleCard from './ArticleCard.vue';

const articles = await ContentfulClient.getEntries<Article>({
    content_type: 'article',
});
</script>

<style scoped lang="less">
.article-cards {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}
</style>