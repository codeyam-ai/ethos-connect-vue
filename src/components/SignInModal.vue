<script setup lang="ts">
const props = defineProps<{
  connectMessage?: string;
}>();
</script>

<template>
  <div class="dialog">
    {{ props.connectMessage }}
  </div>
</template>

<!-- <style scoped>
.dialog {
  background-color: blue;
  padding: 1rem;
}
</style> -->
