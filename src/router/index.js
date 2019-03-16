import Vue from 'vue'
import Router from 'vue-router'
import Home from "@/pages/home/Home.vue" //@表示src目录
import List from "@/pages/home/List.vue" //@表示src目录


Vue.use(Router)

export default new Router({
  routes: [
    {
      // 当用户访问根路径时，返回helloworld组件
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/list',
      name: 'List',
      component: List
    }
  ]
})
