<script setup lang="ts">
import { applyPureReactInVue } from "veaury";
import { EthosConnectVueProvider } from "../lib/EthosConnectProvider";

const EthosConnectProvider = applyPureReactInVue(EthosConnectVueProvider);
</script>

<template>
  <EthosConnectProvider>
    <slot></slot>
  </EthosConnectProvider>
</template>