<template>
  <button
    :type="type"
    class="btn"
    :class="computedClasses()">
    <slot />
  </button>
</template>

<script setup lang="ts">
const props = defineProps({
  theme: String,
  type: {
    type: String,
    default: "button",
  }
});

function computedClasses() {
  return {
    "btn--outline": props.theme === "outline",
    "btn--link": props.theme === "link",
    "btn--full-width": props.theme === "full-width",
  };
}
</script>

<style lang="scss" scoped>
.btn {
  background-color: var(--color-blue);
  border: 1px solid var(--color-blue);
  color: var(--color-white);
  cursor: pointer;
  border-radius: 4px;
  font-size: 14px;
  font-weight: 500;
  padding: 10px 16px;
  height: 40px;
  width: auto;
}
.btn:hover {
  background-color: var(--color-blue);
  color: var(--color-white);
  text-decoration: none;
}
.btn--outline {
  background-color: var(--color-white);
  border: 1px solid var(--color-blue);
  color: var(--color-blue);
}
.btn--link,
.btn--link:hover {
  background-color: transparent;
  border: 0;
  color: var(--color-blue);
  text-decoration: underline;
}
.btn--full-width {
  width: 100%;
}
</style>
