<template>
    <div class="article-card">
        <router-link :to="{name: 'blogDetail',
            params: {
                title: article.title
            }}">
            <img :alt="article.image.fields.title" :src="article.image.fields.file.url" />
            <div class="article-card-content">
                <h2>{{article.title}}</h2>
            </div>
        </router-link>
    </div>
</template>

<script setup lang="ts">
import { toRefs } from 'vue';
import Article from '../../objects/Article';

interface Props {
    article: Article
}

const props = defineProps<Props>();
const { article } = toRefs(props);
</script>

<style scoped lang="less">
.article-card {
    --article-max-width: 100%;
    --article-space-between: 0rem;
    background-color: var(--color-main);
    border-radius: 1rem;
    margin: 1rem;
    width: calc(var(--article-max-width) - var(--article-space-between));
    transition: all .3s;
    overflow: hidden;

    &:hover {
        transform: scale(1.1);
    }

    & a {
        text-decoration: none;

        &:hover {
            opacity: unset;
        }
    }

    & img {
        width: 100%;
        height: 10rem;
        object-fit: cover;
    }

    & h2 {
        color: var(--color-primary);
    }

    & .article-card-content {
        padding: 0 2rem 1rem;
    }

    @media only screen and (min-width: 768px) {
        --article-space-between: 8rem;
        --article-max-width: 50%;
    }

    @media only screen and (min-width: 992px) {
        --article-max-width: 43%;
    }

    @media only screen and (min-width: 1200px) {
        --article-max-width: 30%;
    }

    @media only screen and (min-width: 1400px) {
        --article-max-width: 27rem;
    }
}
</style>