/**
 * 根级别的 action,异步vuex
 */
export default{
  changeCity(context,city){
    context.commit('changeCity',city)
  }
}