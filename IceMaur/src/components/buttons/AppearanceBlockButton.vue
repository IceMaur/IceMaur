<template>
    <input type="radio" :id="`appearance-${value}`" :value="value" v-model="settingsStore.appearance" />
    <label :for="`appearance-${value}`"><slot></slot></label>
</template>

<script setup lang="ts">
import { toRefs } from 'vue';
import { useSettingsStore } from '../../store/settings.js'

interface Props {
    value?: string
}

const props = withDefaults(defineProps<Props>(), { value: ""});
const { value } = toRefs(props);
const settingsStore = useSettingsStore();
</script>

<style scoped lang="less">
    input[type="radio"] {
        display: none;

        &+ label {
            cursor: pointer;
            margin-right: 1rem;
            margin-bottom: 0.5rem;
            padding: 0.5rem;
            background: var(--color-main);
            color: var(--color-secondary);
            display: inline-block;
        }
    }

    input:checked + label {
        background: var(--color-tertiary);
        color: var(--color-main);
    }

    #appearance-spotify:checked + label {
        background: var(--color-spotify-primary);
    }

    #appearance-author-page:checked + label {
        background: radial-gradient(ellipse farthest-corner at right bottom, #FEDB37 0%, #FDB931 8%, #9f7928 30%, #8A6E2F 40%, transparent 80%), radial-gradient(ellipse farthest-corner at left top, #FFFFFF 0%, #FFFFAC 8%, #D1B464 25%, #5d4a1f 62.5%, #5d4a1f 100%);
    }
</style>