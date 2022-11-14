import { App, Plugin } from 'vue';
import Wrapper from './components/Wrapper.vue';

// The Install function used by Vue to register the plugin
const EthosConnectPlugin: Plugin = {
    install(app: App) {
        // register HelloWorld as a global component, so you can use it wherever you want in your app
        app.component('Wrapper', Wrapper)
    }
}

export default EthosConnectPlugin