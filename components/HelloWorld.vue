<template>
  <div>Hello, world: {{ msg }}</div>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Headline",
  props: {
    msg: String,
  },
});
</script>
