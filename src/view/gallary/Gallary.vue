<template>
  <div class="container" @click="handleClick">
    <div class="wrapper">
      <!-- v-if是为了保证刚开始的空数组不创建swiper等ajax获得数据后创建swiper -->
      <swiper :options="swiperOptions" v-if="showSwiper">
        <swiper-slide v-for="(item,index) of imgs" :key="index">
          <img class="swiper-img grallary-img" :src="item">
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
  </div>
</template>
<script>
export default {
  name: "CommonGrallary",
  props:{
    imgs:{
      type:Array,
      default(){
        return []
      }
    }
  },
  data() {
    return {
      swiperOptions:{
        pagination:'.swiper-pagination',
        paginationType:'fraction',
        observeParents:true,
        observer:true,//DOM或者父级DOM发生变化，自动刷新，解决页面发生变化，宽度计算有问题，滑动不了的情况
        loop:true
      },
      showSwiper:true
    }
  },
  methods: {
    handleClick(){
      this.$emit("close")
    }
  },
};
</script>
<style lang="stylus" scoped>
.container >>> .swiper-container
  overflow inherit 
.container
  display flex
  flex-direction column
  justify-content center
  z-index 99
  position fixed
  left 0
  right 0
  top 0
  bottom 0
  background #000c // 最后一位透明度
  .wrapper
    //overflow hidden
    height 0
    width 100%
    padding-bottom 100%
    background #fff
    .grallary-img
      width 100%
    .swiper-pagination
      color #fff
      bottom -1rem
</style>
