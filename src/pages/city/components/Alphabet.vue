<template>
  <div>
    <ul class="list">
      <li class="item" v-for="(item, key) in cities" :key="key">{{key}}</li>
    </ul>
  </div>
</template>
<script>
export default {
  name:'Alphabet',
  props:{
    cities:Object
  }
}
</script>
<style lang="stylus" scoped>
 @import '~styles/base.styl'
  .list
    display flex
    flex-direction column
    justify-content center //上面三行让ABC垂直居中，下面的是让控件位于屏幕右边
    position absolute
    top 1.58rem
    right 0
    bottom 0
    width .4rem
    .item //ABC水平居中
      line-height .4rem
      text-align center
      color $baseColor
</style>
