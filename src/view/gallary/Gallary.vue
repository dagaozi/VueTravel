<template>
  <div class="container" @click="handleClick">
    <div class="wrapper">
      <!-- v-if是为了保证刚开始的空数组不创建swiper等ajax获得数据后创建swiper -->
      <swiper :options="swiperOption" v-if="showSwiper">
        <swiper-slide v-for="(item,index) of list" :key="index">
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
    list:{
      type:Array,
      default(){
        return ["http://img1.qunarzz.com/sight/p0/1809/4d/4d4afebae213d6a5a3.img.jpg_200x200_ad7de07d.jpg",
        "http://img1.qunarzz.com/sight/source/1505/da/2d9fbf88a7ed69.jpg_r_640x214_504a958c.jpg"]
      }
    }
  },
  data() {
    return {
      swiperOption:{
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
