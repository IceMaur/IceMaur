<template>
    <router-link :to="{
        name: 'author',
        params: {
            name: authorName
        }}">
        <slot></slot>
    </router-link>
</template>

<script setup lang="ts">
import { toRefs } from 'vue';

interface Props {
    authorName: string
}

const props = defineProps<Props>();
const { authorName } = toRefs(props);
</script>

<style scoped lang="less">
a {
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;

    &:hover {
        opacity: unset;
    }
}
</style>