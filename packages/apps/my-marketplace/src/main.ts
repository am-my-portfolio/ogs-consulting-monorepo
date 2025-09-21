import "@/assets/css/main.css";
import FontAwesomeIcon from "@/helpers/fontawesome.library";
import { createApp } from "vue";

import App from "./App.vue";
import router from "./router";
import auth0 from "@/plugins/auth0.plugin";
import pinia from "@/plugins/pinia.plugin";

const app = createApp(App);

app.component("font-awesome-icon", FontAwesomeIcon);
app.use(router).use(pinia).use(auth0);
app.mount("#app");
