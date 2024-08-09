import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress/cli'
import { viteBundler } from '@vuepress/bundler-vite'
import { oml2dPlugin } from 'vuepress-plugin-oh-my-live2d'

export default defineUserConfig({
  // lang: 'en-US',
  lang: 'zh-CN',
  title: '不知所以',
  description: '学吧，太深了，学无止境',

  theme: defaultTheme({
    logo: '/images/hero.jpg',
    navbar: [
		// '/',
		// '/get-started',
		// {
  //        text: '测试叶',
  //        link: '/get-started',
		// },
		{
		  text: 'Java',
		  prefix: '/java/',
		  children: ['aa', 'bb'],
		},
		{
		  text: '前端',
		  prefix: '/group/',
		  children: ['/get-started', '/get-started'],
		},
		{
		  text: 'linux',
		  prefix: '/group/',
		  children: ['/get-started', '/get-started'],
		},
		{
		  text: 'git',
		  prefix: '/group/',
		  children: ['/get-started', '/get-started'],
		},
		{
		  text: 'Java',
		  prefix: '/group/',
		  children: ['/get-started', '/get-started'],
		},
	  ],
  }),
  plugins: [
	  //看板娘插件
      oml2dPlugin({
        models: [
          {
            // path: 'https://cdn.jsdelivr.net/gh/Eikanya/Live2d-model/Live2D/Senko_Normals/senko.model3.json',
			path: 'https://model.oml2d.com/mai/model.json',
            scale: 0.12,
            position: [-10, 50],
            stageStyle: {
              width: 350
            }
          }
        ]
      })
      //  ...other plugins
    ],
	
  bundler: viteBundler(),
})
