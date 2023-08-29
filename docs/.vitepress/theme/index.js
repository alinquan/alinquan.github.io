import DefaultTheme from "vitepress/theme";
import Layout from "./Layout.vue";

export default {
  ...DefaultTheme,
  Layout,
  async enhanceApp({ app }) {
    //注册全局组件
    // app.component("Music", Music);
  },
};
