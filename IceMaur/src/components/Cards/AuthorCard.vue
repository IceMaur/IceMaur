<template>
    <div v-if="author?.name" class="author-card">
        <router-link :to="{name: 'author',
            params: {
                name: author.name
            }}">
            <img v-if="author.picture?.fields.file.url" 
                class="author-card-image" 
                :alt="author.picture.fields.description" 
                :src="author.picture.fields.file.url" />
            <h2 class="author-card-name">{{author.name}}</h2>
        </router-link>
    </div>
</template>

<script setup lang="ts">
import { toRefs } from 'vue';
import Author from '../../objects/Author';

interface Props {
    author?: Author
}

const props = defineProps<Props>();
const { author } = toRefs(props);
</script>

<style scoped lang="less">
.author-card {
    background-color: var(--color-main);
    padding: 0.5rem 2rem;
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

    & a {
        display: flex;
        align-items: center;
        justify-content: center;
        text-decoration: none;

        &:hover {
            opacity: unset;
        }
    }

    &-image {
        object-fit: cover;
        width: 4rem;
        height: 4rem;
        margin-left: auto;
        margin-right: 0.5rem;
    }

    &-name {
        color: var(--color-primary);
    }
}
</style>