import Vue from 'vue'
import Router from 'vue-router'
import Home from "@/pages/home/Home.vue" //@表示src目录
import City from "@/pages/city/City.vue" //@表示src目录
import Detail from "@/pages/detail/Detail.vue" //@表示src目录
import NotFound from "@/view/NotFound.vue" //@表示src目录


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
      path: '/city',
      name: 'City',
      component: City
    },
    {
      path: '/detail/:id',
      name: 'Detail',
      component: Detail
    },
    {
      path: '*',
      name: 'NotFound',
      component: NotFound
    }
  ],
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})
