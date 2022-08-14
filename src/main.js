import { createApp, VueElement } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import "./assets/bootstrap.min.css";


const app = createApp(App);



app.use(router);
app.use(store);

app.mount("#app");
