/**
 * 根级别的 action,同步vuex
 */
export default{
  changeCity(state,city){
    state.city=city
    //用户开启隐身模式则娶不到localStorage
    try{
    localStorage.city =city
    }
    catch(e){}
  }
}