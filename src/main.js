import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./scss/Main.scss";

import VueWriter from "vue-writer";
//AOS ANIMATION
import AOS from "aos";
import "aos/dist/aos.css";
// Vuetify
import "vuetify/styles";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";

const vuetify = createVuetify({
  components,
  directives,
});

createApp(App)
  .use(store)
  .use(router)
  .use(vuetify)
  .use(VueWriter)
  .use(AOS.init())
  .mount("#app");
