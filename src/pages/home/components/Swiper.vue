<template>
  <div class="wrapper">
    <!-- v-if是为了保证刚开始的空数组不创建swiper等ajax获得数据后创建swiper -->
    <swiper :options="swiperOption" v-if="showSwiper">
      <swiper-slide v-for="item of list" :key="item.id">
        <img
          class="swiper-img"
          :src="item.imgUrl"
        >
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: "HomeSwiper",
  props:{
    list:Array
  },
  data () {
    return {
      swiperOption: {
        pagination:'.swiper-pagination',
        loop:true
      },
      // swiperList:[{
      //   id:"0001",
      //   imgUrl:"http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20193/d7bbc21db442366a882e04ddc984669a.jpg_750x200_85e640d9.jpg"
      // },
      // {
      //   id:"0002",
      //   imgUrl:"http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20192/9f73976e40c4ef845cabe0efc0269ebb.jpg_750x200_aab92b7a.jpg"
      // }]
    };
  },
  computed: {
    showSwiper(){
      return this.list.length
    }
  },
};
</script>

<style lang="stylus" scoped>
.wrapper >>> .swiper-pagination-bullet-active //样式穿透，wrapper下面的.swiper-pagination-bullet-active 不受scoped限制
  background #FFF 
.wrapper
  overflow hidden
  width 100%
  height 0
  padding-bottom 26.5%  //上面四个可以保证图片宽高比为27.25%
  background #eee
  .swiper-img
   width 100%
</style>

