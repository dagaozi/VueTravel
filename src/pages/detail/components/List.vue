<template>
  <div>
    <div v-for="(item, index) in list" :key="index">
      <div class="item-title border-bottom">
        <span class="itme-title-icon"></span>
        {{item.title}}
      </div>
      <!-- 如果对象有子对象，说明有二级数据，使用递归组件，组件调用自己 -->
      <div v-if="item.children" class="item-son">
        <!-- 将adult数据传给list -->
        <detail-list :list='item.children'></detail-list>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  //这个name可以自己引用自己使用，递归组件，
  name:'DetailList',
  props:{
    list:Array
  }
}
</script>
<style lang="stylus" scoped>
  .itme-title-icon
    position relative
    top .2rem
    display inline-block
    width .36rem
    height .36rem
    top 0.1rem
    background url(//s.qunarzz.com/piao/image/touch/sight/detail.png) 0 -.45rem no-repeat
    margin-right .1rem
    background-size .4rem 3rem
  .item-title
    line-height .6rem
    font-size .32rem
    padding .1rem
  .item-son
    padding 0 .2rem
    
</style>
