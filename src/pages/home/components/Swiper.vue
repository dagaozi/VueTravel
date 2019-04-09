<template>
  <div class="wrapper">
    <swiper :options="swiperOption" ref="mySwiper" @someSwiperEvent="callback">
      <swiper-slide>
        <img
          class="swiper-img"
          src="http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20193/d7bbc21db442366a882e04ddc984669a.jpg_750x200_85e640d9.jpg"
        >
      </swiper-slide>
      <swiper-slide>
        <img
          class="swiper-img"
          src="http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20192/9f73976e40c4ef845cabe0efc0269ebb.jpg_750x200_aab92b7a.jpg"
        >
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: "HomeSwiper",
  data() {
    return {
      swiperOption: {}
    };
  }
};
</script>

<style lang="stylus" scoped>
.wrapper
  overflow hidden
  width 100%
  height 0
  padding-bottom 31.25%
  .swiper-img
  width 100%
</style>

