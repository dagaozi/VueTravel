<template>
  <div class="header">
    <div class="header-left">
      <div class="iconfont back-icon">&#xe624;</div>
    </div>
    <div class="header-input">
      <span class="iconfont">&#xe632;</span>收入城市/景点/游玩主题
      <!-- <input v-model="keyword" class="iconfont" type="text" placeholder="输入城市名或拼音"> -->
    </div>
    <router-link to="/city">
      <div class="header-right">
        <!-- {{this.$store.state.city}} -->
        <!-- mapState映射后，可以不用上面那种麻烦写法了 -->
        <!-- {{this.city}} -->
        {{this.doubleCity}}
        <span class="iconfont arrow-icon">&#xe64a;</span>
      </div>
    </router-link>
  </div>
</template>
<script>
import { mapState, mapGetters } from "vuex";
export default {
  name: "HomeHeader",
  computed: {
    //使用 mapState 辅助函数帮助我们生成计算属性
    ...mapState(["city"]), //将vuex中的city映射到当前组件的计算属性的city   注：三个点为js的扩展运算符（对象扩展运算符 https://github.com/tc39/proposal-object-rest-spread）
    ...mapGetters(["doubleCity"]) //将vuex中的getter中的doubleCity映射到当前组件的计算属性的doubleCity
  }
};
</script>
<style lang='stylus' scoped>
// 通过修改build下的webpack_base.conf.js下的resolve，来设置常用路径的别名
@import '~styles/base.styl'
.header
  display flex
  line-height $headerH
  background $baseColor
  color #fff
.header-left
  width 0.64rem
  float left
.back-icon
  text-align center
  font-size 0.24rem
.header-input
  flex 1
  background #fff
  border-radius 0.1rem
  margin-top 0.12rem
  height 0.64rem
  line-height 0.64rem
  margin-left 0.2rem
  padding-left 0.2rem
  color #ccc
.header-right
  min-width 1.04rem // 最小宽度
  padding 0 0.1rem // 上下0，左右.1rem
  float right
  text-align center
  color #FFF
.arrow-icon
  font-size 0.24rem
  padding-left 0.05rem
</style>
