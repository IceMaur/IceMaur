<template>
    <img class="article-image" :alt="article.image.fields.title" :src="article.image.fields.file.url" />
    <div class="article-content">
        <h1>{{article.title}}</h1>
        <RichTextRenderer :document="article.content" :nodeRenderers="null" :markRenderers="null" />
    </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router';
import RichTextRenderer from 'contentful-rich-text-vue-renderer';
import ContentfulClient from '../data/ContentfulClient';
import Article from '../objects/Article';

const route = useRoute();
const title = route.params.title;
const articles = await ContentfulClient.getEntries<Article>({
    content_type: 'article',
    'fields.title': title
});
const article = articles.items[0].fields;
</script>

<style scoped lang="less">
.article-image {
    width: 100vw;
    object-fit: cover;
    max-height: 60vh;
    margin-top: -0.25rem;
    margin-left: 50%;
    transform: translateX(-50%);
}

.article-content {
    max-width: 40rem;
    margin-left: auto;
    margin-right: auto;
}
</style>