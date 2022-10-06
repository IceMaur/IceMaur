<template>
    <div>
        <i :class="['fa-brands', className]"></i>
        <a :href="href" target="_blank">{{name}}</a>
    </div>
</template>

<script setup lang="ts">
import { toRefs } from 'vue';

interface Props {
    href: string;
    name: string;
}

const props = defineProps<Props>();
const { href, name } = toRefs(props);
const className = "fa-" + name.value.replace(" ", "-").toLowerCase();
</script>