import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./scss/Main.scss";

import VueWriter from "vue-writer";
//AOS ANIMATION
import AOS from "aos";
import "aos/dist/aos.css";

createApp(App)
  .use(router)
  .use(store)
  .use(VueWriter)
  .use(AOS.init())
  .mount("#app");
