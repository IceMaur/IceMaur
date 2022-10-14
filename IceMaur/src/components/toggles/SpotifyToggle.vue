<template>
    <div class="spotify-option">
        <Toggle class="spotify-toggle" v-model="toggleModel" :falseValue="null" :trueValue="trueValue"></Toggle>
        <label><slot></slot></label>
    </div>
</template>

<script setup lang="ts">
import { toRefs, watch, ref } from 'vue';
import Toggle from '@vueform/toggle'

interface Props {
    model: any,
    trueValue: string
}

const emit = defineEmits([
  "change"
]);

const props = defineProps<Props>();
const { model, trueValue } = toRefs(props);

const toggleModel = ref(model.value);

watch(toggleModel, (toggleValue) => {
    emit("change", toggleValue);
});
</script>

<style src="@vueform/toggle/themes/default.css"></style>

<style scoped lang="less">
    .spotify {
        &-option {
            margin-bottom: 0.5rem;
        }

        &-toggle {
            margin-right: 0.5rem;

            --toggle-bg-on: var(--color-spotify-primary);
        }
    }
</style>