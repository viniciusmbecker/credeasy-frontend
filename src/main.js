import { createApp, VueElement } from "vue";
import App from "./App.vue";
import router from "./router";

import "./assets/bootstrap.min.css";

// import http from '@/http/index.js';

const app = createApp(App);

// app.config.globalProperties.$http = http;


app.use(router);

app.mount("#app");
