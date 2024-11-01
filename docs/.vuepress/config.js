import { viteBundler } from '@vuepress/bundler-vite'
import { defineUserConfig } from 'vuepress'
import { hopeTheme } from "vuepress-theme-hope";
import { navbarConfig } from './configs/navbar.json'
import { sidebarConfig } from './configs/sidebar.json'
import { notFoundMsg } from './configs/notFoundMsg.json'

export default defineUserConfig({
  bundler: viteBundler(), // vite
  lang: 'zh-CN', // zh-CN | en-US
  public: 'docs/public', // public dir
  title: '有兽焉粉丝服务器帮助中心', // title
  description: '有兽焉 Minecraft Java 国际版粉丝服务器', // description
  shouldPrefetch: false,
  theme: hopeTheme({
    license: 'CC-BY-NC-SA-4.0',
    favicon: '/images/logo.png',
    footer: '<a href="https://beian.miit.gov.cn/">晋ICP备2023005192</a>',
    displayFooter: true,
    home: '/', // home page
    repo: 'ZoruaFox/ysy-fanserver-helppage',
    editLink: true, // true | false
    editLinkText: '在Github编辑此页', // edit link text
    docsRepo: 'https://github.com/ZoruaFox/ysy-fanserver-helppage',
    docsBranch: 'master',
    docsDir: 'docs',
    editLinkPattern: ':repo/edit/:branch/:path',
    backToHome: '返回首页', // back to home page text
    contributors: false, // true | false
    openInNewWindow: '在新窗口打开', // open in new window text
    logo: '/images/logo.png', //这个皮皮好可爱（
    // smoothScroll: true,
    hotReload: true,  //DEBUG ONLY!!!!!
    iconAssets: "iconify",

    routeLocales: {
      notFoundMsg: notFoundMsg
    },

    navbar: navbarConfig,

    // 侧边栏数组
    // 所有页面会使用相同的侧边栏
    sidebar: sidebarConfig,
    sidebarDepth: 2, // 侧边栏显示2级

    plugins: {
      searchPro: true,
      // searchPro: {
      //   插件选项
      // },
      mdEnhance: {
        // 启用下角标功能
        sub: true,
        // 启用上角标
        sup: true,
        tasklist: true,
        // 启用图片懒加载
        // 启用图片标记
        footnote: true,
        demo: true,
      },
      shiki: {
        themes: {
          light: "one-light",
          dark: "one-dark-pro",
          },
        },
      markdownHint: true,
      markdownImage: true,
      markdownTab: true,
      pwa: {
        showInstall: true,
        favicon: '/images/favicon/favicon.ico',
        manifest: {
          icons: [
            {
              "sizes": "192x192",
              "src": "/images/favicon/android-chrome-192x192.png",
              "type": "image/png"
            },
            {
              "sizes": "512x512",
              "src": "/images/favicon/android-chrome-512x512.png",
              "type": "image/png"
            }
          ]
        },
        apple: {
          icon: '/images/favicon/apple-touch-icon.png',
          statusBarColor: '#46bd87',
        }
      },
      copyCode: true,
    },
  }),
})
