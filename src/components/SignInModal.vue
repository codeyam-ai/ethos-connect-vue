<script setup lang="ts">
const props = defineProps<{
  connectMessage?: string;
}>();
</script>

<template>
  <h1>
    {{ props.connectMessage }}
  </h1>
</template>

<style scoped>
h1 {
  color: red;
}
</style>
