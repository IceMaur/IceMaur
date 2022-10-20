<template>
    <div :class="[className, 'brand-card']">
        <h2><i :class="['fa-brands', `fa-${className}`]"></i> {{title}}</h2>
        <slot></slot>
    </div>
</template>

<script setup lang="ts">
import { toRefs } from 'vue';

interface Props {
    title: string
}

const props = defineProps<Props>();
const { title } = toRefs(props);
const className = title.value.replace(" ", "-").toLowerCase();
</script>

<style scoped lang="less">
    .brand-card {
        padding: 2rem;
        border-radius: 1rem;
        text-align: center;
        max-width: 18rem;
        margin-bottom: 1rem;

        &.spotify {
            background: linear-gradient(125deg, var(--color-spotify-primary) 50%, var(--color-main) 100%);
            border: 0.25rem solid var(--color-spotify-secondary);
            box-shadow: 1px 1px 2rem var(--color-spotify-primary);
        }

        &.stack-overflow {
            background: linear-gradient(125deg, var(--color-stack-overflow-primary) 50%, var(--color-stack-overflow-secondary) 100%);
            border: 0.25rem solid var(--color-stack-overflow-tertiary);
            box-shadow: 1px 1px 2rem var(--color-stack-overflow-primary);
        }

        & h2 {
            margin-top: 0;
            text-align: left;
        }

        & .fa-spotify {
            color: var(--color-main);
        }

        & .fa-stack-overflow {
            color: var(--color-stack-overflow-secondary);
        }
    }
</style>