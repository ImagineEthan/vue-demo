import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import routes from "@/router/index";
import pinia from "@/store/pinia";

const app = createApp(App);
app.use(pinia);
app.use(routes);
app.use(ElementPlus);

app.mount("#app");
