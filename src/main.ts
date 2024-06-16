import { createApp } from "vue";
import "./style.css";

import "vuetify/styles";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";

import { en, th } from "vuetify/locale";

import App from "./App.vue";

const vuetify = createVuetify({
  theme: {
    defaultTheme: "light",
  },
  components,
  directives,
  locale: {
    locale: "en",
    fallback: "en",
    messages: { en, th },
  },
});

createApp(App).use(vuetify).mount("#app");
