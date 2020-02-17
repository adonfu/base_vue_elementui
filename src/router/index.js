import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Layout from '@/components/Layout'
import Main from '@/components/main'
import User from '@/components/user'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/vue',
      name: 'HelloWorld',
      component: HelloWorld
    },
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
      }, {
        path: '/user',
        name: 'User',
        component: User
      }]
    }
  ]
})
