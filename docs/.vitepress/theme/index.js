import DefaultTheme from "vitepress/theme";
import Layout from "./Layout.vue";
// import Music from "../../components/music.vue";

export default {
  ...DefaultTheme,
  Layout,
  enhanceApp({ app }) {
    //注册全局组件
    // app.component("Music", Music);
  },
};
