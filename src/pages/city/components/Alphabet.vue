<template>
  <div>
    <ul class="list">
      <li class="item" v-for="item in letters" :key="item" :ref="item"
       @click="handleLetterClick"
       @touchstart="handleTouchStart"
       @touchmove="handleTouchMove"
       @touchend="handleTouchEnd"
       >{{item}}</li>
    </ul>
  </div>
</template>
<script>
export default {
  name:'Alphabet',
  props:{
    cities:Object
  },
  data() {
    return {
      touchStatus:false,//标志位，滑动是否结束
      startY:0,//用来保存A字母到绿色区域最下面的高度
      timer:null//数据节流，防止滑动时太过频繁的调用handleTouchMove方法
    }
  },
  updated() { //当数据被改变，渲染之后被执行,之所以放在updated中是因为刚才数据是空的，只有当ajax请求到城市数据，数据发生了改变，会调用该生命周期函数，才可以计算字母高度
    this.startY=this.$refs['A'][0].offsetTop//A字母到绿色区域最下面的高度
  },
  computed: {
    //构建字母数组
    letters(){
      const letters=[]
      for(let i in this.cities){
        letters.push(i)
      }
      return letters
    }
  },
  methods: {
    handleLetterClick(e){
      //点击右侧字母索引的时候，向父控件发送change事件
      console.log("子组件向外发送点击控件事件",e.target.innerText);
      this.$emit('change',e.target.innerText)//将点击到的字母发送出去
    },
    handleTouchStart(){
      console.log("start");
      
      this.touchStatus=true
    },
    handleTouchMove(e){
      console.log("move");
      if( this.touchStatus){
        if(this.timer){
          clearTimeout(this.timer)
        }
        //16毫秒执行一次
        this.timer=setTimeout(() => {
             //A字母距离顶部的高度
        //const startY=this.$refs['A'][0].offsetTop//A字母到绿色区域最下面的高度
        console.log("H",this.startY);
        const touchY=e.touches[0].clientY-84 //手指滑动的位置减去（84为绿色区域的高度）得到的是手指到绿色区域下边的高度
        const index=Math.floor((touchY-this.startY)/20)//求得当前字母对应的下标，20为每个字母的高度
        console.log(index);
        if(index>=0 && index<this.letters.length){
          this.$emit("change",this.letters[index])//将滑动到的字母发送出去
        }
        }, 16);    
      }
    },
    handleTouchEnd(){
      console.log("end");
      this.touchStatus=false
    },

  },
}
</script>
<style lang="stylus" scoped>
 @import '~styles/base.styl'
  .list
    display flex
    flex-direction column
    justify-content center //上面三行让ABC垂直居中，下面的是让控件位于屏幕右边
    position absolute
    top 1.58rem
    right 0
    bottom 0
    width .4rem
    .item //ABC水平居中
      line-height .4rem
      text-align center
      color $baseColor
</style>
