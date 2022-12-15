<script setup lang="ts">
import { ethosForVue } from "../lib/EthosConnectProvider";
import { applyPureReactInVue } from "veaury";
import { ethos } from "ethos-connect";

const AddressWidget = applyPureReactInVue(ethos.components.AddressWidget);

const { context } = ethosForVue();
</script>

<template>
  <AddressWidget :externalContext="context" />
</template>

