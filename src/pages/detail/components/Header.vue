<template>
  <div>
    <router-link tag="div" to="/" class="header-abs" v-show="showAbs">
      <div class="iconfont header-abs-back">&#xe624;</div>
    </router-link>
    <div class="header-fixed" v-show="!showAbs" :style="opacityStyle">
      <router-link tag="div" to="/">
        <div class="iconfont header-fixed-back">&#xe624;</div>
      </router-link>景点详情
    </div>
  </div>
</template>
<script>
export default {
  name: "DetailHeader",
  data() {
    return {
      showAbs:true,//是否显示圆形返回按钮
      opacityStyle:{
        opacity:0
      }
    }
  },
  methods: {
    handleScroll(){
      const top=document.documentElement.scrollTop;//网上滑动距离
      console.log(top);
      if(top>40){
        let opacity=top/140
        opacity=opacity > 1 ? 1 : opacity
        this.opacityStyle={opacity:opacity}//键值相等可以只写一个
        this.showAbs=false
      }else{
        this.showAbs=true
      }
      
    }
  },
  activated() {
     //该滑动在全局的window对象上，对全局都有影响，即在其他组件也会执行handleScroll方法！
    window.addEventListener('scroll',this.handleScroll)
  },
  deactivated() {
    window.removeEventListener('scroll',this.handleScroll)
  },
};
</script>
<style lang="stylus" scoped>
@import '~styles/base.styl'
.header-abs
  position absolute
  left 0.2rem
  top 0.2rem
  width 0.8rem
  height 0.8rem
  line-height 0.8rem
  border-radius 0.4rem
  text-align center
  background rgba(0, 0, 0, 0.8)
  .header-abs-back
    color #ffffff
    font-size 0.4rem
.header-fixed
  headerStyl()
  position fixed
  z-index 2
  top 0
  left 0
  right 0
  // overflow hidden
  .header-fixed-back
    position absolute
    top 0
    left 0
    color #fff
    width 0.64rem
    text-align center
    font-size 0.4rem
</style>
