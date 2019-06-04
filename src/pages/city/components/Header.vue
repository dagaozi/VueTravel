<template>
  <div class="header">
    城市选择
    <router-link to="/">
    <div class="iconfont header-back">&#xe624;</div>
    </router-link>
  </div>
</template>
<script>
export default {
  name:"CityHeader"
}
</script>
<style lang="stylus" scoped>
  @import '~styles/base.styl'
  .header
    headerStyl()
    .header-back
      position absolute
      top:0
      left:0
      color #fff
      width .64rem
      text-align center
      font-size .4rem
</style>

