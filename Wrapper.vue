<script setup lang="ts">
defineProps<{
  msg: string;
}>();
</script>

<template>
  <div>
    Before slot + msg: {{ msg }}
    <slot></slot>
    After slot
  </div>
</template>
