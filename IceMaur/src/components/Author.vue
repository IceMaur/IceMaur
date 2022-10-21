<template>
    <div v-if="author" class="author">
        <div class="author-intro">
            <div class="author-profile">
                <a target="_blank" :href="author.link">
                    <img v-if="author.picture?.fields.file.url"
                        class="author-profile-picture"
                        :alt="author.picture.fields.description" 
                        :src="author.picture.fields.file.url" />
                    <div>
                        <h1 class="author-profile-name">{{author.name}}</h1>
                        <h2 class="author-profile-title">{{author.title}}</h2>
                    </div>
                </a>
                <div v-if="author.about?.content" v-html="documentToHtmlString(author.about)" class="author-profile-content"></div>
            </div>
            <div class="author-cards">
                <BrandCard v-if="author.spotifyPlaylistId" title="Spotify">
                    <SpotifyPlaylistIFrame class="spotify-card-frame" :playlistId="author.spotifyPlaylistId"></SpotifyPlaylistIFrame>
                    <SpotifyPlaylistButton type="secondary" :playlistId="author.spotifyPlaylistId"></SpotifyPlaylistButton>
                </BrandCard>
                <BrandCard v-if="author.stackOverflowId" title="Stack Overflow">
                    <a class="stack-overflow-card-frame" target="_blank" :href="`https://stackoverflow.com/users/${author.stackOverflowId}`">
                        <img :src="`https://stackoverflow.com/users/flair/${author.stackOverflowId}.png?theme=dark`" width="208" height="58">
                    </a>
                </BrandCard>
            </div>
        </div>
        <template v-if="quotes?.items?.length">
            <h2>Quotes</h2>
            <div class="author-quotes">
                <QuoteCard v-for="quote in quotes.items">{{quote.fields.quote}}</QuoteCard>
            </div>
        </template>
        <template v-if="articles?.items?.length">
            <h2>Articles</h2>
            <div class="author-articles">
                <ArticleCard v-for="article in articles.items" :article="article.fields"></ArticleCard>
            </div>
        </template>
    </div>
    <template v-else>
        <NotFound></NotFound>
    </template>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router';
import ContentfulClient from '../data/ContentfulClient';
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
import NotFound from './NotFound.vue';
import Author from '../objects/Author';
import Article from '../objects/Article';
import ArticleCard from './cards/ArticleCard.vue';
import QuoteCard from './cards/QuoteCard.vue';
import BrandCard from './cards/BrandCard.vue';
import Quote from '../objects/Quote';
import SpotifyPlaylistIFrame from './iFrames/SpotifyPlaylistIFrame.vue';
import SpotifyPlaylistButton from './buttons/SpotifyPlaylistButton.vue';

const route = useRoute();
const name = route.params.name;
const authors = await ContentfulClient.getEntries<Author>({
    content_type: 'author',
    'fields.name': name
});
const author = authors.items[0]?.fields;
const quotes = await ContentfulClient.getEntries<Quote>({
    content_type: 'quote',
    'fields.author.sys.contentType.sys.id': 'author',
    'fields.author.fields.name': name
});
const articles = await ContentfulClient.getEntries<Article>({
    content_type: 'article',
    'fields.author.sys.contentType.sys.id': 'author',
    'fields.author.fields.name': name
});
</script>

<style scoped lang="less">
.author {
    padding-top: 3rem;

    &-intro {
        display: flex;
        flex-wrap: wrap;
        align-items: flex-start;
        justify-content: space-between;
        margin-bottom: 3rem;
    }

    &-profile {
        max-width: 650px;
        margin-bottom: 1rem;

        & a {
            display: flex;
            align-items: center;
            text-decoration: none;

            &:hover {
                opacity: unset;
            }
        }

        &-picture {
            object-fit: cover;
            width: 6.5rem;
            height: 6.5rem;
            margin-right: 0.5rem;
        }

        &-name,
        &-title {
            margin-top: 0;
            margin-bottom: 0;
        }

        &-title {
            font-size: 1rem;
        }
    }

    &-cards {
        position: -webkit-sticky;
        position: sticky;
        top: 6.5rem;
        align-self: flex-start;
    }

    &-articles,
    &-quotes {
        display: flex;
        flex-wrap: wrap;
    }
}

.stack-overflow-card-frame {
    margin-bottom: 1rem;
    transition: all .3s;
    
    & img {
        transition: all .3s;
        box-shadow: 0.5rem 0.25rem 1rem var(--color-stack-overflow-tertiary);
    }

    &:hover img {
        transform: scale(1.1);
    }
}
</style>