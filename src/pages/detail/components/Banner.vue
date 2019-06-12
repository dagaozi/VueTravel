<template>
  <div>
    <div class="banner" @click="handleClick">
      <img
        class="banner-img"
        :src='bannerImg'
      >
      <div class="banner-info">
        <div class="banner-title">{{this.sightName}}</div>
        <div class="banner-number">
          <span class="iconfont banner-icon">&#xe66b;</span>{{this.gallaryImgs.length}}
        </div>
      </div>
    </div>
    <common-grallary :imgs="this.gallaryImgs" v-show="showGrallary" @close="handleClose"></common-grallary>
  </div>
</template>
<script>
import CommonGrallary from "view/gallary/Gallary";
export default {
  name: "Banner",
  components: {
    CommonGrallary
  },
  props: {
    sightName: String,
    bannerImg:String,
    gallaryImgs:Array
  },
  data() {
    return {
      showGrallary: false
    };
  },
  methods: {
    handleClick() {
      this.showGrallary = true;
    },
    handleClose() {
      this.showGrallary = false;
    }
  }
};
</script>
<style lang="stylus" scoped>
.banner
  position relative
  overflow hidden
  height 0
  padding-bottom 37%
  .banner-img
    max-width 100%
  .banner-info
    display flex
    position absolute
    left 0
    right 0
    bottom 0
    line-height 0.6rem
    color #fff
    background-image linear-gradient(top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8))
    .banner-title
      flex 1
      font-size 0.28rem
      padding 0 0.2rem // 上下0，左右.2rem
    .banner-number
      height 0.32rem
      margin-top 0.14rem
      padding 0 0.4rem // 上下0，左右.4rem
      line-height 0.32rem
      border-radius 0.2rem
      background rgba(0, 0, 0, 0.8)
      font-size 0.24rem
      .banner-icon
        font-size 0.24rem
        margin-right 0.1rem
</style>
