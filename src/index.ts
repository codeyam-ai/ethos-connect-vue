import { EthosConnectPlugin } from './EthosConnectPlugin';
import AddressWidget from './components/AddressWidget.vue';
import EthosConnectProvider from './components/EthosConnectProvider.vue';
import { ethosForVue } from './lib/EthosConnectProvider';
import { EthosConfiguration } from './types/EthosConfiguration';
import { Chain, EthosConnectStatus, TransactionBlock, verifyMessage, IntentScope } from 'ethos-connect';

export {
    EthosConnectPlugin,
    EthosConnectProvider,
    AddressWidget,
    ethosForVue,
    EthosConfiguration,
    Chain,
    EthosConnectStatus,
    TransactionBlock,
    verifyMessage,
    IntentScope
};
