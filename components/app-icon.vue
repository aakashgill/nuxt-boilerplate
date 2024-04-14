<template>
  <svg
    :width="width || 16"
    :height="height || 16"
    v-html="getIcon()"></svg>
</template>

<script setup lang="ts">
const props = defineProps({
  name: String,
  width: String,
  height: String,
});

const svgIcons = {
    caretDown: `<path fill="transparent" d="M1 1L7 7L13 0.999999" stroke="currentColor"/>`,
};
function getIcon() {
  return `${svgIcons[props.name]}`;
}
</script>
