import { createApp } from "vue";
import "./style.css";

import "vuetify/styles";
import "material-design-icons-iconfont/dist/material-design-icons.css";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import { aliases, md } from "vuetify/iconsets/md";

import { en, th } from "vuetify/locale";

import { createWebHistory, createRouter } from "vue-router";

import App from "./App.vue";
import NotFound from "./components/NotFound.vue";
import Home from "./components/Home.vue";
import Gift from "./components/Gift.vue";


const routes = [
  { path: "/", component: Home },
  { path: "/gift", component: Gift },
  { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

const vuetify = createVuetify({
  theme: {
    defaultTheme: "light",
  },
  icons: {
    defaultSet: "md",
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

createApp(App).use(router).use(vuetify).mount("#app");
