import { VarNames } from 'enums/GlobalVueVariableNames';
import { EthosConnectStatus } from 'ethos-connect';
import { EthosConfiguration } from 'types/EthosConfiguration';
import { App, Plugin } from 'vue';
import AddressWidget from './components/AddressWidget.vue';
import EthosConnectProvider from './components/EthosConnectProvider.vue';

// The Install function used by Vue to register the plugin
export const EthosConnectPlugin: Plugin = {
    install(app: App, options: EthosConfiguration) {
        // makes ethosConfig available in your .vue file with const config = inject(VarNames.EthosConfig)
        app.provide(VarNames.EthosConfig, options)

        // register global components, so the NPM package consumers can use it in their app
        app.component('EthosConnectProvider', EthosConnectProvider)
        app.component('AddressWidget', AddressWidget)
    }
}