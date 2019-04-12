<template>
  <div>
    <div class="title">周末去哪儿</div>
    <ul>
      <li class="item border-bottom" v-for="item in recommendList" :key="item.id">
        <div class="item-img-wrapper">
          <img class="item-img" :src="item.imgUrl">
        </div>
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "HomeWeekend",
  data() {
    return {
      recommendList: [
        {
          id: "0001",
          imgUrl:
            "http://img1.qunarzz.com/sight/source/1811/52/b6776b49d27025.jpg_r_640x214_35ae205c.jpg",
          title: "美丽普陀山",
          desc:
            "人间仙境杭州，佛教圣地普陀山等你来玩！在这里静心接收佛家的洗礼，用心感受佛文化"
        },
        {
          id: "0002",
          imgUrl:
            "http://img1.qunarzz.com/sight/source/1505/da/2d9fbf88a7ed69.jpg_r_640x214_504a958c.jpg",
          title: "温州毕打卡",
          desc:
            "除了小商品，还有这些美景也在等你"
        },
        {
          id: "0003",
          imgUrl:
            "http://img1.qunarzz.com/sight/source/1505/6d/6cd359fbf0d713.jpg_r_640x214_fa3f0f11.jpg",
          title: "享受生活",
          desc:
            "周末可以欣赏溪水潺潺，鸟语花香，品茗闲聊，细想芳华的淡雅之情，也可以野战密室漂流"
        }
      ]
    };
  }
};
</script>
<style lang="stylus" scoped>
@import '~styles/fontMixins.styl'
.title
  margin-top 0.2rem
  line-height 0.6rem
  background #eee
  text-indent 0.2rem
.item-img-wrapper
  overflow hidden
  height 0
  padding-bottom 33.9%
  .item-img
    width 100%
.item-info
  padding 0.1rem
  .item-title
    line-height 0.54rem
    font-size 0.32rem
    elipsis()
  .item-desc
    line-height 0.4rem
    color #ccc
    elipsis()
</style>