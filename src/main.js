import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

const app = createApp(App).use(store).use(router);
app.config.compilerOptions.isCustomElement = (tag) => {
  return tag.startsWith("math-live");
};

app.mount("#app");
