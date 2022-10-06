<template>
    <div class="quote">
        <p>
            <i class="fa fa-quote-left"></i> <slot></slot> <i class="fa fa-quote-right"></i>
        </p>
        <div v-if="author?.name" class="author">
            <h3 class="author-name">{{author.name}}</h3>
            <img v-if="author?.imageUrl" class="author-image" :src="author.imageUrl" />
        </div>
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

<style lang="less">
.quote {
    --quote-max-width: 100%;
    background: linear-gradient(125deg, var(--color-main) 70%, var(--color-tertiary) 30%);
    padding: 2rem;
    border-radius: 1rem;
    margin: 1rem;
    width: calc(var(--quote-max-width) - 8rem);
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    font-style: italic;
    transition: all .3s;

    &:hover {
        transform: scale(1.1);
    }

    & p, 
    span,
    i,
    h3 {
        color: var(--color-primary);
    }

    @media only screen and (min-width: 768px) {
        --quote-max-width: 50%;
    }

    @media only screen and (min-width: 992px) {
        --quote-max-width: 33%;
    }

    @media only screen and (min-width: 1200px) {
        --quote-max-width: 25%;
    }
}

.author {
    display: flex;
    align-items: center;
    justify-content: center;

    &-name {
        margin-right: 0.5rem;
    }

    &-image {
        width: 2rem;
        height: 2rem;
    }
}
</style>