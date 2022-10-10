<template>
   <router-link class="header-link" :to="`/${href}`">{{name}}</router-link>
</template>

<script setup lang="ts">
import { toRefs } from 'vue';

interface Props {
    name: string;
}

const props = defineProps<Props>();
const { name } = toRefs(props);
const href = name.value.replace(" ", "-").toLowerCase();
</script>

<style scoped lang="less">
.header-link {
    margin-left: 1rem;
    margin-right: 1rem;

    &:nth-child(2) {
        margin-left: auto;
    }

    &:last-of-type {
        margin-right: 5rem;
    }

    color: var(--color-secondary);
    text-decoration: none;
    font-weight: bold;
}
</style>