module.exports = {
  markdown: {
    lineNumbers: true
  },
  title: "yhlben的前端日志",
  description: "欢迎访问我的前端日志",
  ga: "UA-121061441-1",
  head: [
    ['link', { rel: 'icon', href: '/hero.jpeg' }]
  ],
  themeConfig: {
    repo: "yhlben/blog",
    nav: [
      {
        text: "博客",
        link: "/blog/"
      },
      {
        text: "面试题",
        link: "/interview/"
      },
      {
        text: "阅读",
        link: "/book/"
      },
    ],
    sidebar: {
      "/blog/": [
        "cdfang-spider",
        "project-git",
        "project-dependencies",
        "project-image",
        'project-commitlint',
        "project-test",
        "project-node",
        "library-react",
        "libary-react-core",
        "library-react-ssr",
        'library-react-hooks',
        "2018",
        "other-tools",
        "other-vscode",
        'project-webpack-entry',
        'project-webpack-flow',
        "project-webpack",
        "library-vue",
        "css",
        "css-next",
        "css-useful",
        "css-devicePixelRatio",
        "css-houdini-star",
        "library-miniProgram",
        "osi-http",
        "osi-https",
        "osi-web-security",
        "osi-hijack",
        "frontend",
        "library-redux",
        "library-rxjs",
        "libary-koa",
        'operation-web-login',
        "operation-performance",
        "operation-docker-micro-service",
        "operation-linux",
        "operation-linux-login",
        "operation-nginx-load-balancing",
        "js-promise",
        'js-this',
        'js-operator-priority',
        "js-jsBridge",
        "js-module",
        "js-inherit",
        "js-event",
        "js-form",
        "js-html5-program",
        "js-recursion",
        "js-object-ergodic",
        "js-design-pattern",
        "base-functional",
        "base-structure",
        "base-structure-base-select",
        "base-structure-base-sort",
        "base-structure-high-algorithm",
        "base-structure-senior-sort",
      ],
      "/interview/": [
        "js",
        "css",
        "html",
        "base",
        "suanfa",
        "framework"
      ],
      "/book/": [
        "book-webgl",
        "book-maintainable-js",
        "book-how-network-connect",
        "book-regular",
        "book-code",
        "book-http2",
        "book-http-graph"
      ],
    },
    lastUpdated: "更新时间",
    docsDir: "docs",
    editLinks: true,
    editLinkText: "帮助我完善这篇内容🙏",
  }
};
