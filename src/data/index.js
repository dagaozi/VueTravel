//导出 store 的地方
import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import actions from './actions'
import mutations from './mutations'
import yuyue from './modules/yuyue'

Vue.use(Vuex)

export default new Vuex.Store({
  //存放公用数据
  state,
  //异步操作要通过actions，否则通过cimmit直接操作mutations
  actions,
  mutations,
  getters:{
    doubleCity(state){
      return state.city+'2'
    }
  },
  modules:{
    yuyue,  //可以通过store.state.yuyue拿到yuyue模块中的数据
  }

})