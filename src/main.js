import Vue from 'vue'
import App from './App'
import router from './router'
import store from './data'
import fastClick from 'fastclick'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
//通过修改build下的webpack_base.conf.js下的resolve，来设置常用路径的别名
import 'styles/reset.css'
import 'styles/border.css'
import './assets/styles/iconfont/iconfont.css'


Vue.config.productionTip = false
Vue.use(VueAwesomeSwiper)
fastClick.attach(document.body)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store:store,
  components: { App},
  template: '<App/>'
})
