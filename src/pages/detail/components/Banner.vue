<template>
  <div class="banner">
    <img class="banner-img" src="http://img1.qunarzz.com/sight/source/1811/52/b6776b49d27025.jpg_r_640x214_35ae205c.jpg">
    <div class="banner-info">
      <div class="banner-title">风景介绍</div>
      <div class="banner-number"><span class="iconfont banner-icon">&#xe66b;</span>39</div>
    </div>
  </div>
</template>
<script>
export default {
  name:'Banner'
}
</script>
<style lang="stylus" scoped>
  .banner
    position relative
    overflow hidden
    height:0
    padding-bottom:37%
    .banner-img
      max-width  100%
    .banner-info
      display flex
      position absolute
      left 0
      right 0
      bottom 0
      line-height .6rem
      color #fff
      background-image linear-gradient(top,rgba(0,0,0,0),rgba(0,0,0,0.8))
      .banner-title
        flex 1
        font-size .28rem
        padding 0 .2rem //上下0，左右.2rem
      .banner-number
        height .32rem
        margin-top .14rem
        padding 0 .4rem//上下0，左右.4rem
        line-height .32rem
        border-radius 0.2rem
        background rgba(0,0,0,.8)
        font-size .24rem
        .banner-icon
          font-size .24rem
          margin-right .1rem
    
</style>
