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
    color: var(--color-secondary);
    text-decoration: none;
    font-weight: bold;

    &:last-of-type {
        margin-right: 5rem;
    }
}

.author-page,
.dark { 
    .header-link {
    color: var(--color-main);
    }
}

.spotify .header-link {
    color: var(--color-spotify-secondary);
}
</style>