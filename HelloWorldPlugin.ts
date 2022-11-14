import { App, Plugin } from 'vue';
import HelloWorld from './components/HelloWorld.vue'
import Wrapper from './components/Wrapper.vue';

// The Install function used by Vue to register the plugin
export const PackagePlugin: Plugin = {
    install(app: App) {
        // register HelloWorld as a global component, so you can use it wherever you want in your app
        app.component('HelloWorld', HelloWorld)
        app.component('Wrapper', Wrapper)
    }
}
