---
lastUpdated: true
date: 2024-08-10
---

# 创建发布vuepress
## 参考
vuepress文档 -> [vuepress docs][docs-url] \
先安装好node.js

## 更换国内源
否则可能初始化失败
``` bat
npm config set registry https://r[create_vuepress.md](create_vuepress.md)egistry.npmmirror.com/
```

## 安装环境
初次创建 & 安装 -> [去看看][install-url] \
创建时会自动运行

## 本地运行 & 打包
本地运行
``` bat
npm run docs:dev
```
打包（输出dist）
``` bat
npm run docs:build
```

## 部署
创建项目时会让你创建 ./github/workflows/deploy-docs.yml文件，用来在github上自动部署的 \
文档 -> [部署][deploy-url]

### ！！踩坑！！

[//]: # (支持 tip warning danger details)
::: warning
github上的部署流程 是通过./github/workflows/deploy-docs.yml 执行的， \
会先通过源码生成实际的前端代码（dist）并放在另一个分支上（这里叫gh-pages），发布之后要到 \
Settings 中 把Build and deployment 设置为对应分支，否则页面访问为404
![图片](/images/view/setting.png)
:::

[docs-url]: https://vuepress.vuejs.org/zh/guide/introduction.html
[install-url]:https://vuepress.vuejs.org/zh/guide/getting-started.html
[deploy-url]:https://vuepress.vuejs.org/zh/guide/deployment.html