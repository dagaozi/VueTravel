import Vue from 'vue'
import App from './App'
import router from './router'
import fastClick from 'fastclick'
//通过修改build下的webpack_base.conf.js下的resolve，来设置常用路径的别名
import 'styles/reset.css'
import 'styles/border.css'
import './assets/styles/iconfont/iconfont.css'

Vue.config.productionTip = false
fastClick.attach(document.body)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App},
  template: '<App/>'
})
