let defalutCity="温州"

try {
  if(localStorage.city){
    defalutCity=localStorage.city
  }
} catch (e) {
  
}
export default {
    city : defalutCity
}