<template>
  <div class="list" ref='wapper'>
    <div>
      <div class="area">
        <div class="title border-topbottom">当前城市</div>
        <div class="button-list">
          <div class="button-wrapper">
            <div class="button"> {{this.currentCity}}</div>
          </div>
        </div>
      </div>
      <div class="area">
        <div class="title border-topbottom">热门城市</div>
        <div class="button-list">
          <div class="button-wrapper" v-for="item in hot" :key="item.id" @click="handleCityClick(item.name)">
            <div class="button">{{item.name}}</div>
          </div>
        </div>
      </div>
      <div class="area" v-for="(item,key) of cities" :key="key" :ref="key">
        <div class="title border-topbottom">{{key}}</div>
        <div class="item-list">
          <div class="item border-bottom" v-for="innerItem in item" :key="innerItem.id" @click="handleCityClick(innerItem.name)">{{innerItem.name}}</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Bscroll from 'better-scroll'
import {mapState,mapMutations} from 'vuex'
export default {
  name:"CityList",
  props:{
    hot:Array,
    cities:Object,
    letter:String
  },
  computed:{
    ...mapState({
      currentCity:'city' //将vuex中的city属性映射到计算属性中的currentCity中，方便引用
    })
  },
  methods: {
    handleCityClick(city){
      //this.$store.dispatch('changeCity',city) 
     // this.$store.commit('changeCity',city) //没有异步操作，直接跳过aciton，进行commit
      this.changeCity(city)//同上面那句话,mapMutations帮我把Mutations的changeCity映射到本地的changeCity方法
      this.$router.push('/')
    },
    ...mapMutations(['changeCity'])//把Mutations的changeCity映射到本地的方法
  },
  mounted() {
    this.scroll=new Bscroll(this.$refs.wapper)
  },
  watch: {
    letter() {
      console.log("list组件watch ‘letter’变化",this.letter)
      if(this.letter){
        const elem=this.$refs[this.letter][0]
        this.scroll.scrollToElement(elem)
      }
      
    }
  },
}
</script>
<style lang="stylus" scoped>
  @import '~styles/base.styl'
  .border-topbottom
    &:before 
      border-color #cccccc
    &:after 
      border-color #cccccc
    .border-bottom
    &:before 
      border-color #cccccc
  .list
    overflow hidden
    position absolute
    top 1.68rem
    left 0
    right 0
    bottom 0
    .title
      line-height .54rem
      background $bgGray
      padding-left .2rem
      color $fontGray
      font-size .26rem
    .button-list
      overflow hidden
      padding .1rem .6rem .1rem .1rem //上、右、下、左
      .button-wrapper
        float left
        width 33.33%
        .button
          margin .1rem
          padding .1rem 0
          text-align center
          border:.02rem solid #ccc
          border-radius .06rem
    .item-list
      .item
        line-height .76rem
        padding-left .2rem 
</style>

