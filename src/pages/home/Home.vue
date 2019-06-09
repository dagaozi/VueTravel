<template>
<div>
   <home-header></home-header>
   <home-swiper :list='swiperList'></home-swiper>
   <home-icons :list='iconList'></home-icons>
   <home-recommend :list='recommendList'></home-recommend>
   <home-weekend :list='weekendList'></home-weekend>
    </div>
</template>
<script>
import HomeHeader from './components/Header'
import HomeSwiper from './components/Swiper'
import HomeIcons from './components/Icons'
import HomeRecommend from './components/Recommend'
import HomeWeekend from './components/Weekend'
import axios from 'axios'
import {mapState} from 'vuex'
export default {
    name:'home',
    components:{
        HomeHeader,
        HomeSwiper,
        HomeIcons,
        HomeRecommend,
        HomeWeekend

    },
    data(){
      return{
        lastCity:"",
        swiperList:[],
        iconList:[],
        recommendList:[],
        weekendList:[]
      }
    },
    computed: {
      ...mapState(["city"])
    },
    methods: {
      getHomeInfo(){
        axios.get('/api/index.json?city='+this.city)
          .then(this.getHomeInfoSucc)
      },
      getHomeInfoSucc(res){
        console.log(res)
        res=res.data
        if(res.ret && res.data){
          const data=res.data
          this.swiperList=data.swiperList
          this.iconList=data.iconList
          this.recommendList=data.recommendList
          this.weekendList=data.weekendList
        }
      }
    },
    mounted() {
       console.log("mounted");
      this.lastCity=this.city
      this.getHomeInfo()
    },
    //keepalive下会才会有该生命周期函数
    activated(){  
      console.log("activated");//每次进入该页面都会执行该生命周期，相当于onResume
      
      if(this.lastCity !== this.city){
        this.lastCity=this.city
        this.getHomeInfo
      }
    }
}
</script>
<style scoped>
.home{
    font-size:50px;
    color:#ff0000
    }
</style>
