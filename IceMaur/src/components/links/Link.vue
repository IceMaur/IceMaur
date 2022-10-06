<template>
    <a :href="href" target="_blank"><slot></slot></a>
</template>

<script setup lang="ts">
import { toRefs } from 'vue';

interface Props {
  href: string;
}

const props = defineProps<Props>();
const { href } = toRefs(props);
</script>