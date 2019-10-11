<template>
  <div class="home">
    <div class="g-header-container">
      <home-header ref="header" :class="{backgroundRed: IsBackgroundRed}"></home-header>
    </div>
    <me-scroll class= "scroll" 
      :data="recommends"
       pullDown 
       @pull-down="pullToRefresh"
       pullUp
       @scroll="scroll"
       @pull-up="pullToLoadMore"
       @scroll-end="scrollEnd"
       ref="scroll"
      >    
      <home-slider class="homeslider" ref="slider"></home-slider>
      <home-nav></home-nav>
      <home-recommend @loaded="getRecommend" ref="recommend"></home-recommend>
    </me-scroll>
    <div class="g-backtop-container"
         @click="scrollToTop">
      <me-backtop
        :visible="isBacktopVisible"        
      ></me-backtop>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import HomeHeader from './header';  
import HomeSlider from './slider'; 
import HomeNav from './nav';  

import MeScroll from 'base/scroll';  
import HomeRecommend from './recommend'; 
import MeBacktop from 'base/backTop'; 


export default {
  name: 'home',
  data () {
    return {
     recommends: [],
     isBacktopVisible: false,
     IsBackgroundRed: false
    };
  },
  created(){   
  },
  components:{
    HomeHeader,
    HomeSlider,
    HomeNav,
    MeScroll,
    HomeRecommend,
    MeBacktop
  },
  methods:{  
    getRecommend(recommends){
      this.recommends = recommends;      
    },
    pullToRefresh(end){
      this.$refs.slider.update().then(end);
    },
    pullToLoadMore(end){
      // 调用recommend的update，成功后执行end；           
      this.$refs.recommend.update().then(end).catch(err =>{
        if(err){
          console.log(err);
          
        }
        end();
      });
    },
    scroll(translate){
      console.log(translate);
      if(-translate > 600){
        this.IsBackgroundRed = true;
        // this.$refs.header.show();
      }
      else if (-translate < 666) {
        this.IsBackgroundRed = false;
        this.$refs.header.hide();
      }
    },
    scrollEnd(translate,scroll){
       
      if(translate < 1){
          console.log('scrollEnd');
          this.$refs.header.hide();
          let $header = this.$refs.header;
          setTimeout(() =>{           
            $header.show();

          }, 1300);
        }
      console.log(translate);
      this.isBacktopVisible = translate < 0 && -translate > scroll.height;
      console.log(this.isBacktopVisible);
    },
    scrollToTop(){
      console.log('我被点击了');
      this.$refs.scroll.scrollToTop();
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "~assets/scss/mixins";

  .home{
    overflow: hidden;
    width: 100%;
    height: 100%;
    background-color: $bgc-theme;
  }
</style>
