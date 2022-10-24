<template>
    <router-link v-if="to" :class="['spotify-button', type]" :to="to"> 
            <slot></slot>
    </router-link>
    <div v-else :class="['spotify-button', type]" @click="emit('click')"> 
            <slot></slot>
    </div>
</template>

<script setup lang="ts">
import { toRefs } from 'vue';

interface Props {
    to?: any,
    type?: "primary" | "secondary",
}

const props = withDefaults(defineProps<Props>(), {
    type: "primary"
});
const { to, type } = toRefs(props);

const emit = defineEmits([
  "click"
]);
</script>

<style scoped lang="less">
.spotify-button {
    display: inline-block;
    text-decoration: none;
    border-radius: 2rem;
    padding: 0.825rem 1.825rem;
    cursor: pointer;
    transition: all .3s;

    &:not([disabled="true"]):hover {
        text-decoration: none;
        opacity: unset;
        background-color: var(--color-main);
        color: var(--color-spotify-primary);
    }

    &[disabled="true"] {
        cursor: not-allowed;
        opacity: 0.7;
    }

    &.primary {
        background-color: var(--color-spotify-primary);
        color: var(--color-main);

        &:not([disabled="true"]):hover {
            background-color: var(--color-main);
            color: var(--color-spotify-primary);
        }
    }

    &.secondary {
        background-color: var(--color-main);
        color: var(--color-spotify-secondary);

        &:not([disabled="true"]):hover {
            background-color: var(--color-spotify-secondary);
            color: var(--color-main);
        }
    }
}
</style>