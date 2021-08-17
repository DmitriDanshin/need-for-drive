import {createApp} from "vue";
import App from "./App.vue";
import store from './store';
import VueGoogleMaps from "@fawmi/vue-google-maps";

createApp(App).use(store).use(VueGoogleMaps, {
  load: {
    key: "AIzaSyByH0uohvGloaF6pWtS5YwT3P4uih-WBcE"
  }
}).mount("#app");
