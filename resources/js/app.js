import {createApp} from 'vue'

import ExampleComponent from './components/ExampleComponent.vue';
import HelloWorld from './components/HelloWorld.vue';


const app = createApp({});
app.component('example-component', ExampleComponent);
app.component('hello-world', HelloWorld);

// mount the app to the DOM
app.mount('#app');

require('./bootstrap');

// const files = require.context('./', true, /\.vue$/i)
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))
