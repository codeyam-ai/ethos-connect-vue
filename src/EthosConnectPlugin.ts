import { App, Plugin } from 'vue';
import EthosConnectProvider from './components/EthosConnectProvider.vue';
import { EthosConfiguration } from './types/EthosConfiguration';

// Extend the app.config.globalProperties to include the global config variable
declare module 'vue' {
    interface ComponentCustomProperties {
        $ethosConfigFromVueOptions: EthosConfiguration;
    }
}

// Used to create a new ColoredText. "options" will be whatever you add later to "app.use(ColoredTextPlugin, options);"
const createEthosConfiguration = (options: EthosConfiguration): EthosConfiguration => {
    return options
}


// The Install function used by Vue to register the plugin
export const EthosConnectPlugin: Plugin = {
    install(app: App, options: EthosConfiguration) {
        // makes ethosConfig available in your Vue.js app as either "$this.ethosConfigFromVueOptions" (in your Source) or "{{ $ethosConfigFromVueOptions }}" in your templates
        app.config.globalProperties.$ethosConfigFromVueOptions = createEthosConfiguration(options)

        // register HelloWorld as a global component, so you can use it wherever you want in your app
        app.component('EthosConnectProvider', EthosConnectProvider)
    }
}
