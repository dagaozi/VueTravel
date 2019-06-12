<template>
  <div>
    
    <detail-banner :sightName='this.sightName' :bannerImg='this.bannerImg' :gallaryImgs='this.gallaryImgs'></detail-banner>
    <detail-header></detail-header>
    <detail-list :list="list"></detail-list>
    <div class="content"></div>
  </div>
</template>
<script>
import DetailBanner from './components/Banner'
import DetailHeader from './components/Header'
import DetailList from './components/List'
import axios from 'axios'
export default {
  name:'Detail',
  components:{
    DetailBanner,
    DetailHeader,
    DetailList
  },
  data() {
    return {
      sightName: '',
      bannerImg:'',
      gallaryImgs:[],
      list:[]
    }
  },
  methods: {
    getDetailInfo() {
      //动态路由，我们跳转到该页面时将景点id做为动态路由的参数传进来，通过this.$route.params可以拿到路由数据
      //axios.get('/api/detail.json?id='+this.$route.params.id)
      //跟上面的写法一致
      axios.get('/api/detail.json',{
        params:{
          id:this.$route.params.id
        }
      }).then(this.handleDetailInfoSucc)
    },
    handleDetailInfoSucc(res) {
      res=res.data
      if(res.ret&&res.data){
        const data=res.data
        console.log(data);
        this.sightName=data.sightName
        this.bannerImg=data.bannerImg
        this.gallaryImgs=data.gallaryImgs
        this.list=data.categoryList
      }
    }
  },
  mounted() {
    //因为使用的keepalive,这个方法只会执行一次，两种解决办法
    //①可以把他放在activated中
    //②设置keepalive忽略（这时候会用到组件的name属性）
    this.getDetailInfo()
  },
  // activated() {
  //   this.getDetailInfo()
  // },
}
</script>
<style lang="stylus" scoped>
  .content
    height 50rem
</style>
