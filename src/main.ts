import { createApp } from "vue";
import "./style.css";

import "vuetify/styles";
import 'material-design-icons-iconfont/dist/material-design-icons.css';
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import { aliases, md } from 'vuetify/iconsets/md';

import { en, th } from "vuetify/locale";

import App from "./App.vue";

const vuetify = createVuetify({
  theme: {
    defaultTheme: "light",
  },
  icons: {
    defaultSet: 'md',
    aliases,
    sets: {
      md,
    },
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
