<template>
    <div>
        <i :class="['fa-brands', className]"></i>&nbsp;
        <Link :href="href">{{name}}</Link>
    </div>
</template>

<script setup lang="ts">
import Link from './Link.vue';
import { toRefs } from 'vue';

interface Props {
    href: string;
    name: string;
}

const props = defineProps<Props>();
const { href, name } = toRefs(props);
const className = "fa-" + name.value.toLowerCase();
</script>