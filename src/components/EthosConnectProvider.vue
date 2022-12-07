<script setup lang="ts">
import SignInModal from "./SignInModal.vue";
import { onMounted } from "vue";

console.log("in setup script for Wrapper");

const props = defineProps<{
  connectMessage?: string;
}>();

onMounted(() => {
  console.log("wrapper mounted");
});
</script>

<template>
  <div>
    <slot></slot>
    After slot...
    <br />
    API key{{ $ethosConfigFromVueOptions.apiKey }}
    <SignInModal :connectMessage="props.connectMessage" />
  </div>
</template>
