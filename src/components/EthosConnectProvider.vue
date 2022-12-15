<script setup lang="ts">
import EthosConnectWrapper from "./EthosConnectWrapper.vue";
import EthosConnectBase from "./EthosConnectBase.vue";
</script>

<template>
  <EthosConnectWrapper>
    <EthosConnectBase>
      <slot></slot>
    </EthosConnectBase>
  </EthosConnectWrapper>
</template>

