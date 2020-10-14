# 此项目尚未发布到npm上
使用流程

git clone 

yarn/ npm install

项目跟目录创建配置文件 proj.config.js
```
const { build } = require('create-pages');

module.exports = {
    data: {
        menus: [
          {
            name: 'Home',
            icon: 'aperture',
            link: 'index.html'
          },
          {
            name: 'Features',
            link: 'features.html'
          },
          {
            name: 'About',
            link: 'about.html'
          },
          {
            name: 'Contact',
            link: '#',
            children: [
              {
                name: 'Twitter',
                link: 'https://twitter.com/w_zce'
              },
              {
                name: 'About',
                link: 'https://weibo.com/zceme'
              },
              {
                name: 'divider'
              },
              {
                name: 'About',
                link: 'https://github.com/zce'
              }
            ]
          }
        ],
        pkg: require('./package.json'),
        date: new Date()
      },
      build: {
        src: 'src',
        dist: 'dist',
        temp: 'tmp',
        public: 'public',
        paths: {
          styles: 'assets/styles/*.scss',
          scripts: 'assets/scripts/*.js',
          pages: '*.html',
          images: 'assets/images/**',
          fonts: 'assets/fonts/*'
        }
      }
}
```

链接项目到相关目录下  yarn link

使用

```
create-pages clean  清除产生的dist和temp目录

create-pages build  打包并压缩项目资源文件

create-pages develop  开发服务启动并产生temp目录
```
