<template>
    <div v-if="author?.name" class="author-card">
        <AuthorLink :authorName="author.name">
            <img v-if="author.picture?.fields.file.url" 
                class="author-card-image" 
                :alt="author.picture.fields.description" 
                :src="author.picture.fields.file.url" />
            <div>
                <h2 class="author-card-name">{{author.name}}</h2>
                <h3 class="author-card-title">{{author.title}}</h3>
            </div>
        </AuthorLink>
    </div>
</template>

<script setup lang="ts">
import { toRefs } from 'vue';
import Author from '../../objects/Author';
import AuthorLink from '../links/AuthorLink.vue';

interface Props {
    author?: Author
}

const props = defineProps<Props>();
const { author } = toRefs(props);
</script>

<style scoped lang="less">
.author-card {
    background-color: var(--color-main);
    padding: 1rem 2rem;
    width: max-content;
    margin-top: 2rem;
    margin-left: auto;
    border: 0.125rem solid var(--color-tertiary);
    border-radius: 16px;
    transition: all .3s;

    &:hover {
        border-top: 0.0625rem solid var(--color-tertiary);
        border-left: 0.0625rem solid var(--color-tertiary);
        border-right: 1rem solid var(--color-tertiary);
        border-bottom: 0.5rem solid var(--color-secondary);
        transform: skew(-6deg);
        box-shadow: 0.25rem 0.125rem 1rem var(--color-tertiary);
    }

    &-image {
        object-fit: cover;
        width: 4rem;
        height: 4rem;
        margin-left: auto;
        margin-right: 0.625rem;
    }

    &-name,
    &-title {
        color: var(--color-primary);
        margin-top: 0;
        margin-bottom: 0;
    }
}
</style>