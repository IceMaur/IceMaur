<template>
    <div class="article-cards">
        <div v-for="article in articles.items" class="article-card">
            <router-link :to="{name: 'blogDetail',
                params: {
                   title: article.fields.title
                }}">
                <h2>{{article.fields.title}}</h2>
            </router-link>
        </div>
    </div>
</template>

<script setup lang="ts">
import ContentfulClient from '../../data/ContentfulClient';
import Article from '../../objects/Article';

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

.article-card {
    --article-max-width: 100%;
    background-color: var(--color-main);
    padding: 2rem;
    border-radius: 1rem;
    margin: 1rem;
    width: calc(var(--quote-max-width) - 8rem);
    display: flex;
    flex-direction: column;
    justify-content: center;
    transition: all .3s;

    &:hover {
        transform: scale(1.1);
    }

    & h2 {
        color: var(--color-primary);
    }

    @media only screen and (min-width: 768px) {
        --article-max-width: 50%;
    }

    @media only screen and (min-width: 992px) {
        --article-max-width: 33%;
    }

    @media only screen and (min-width: 1200px) {
        --article-max-width: 25%;
    }
}
</style>