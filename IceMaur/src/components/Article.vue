<template>
    <h1>{{article.fields.title}}</h1>
    <RichTextRenderer :document="article.fields.content" :nodeRenderers="null" :markRenderers="null" />
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
const article = articles.items[0];
</script>