<template>
  <div class="icons">
    <div class="icon">
      <div class="icon-img">
        <img
          class="icon-imgcontent"
          src='@/assets/img/风景.png'
          alt
        >
      </div>
      <p class="icon-desc">热门景点</p>
    </div>
  </div>
</template>
<script>
export default {
  name: "HomeIcons"
};
</script>

<style lang="stylus" scoped>
@import '~styles/base.styl';
.icons
  width 100% // div可以不用写，默认充满
  overflow hidden
  height 0
  padding-bottom 50%
  background #eee
  .icon
    position relative
    overflow hidden
    float left
    width 25%
    height 0
    padding-bottom 25% // 父元素height为0所有直接设height:25%没效果，使用padding-bottom
    background red
    .icon-img
      position absolute
      top 0
      left 0
      right 0
      bottom 0.44rem
      box-sizing border-box
      padding .1rem
      background blue
      .icon-imgcontent
        display block
        margin 0 auto
        height 100%
   .icon-desc
      position absolute
      left 0
      right 0
      bottom 0
      height .44rem
      line-height .44rem
      text-align center
      color $darkTextColor

</style>
