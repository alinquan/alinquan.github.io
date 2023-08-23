module.exports = {
  lang: "en-US",
  title: "请叫我靓仔", // 网站标题
  description: "总结归纳学习中的知识", // 网站的描述
  base: "/web/", //  部署时的路径 默认 / ，
  head: [["link", { rel: "icon", href: "/favicon.ico" }]], // 添加网站图标 // 主题配置
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
      copyright: "Copyright © 2019-present Evan LiangZai",
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
};
