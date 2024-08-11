import{_ as e,o as s,c as a,e as t}from"./app-DrVrfsFT.js";const r="/images/view/setting.png",n={},i=t(`<h1 id="创建发布vuepress" tabindex="-1"><a class="header-anchor" href="#创建发布vuepress"><span>创建发布vuepress</span></a></h1><h2 id="参考" tabindex="-1"><a class="header-anchor" href="#参考"><span>参考</span></a></h2><p>vuepress文档 -&gt; <a href="https://vuepress.vuejs.org/zh/guide/introduction.html" target="_blank" rel="noopener noreferrer">vuepress docs</a> <br> 先安装好node.js</p><h2 id="更换国内源" tabindex="-1"><a class="header-anchor" href="#更换国内源"><span>更换国内源</span></a></h2><p>否则可能初始化失败</p><div class="language-bat line-numbers-mode" data-highlighter="prismjs" data-ext="bat" data-title="bat"><pre><code><span class="line">npm config set registry https://r[create_vuepress.md](create_vuepress.md)egistry.npmmirror.com/</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h2 id="安装环境" tabindex="-1"><a class="header-anchor" href="#安装环境"><span>安装环境</span></a></h2><p>初次创建 &amp; 安装 -&gt; <a href="https://vuepress.vuejs.org/zh/guide/getting-started.html" target="_blank" rel="noopener noreferrer">去看看</a> <br> 创建时会自动运行</p><h2 id="本地运行-打包" tabindex="-1"><a class="header-anchor" href="#本地运行-打包"><span>本地运行 &amp; 打包</span></a></h2><p>本地运行</p><div class="language-bat line-numbers-mode" data-highlighter="prismjs" data-ext="bat" data-title="bat"><pre><code><span class="line">npm run docs:dev</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>打包（输出dist）</p><div class="language-bat line-numbers-mode" data-highlighter="prismjs" data-ext="bat" data-title="bat"><pre><code><span class="line">npm run docs:build</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h2 id="部署" tabindex="-1"><a class="header-anchor" href="#部署"><span>部署</span></a></h2><p>创建项目时会让你创建 ./github/workflows/deploy-docs.yml文件，用来在github上自动部署的 <br> 文档 -&gt; <a href="https://vuepress.vuejs.org/zh/guide/deployment.html" target="_blank" rel="noopener noreferrer">部署</a></p><h3 id="踩坑" tabindex="-1"><a class="header-anchor" href="#踩坑"><span>！！踩坑！！</span></a></h3><div class="custom-container warning"><p class="custom-container-title">WARNING</p><p>github上的部署流程 是通过./github/workflows/deploy-docs.yml 执行的， <br> 会先通过源码生成实际的前端代码（dist）并放在另一个分支上（这里叫gh-pages），发布之后要到 <br> Settings 中 把Build and deployment 设置为对应分支，否则页面访问为404 <img src="`+r+'" alt="图片"></p></div>',17),l=[i];function d(p,c){return s(),a("div",null,l)}const o=e(n,[["render",d],["__file","create_vuepress.html.vue"]]),u=JSON.parse('{"path":"/view/create_vuepress.html","title":"创建发布vuepress","lang":"zh-CN","frontmatter":{"lastUpdated":true,"date":"2024-08-10T00:00:00.000Z"},"headers":[{"level":2,"title":"参考","slug":"参考","link":"#参考","children":[]},{"level":2,"title":"更换国内源","slug":"更换国内源","link":"#更换国内源","children":[]},{"level":2,"title":"安装环境","slug":"安装环境","link":"#安装环境","children":[]},{"level":2,"title":"本地运行 & 打包","slug":"本地运行-打包","link":"#本地运行-打包","children":[]},{"level":2,"title":"部署","slug":"部署","link":"#部署","children":[{"level":3,"title":"！！踩坑！！","slug":"踩坑","link":"#踩坑","children":[]}]}],"git":{"updatedTime":1723393927000,"contributors":[{"name":"deng","email":"1179794786@qq.com","commits":1}]},"filePathRelative":"view/create_vuepress.md"}');export{o as comp,u as data};
