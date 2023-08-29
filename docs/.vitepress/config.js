import { pagefindPlugin } from "vitepress-plugin-pagefind";

module.exports = {
  title: "请叫我靓仔", // 网站标题
  description: "总结归纳学习中的知识", // 网站的描述
  base: "/", //  部署时的路径 默认 / ，
  head: [
    // 添加网站图标
    ["link", { rel: "icon", href: "/favicon.ico" }],
    // //引入播放器js
    [
      "script",
      {
        async: "",
        // src: "https://cdn.jsdelivr.net/npm/aplayer/dist/APlayer.min.js",
        src: "/music/APlayer.min.js",
      },
    ],
    [
      "script",
      {
        async: "",
        // src: "https://cdn.jsdelivr.net/npm/meting@2/dist/Meting.min.js",
        src: "/music/Meting.min.js",
      },
    ],
    [
      "link",
      {
        // href: "https://cdn.jsdelivr.net/npm/aplayer/dist/APlayer.min.css",
        href: "/music/Aplayer.css",
        rel: "stylesheet",
      },
    ],
  ], // 主题配置
  themeConfig: {
    logo: "/logo.jpg",
    // 导航栏配置
    nav: [
      { text: "首页", link: "/" },
      { text: "书签", link: "/bookmark/" },
      { text: "笔记", link: "/guide/" },
      // {
      //   text: "HTML/CSS",
      //   items: [
      //     { text: "HTML5", link: "/htmldocs/" },
      //     { text: "CSS3", link: "/cssdocs/" },
      //   ],
      // },
      // { text: "JavaScript", link: "/jsdocs/" },
      // { text: "关于作者", link: "" },
    ], //  左侧导航栏配置
    footer: {
      message: "Released under the MIT License.",
      copyright: "Copyright © 2019-present 靓仔",
    },
    sidebar: {
      htmldocs: [
        {
          text: "HTML5",
          children: [
            { text: "概况", link: "/htmldocs/" },
            { text: "入门", link: "/htmldocs/htmlone" },
            { text: "进阶", link: "/htmldocs/htmltwo" },
          ],
        },
      ],
      cssdocs: [
        {
          text: "css3",
          children: [
            { text: "css文档", link: "/cssdocs/" },
            { text: "css文档1", link: "/cssdocs/cssone" },
          ],
        },
      ],
    },
  },
  vite: {
    plugins: [
      //搜索插件
      // pagefindPlugin({
      //   encode: false,
      //   tokenize: "full", // 解决汉字不能多个输入
      // }),
    ],
  },
  vue: {
    template: {
      compilerOptions: {
        isCustomElement: (tag) => tag.startsWith("meting-"),
      },
    },
  },
};
