import { ethos } from "ethos-connect";
import { createCrossingProviderForVueInReact } from "veaury";

const [ethosForVue, EthosConnectVueProvider] =
  createCrossingProviderForVueInReact(() => ({
    context: ethos.useContext({}),
  }));

export { ethosForVue, EthosConnectVueProvider };