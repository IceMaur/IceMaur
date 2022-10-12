<template>
    <template v-if="author">
        <div class="author">
            <div class="author-profile">
                <a target="_blank" :href="author.link">
                    <img v-if="author.picture?.fields.file.url" 
                        :alt="author.picture.fields.description" 
                        :src="author.picture.fields.file.url" />
                    <h1>{{author.name}}</h1>
                </a>
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
import NotFound from './NotFound.vue';
import Author from '../objects/Author';

const route = useRoute();
const name = route.params.name;
const authors = await ContentfulClient.getEntries<Author>({
    content_type: 'author',
    'fields.name': name
});
const author = authors.items[0]?.fields;
</script>

<style scoped lang="less">
.author {
    padding-top: 3rem;
    max-width: 40rem;
    margin-left: auto;
    margin-right: auto;

    &-profile a {
        display: flex;
        align-items: center;
        text-decoration: none;

        &:hover {
            opacity: unset;
        }

        & img {
            object-fit: cover;
            width: 6.5rem;
            height: 6.5rem;
            margin-right: 0.5rem;
        }
    }
}
</style>