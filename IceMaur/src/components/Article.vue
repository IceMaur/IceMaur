<template>
    <template v-if="article">
        <img class="article-image" :alt="article.image.fields.title" :src="article.image.fields.file.url" />
        <div class="article">
            <h1>{{article.title}}</h1>
            <div class="article-content" v-html="articleContent"></div>
            <AuthorCard :author="article.author.fields"></AuthorCard>
        </div>
        <div v-if="article.relatedArticles" class="related-articles">
            <h2>Related articles</h2>
            <div class="related-article-cards">
                <ArticleCard v-for="relatedArticle in article.relatedArticles" :article="relatedArticle.fields"></ArticleCard>
            </div>
        </div>
    </template>
    <template v-else>
        <NotFound></NotFound>
    </template>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router';
import ContentfulClient from '../data/ContentfulClient';
import { BLOCKS } from '@contentful/rich-text-types';
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
import Article from '../objects/Article';
import AuthorCard from './Cards/AuthorCard.vue';
import ArticleCard from './Cards/ArticleCard.vue';
import NotFound from './NotFound.vue';

const route = useRoute();
const title = route.params.title;
const articles = await ContentfulClient.getEntries<Article>({
    content_type: 'article',
    'fields.title': title
});
const article = articles.items[0]?.fields;
const options = {
    renderNode: { 
            [BLOCKS.EMBEDDED_ASSET]: (asset: { data: { target: { fields: { title: any; description: any, file: any; }; }; }; }) => {
            const { title, description, file } = asset.data.target.fields;
            const mimeType = file.contentType;
            const mimeGroup = mimeType.split('/')[0];
            switch (mimeGroup) {
                case 'image':
                return `<figure><img class="article-content-image" alt="${title}" src="${file.url}" />
                    <figcaption>${description}</figcaption>
                    </figure>`;
            }
        },
        ['embedded-entry-inline']: (node) => {
            if (node.data.target.sys.contentType.sys.id === 'quote') {
                return `<div class="article-content-quote"><p>
                        <i class="fa fa-quote-left"></i> ${node.data.target.fields.quote} <i class="fa fa-quote-right"></i>
                    </p></div>`;
            }
            if (node.data.target.sys.contentType.sys.id === 'spotifyTrack') {
                return `<iframe style="border-radius:12px" 
                                src="https://open.spotify.com/embed/track/${node.data.target.fields.id}?utm_source=generator"
                                width="100%" 
                                height="352" 
                                frameBorder="0" 
                                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
                                loading="lazy">
                        </iframe>`;
            }
        }
    }
};
const articleContent = documentToHtmlString(article?.content, options);
</script>

<style scoped lang="less">
.article-image {
    width: 100vw;
    object-fit: cover;
    max-height: 60vh;
    margin-top: -0.25rem;
    margin-bottom: 2rem;
    margin-left: 50%;
    transform: translateX(-50%);

    @media only screen and (min-width: 768px) {
        margin-bottom: 3rem;
    }
}

.article {
    max-width: 40rem;
    margin-left: auto;
    margin-right: auto;

    & h1 {
        margin-top: 0;
    }
}

.related-articles {
    margin-top: 3rem;
}

.related-article-cards {
    display: flex;
    flex-wrap: wrap;
}
</style>