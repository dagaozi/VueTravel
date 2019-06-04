<template>
    <div>
        <div class="title">推荐</div>
        <ul>
          <li class="item border-bottom" v-for="item in list" :key="item.id">
              <img class="item-img" :src="item.imgUrl">
            <div class="item-info">
              <p class="item-title">{{item.title}}</p>
              <p class="item-desc">{{item.desc}}</p>
              <button class="item-button">查看详情</button>
            </div>
          </li>
        </ul>
    </div>
</template>

<script>
export default {
    name :"HomeRecommend",
    props:{
      list:Array
    },
    // data() {
    //   return {
    //      recommendList:[
    //     {
    //       id:"0001",
    //       imgUrl:"http://img1.qunarzz.com/sight/p0/1809/4d/4d4afebae213d6a5a3.img.jpg_200x200_ad7de07d.jpg",
    //       title:"云顶草上世界（3A）",
    //       desc:"云顶草上世界好好好好好好好好好好好好好好好好好好好好好好好好好好玩"
    //     },
    //     {
    //       id:"0002",
    //       imgUrl:"http://img1.qunarzz.com/sight/p0/1809/4d/4d4afebae213d6a5a3.img.jpg_200x200_ad7de07d.jpg",
    //       title:"云顶草上世界（3A）",
    //       desc:"云顶草上世界好好好好好好好好好好好好好好好好好好好好好好好好好好玩"
    //     },
    //     {
    //       id:"0003",
    //       imgUrl:"http://img1.qunarzz.com/sight/p0/1809/4d/4d4afebae213d6a5a3.img.jpg_200x200_ad7de07d.jpg",
    //       title:"云顶草上世界（3A）",
    //       desc:"云顶草上世界好好好好好好好好好好好好好好好好好好好好好好好好好好玩"
    //     },
    //     {
    //       id:"0004",
    //       imgUrl:"http://img1.qunarzz.com/sight/p0/1809/4d/4d4afebae213d6a5a3.img.jpg_200x200_ad7de07d.jpg",
    //       title:"云顶草上世界（3A）",
    //       desc:"云顶草上世界好好好好好好好好好好好好好好好好好好好好好好好好好好玩"
    //     },
    //     {
    //       id:"0005",
    //       imgUrl:"http://img1.qunarzz.com/sight/p0/1809/4d/4d4afebae213d6a5a3.img.jpg_200x200_ad7de07d.jpg",
    //       title:"云顶草上世界（3A）",
    //       desc:"云顶草上世界好好好好好好好好好好好好好好好好好好好好好好好好好好玩"
    //     },
    //     {
    //       id:"0006",
    //       imgUrl:"http://img1.qunarzz.com/sight/p0/1809/4d/4d4afebae213d6a5a3.img.jpg_200x200_ad7de07d.jpg",
    //       title:"云顶草上世界（3A）",
    //       desc:"云顶草上世界好好好好好好好好好好好好好好好好好好好好好好好好好好玩"
    //     },
    //     {
    //       id:"0007",
    //       imgUrl:"http://img1.qunarzz.com/sight/p0/1809/4d/4d4afebae213d6a5a3.img.jpg_200x200_ad7de07d.jpg",
    //       title:"云顶草上世界（3A）",
    //       desc:"云顶草上世界好好好好好好好好好好好好好好好好好好好好好好好好好好玩"
    //     },
    //     {
    //       id:"0008",
    //       imgUrl:"http://img1.qunarzz.com/sight/p0/1809/4d/4d4afebae213d6a5a3.img.jpg_200x200_ad7de07d.jpg",
    //       title:"云顶草上世界（3A）",
    //       desc:"云顶草上世界好好好好好好好好好好好好好好好好好好好好好好好好好好玩"
    //     }
    //   ]
    //   }
    // },
}
</script>
<style lang="stylus" scoped>
@import '~styles/fontMixins.styl'
  .title
    margin-top .2rem
    line-height .6rem
    background #eee
    text-indent .2rem
  .item
    overflow hidden
    display flex
    height 1.9rem
    .item-img
      width 1.7rem
      height 1.7rem
      padding .1rem
    .item-info
      flex 1
      padding 0.1rem
      min-width 0
      .item-title
        line-height .54rem
        font-size .32rem
        elipsis()
      .item-desc
        line-height .4rem
        color #ccc
        elipsis()
      .item-button
        margin-top .2rem
        background #ff9300
        padding .1rem
        border-radius .06rem 
        color #fff

</style>