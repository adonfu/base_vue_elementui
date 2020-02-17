# base_vue_elementui

# project description
> VUE + Element UI Demo

## 用Vue脚手架初始化一个基于 webpack 模板的新项目
```bash
vue init webpack base_vue_elementui
```
会提示:
项目名称、项目描述、作者: 自定义
是否安装vue-router: 选择Y
ESLint：根据自己情况填写

## 安装项目需要到模块
``` bash
cd base_vue_elementui
npm install
```
若安装比较慢，是因为 npm 要安装的包都是国外服务器上，这时npm资源镜像改到国内镜像即可，这里选淘宝镜像；

## npm 镜像地址配置
查看镜像
```bash
npm get registry 
> https://registry.npmjs.org/
```

配置镜像
``` bash
npm config set registry http://registry.npm.taobao.org/
> yarn config set registry http://registry.npm.taobao.org/
```

若需要更换回源镜像
```bash
npm config set registry https://registry.npmjs.org/
```

然后， 运行`npm run dev` , 访问：`localhost:8080` 即可看到初始化后到项目；
可在项目根目录下package.json看到项目安装到依赖包以及启动配置script。

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).


## 集成Element UI
在根目录安装Element UI
```bash
npm i element-ui -S
```

然后修改/src/main.js文件，引入element-ui:
```HTML
import Vue from 'vue'
import App from './App'
import router from './router'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(ElementUI)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
```

## Container 布局组件
可参考： https://element.eleme.cn/#/zh-CN/component/container

然后，修改路由/src/router/index.js

## NavMenu 导航菜单组件
可参考： https://element.eleme.cn/#/zh-CN/component/menu

若整个页面铺满全屏，修改/src/App.vue里面样式：
```CSS
*{
  padding: 0;
  margin: 0;
}
html,body{
  width: 100%;
  height: 100%;
}
#app {
  height: 100%;
}
```

## Vue Router 嵌套路由
<el-main>是所有其它页面的展示区域, 访问不同路由时，展示不同到页面，这时需要嵌套路由。
修改/src/router/index.js路由文件：
```javascript
import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/components/layout'
import Main from '@/components/main'
import User from '@/components/user'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Layout',
      component: Layout,
      // 嵌套路由
      children: [{
        // 这里不设置值，是把main作为默认页面
        path: '/', 
        name: 'Main',
        component: Main
      },{
        path: '/user',
        name: 'User',
        component: User
      }]
    }
  ]
})

```

同时在'/src/page/layout.vue'里面的<el-main>里面添加<router-view/> 。
