<script setup lang="ts">
import { ethosForVue } from "../lib/EthosConnectProvider";
import { DetachedEthosConnectProvider } from "ethos-connect";
import { applyPureReactInVue } from "veaury";
import { VarNames } from "../enums/GlobalVueVariableNames";
import { inject } from "vue";

const ethosConfig = inject(VarNames.EthosConfig);

const EthosConnectProvider = applyPureReactInVue(DetachedEthosConnectProvider);

const { context } = ethosForVue() || {};

if (context) {
  context.init(ethosConfig);
}
</script>

<template>
  <EthosConnectProvider :context="context">
    <slot></slot>
  </EthosConnectProvider>
</template>
