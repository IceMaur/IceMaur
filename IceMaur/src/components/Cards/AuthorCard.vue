<template>
    <div v-if="author?.name" class="author-card">
        <img v-if="author.picture?.fields.file.url" 
            class="author-card-image" 
            :alt="author.picture.fields.description" 
            :src="author.picture.fields.file.url" />
        <h2 class="author-card-name">{{author.name}}</h2>
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
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--color-main);
    padding: 0.5rem 2rem;
    border-left: 0px solid var(--color-tertiary);
    border-right: 8px solid var(--color-tertiary);
    border-bottom: 0.5rem solid var(--color-secondary);
    width: max-content;
    margin-left: auto;
    transform: skew(-6deg);
    box-shadow: 0.25rem 0.125rem 1rem var(--color-tertiary);

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