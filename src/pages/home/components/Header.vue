<template>
<div class="header">
    <div class="header-left"><div class="iconfont  back-icon">&#xe624;</div></div>
    <div class="header-input"><span class="iconfont">&#xe632;</span>收入城市/景点/游玩主题</div>
    <div class="header-right">{{this.city}}<span class="iconfont arrow-icon">&#xe64a;</span></div>
    </div>
</template>
<script>
export default {
    name:'HomeHeader',
    props:{
      city:String
    }
}
</script>
<style lang='stylus' scoped>
//通过修改build下的webpack_base.conf.js下的resolve，来设置常用路径的别名
@import '~styles/base.styl'
.header
    display:flex
    line-height:0.86rem
    background:$baseColor
    color:#fff
.header-left
    width:0.64rem
    float:left
  .back-icon
     text-align:center
     font-size 0.24rem
.header-input
    flex:1  
    background:#fff
    border-radius:0.1rem
    margin-top:0.12rem
    height:0.64rem
    line-height: 0.64rem
    margin-left:0.2rem
    padding-left 0.2rem
    color:#ccc
.header-right
    width:1.24rem
    float:right
    text-align:center
 .arrow-icon
    font-size 0.24rem
    padding-left 0.05rem
</style>
