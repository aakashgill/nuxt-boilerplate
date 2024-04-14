<template>
  <footer class="page-footer">
    <div class="page-container">
      &#169; {{ currentYear }}
    </div>
  </footer>
</template>

<script setup lang="ts">
  let currentYear = new Date().getFullYear();
</script>

<style lang="scss">
  .page-footer {
    padding: 40px 0;
    background-color: var(--color-black);
    color: var(--color-white);
  }
</style>