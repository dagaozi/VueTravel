<template>
  <div class="icons">
    <swiper :options="swiperOption">
      <swiper-slide v-for="(page, index) in pages" :key="index">
        <div class="icon" v-for="item of page" :key="item.id">
          <div class="icon-img">
            <img class="icon-imgcontent" :src='item.imgUrl'>
          </div>
          <p class="icon-desc">{{item.desc}}</p>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>
<script>
export default {
  name: "HomeIcons",
  props:{
    list:Array
  },
  data() {
    return {
      swiperOption: {
        autoPlay:false
      }
    }
  },
  // data () {
  //     return {
  //         iconList:[
  //             {id:'0001',
  //             imgUrl:'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
  //             desc:'景点门票景点门票景点门票'},
  //             {
  //             id:'0002',
  //             imgUrl:'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20193/a40ee278d67000f2a29d2e20f6a029b3.png',
  //             desc:'自然风光'
  //             },
  //             {id:'0003',
  //             imgUrl:'http://img1.qunarzz.com/piao/fusion/1803/50/26ffa31b56646402.png',
  //             desc:'亲子游'},
  //             {
  //             id:'0004',
  //             imgUrl:'http://img1.qunarzz.com/piao/fusion/1804/ff/fdf170ee89594b02.png',
  //             desc:'温州必游'
  //             },
  //             {id:'0005',
  //             imgUrl:'http://img1.qunarzz.com/piao/fusion/1803/20/831d62d2e1c7be02.png',
  //             desc:'名胜古迹'},
  //             {
  //             id:'0006',
  //             imgUrl:'http://img1.qunarzz.com/piao/fusion/1803/b8/c5dcdb58deec2402.png',
  //             desc:'雁荡山'
  //             },
  //             {id:'0007',
  //             imgUrl:'http://img1.qunarzz.com/piao/fusion/1803/75/eca3ce656c886502.png',
  //             desc:'江心屿'},
  //             {
  //             id:'0008',
  //             imgUrl:'http://img1.qunarzz.com/piao/fusion/1803/6c/9e54a8540fee0102.png',
  //             desc:'永嘉书院'
  //             },
  //             {id:'0009',
  //             imgUrl:'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20194/811d606236784ca9617fb81a058dee3f.png',
  //             desc:'百丈祭'},
  //             {
  //             id:'0010',
  //             imgUrl:'http://img1.qunarzz.com/piao/fusion/1803/bd/9f7b9b2b60c1502.png',
  //             desc:'踏青赏花'
  //             }
  //         ]
  //     }
  // },
  computed:{
      /**把一维数组变成二维数组（每个小维度中八个icon） */
      pages(){
          const pages=[]
          this.list.forEach((itme,index)=>{
              const page=Math.floor(index/8) //8个icon为一页，计算当前icon属于第几页
              if(!pages[page]){ //如果pages第0页为空，则为pages[0]赋值一个空数组
                  pages[page]=[]
              }
              pages[page].push(itme)//往二维数组里面填值
          })
          return pages
      }
  }
};
</script>

<style lang="stylus" scoped>
@import '~styles/base.styl'
@import '~styles/fontMixins.styl'
.icons >>>.swiper-container  //不写swiper-container的高度，无法占满整个vue组件高度，只占一个icon的高度，导致如果只有一行，下半部分无法滑动
  width 100% // div可以不用写，默认充满
  overflow hidden  //可以不写，swiper控件自带了overflow:hidden
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
    //background red
    .icon-img
      position absolute
      top 0
      left 0
      right 0
      bottom 0.22rem
      box-sizing border-box
      padding 0.3rem
      //background blue
      .icon-imgcontent
        display block
        margin 0 auto
        height 100%
  .icon-desc
    position absolute
    left 0
    right 0
    bottom 0
    height 0.44rem
    line-height 0.44rem
    text-align center
    color $darkTextColor
    elipsis() //引用定义的基础样式
</style>
