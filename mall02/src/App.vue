<template>
  <div id="app" class="g-container">
    <header class="g-header-container">
      <c-header ref="header" closePopTab></c-header>
    </header>
    <div class="g-view-container">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </div>
    <div class="g-footer-container">
      <c-tabbar/>
    </div>
  </div>
</template>

<script>
  import CTabbar from "components/tabbar";
  import CHeader from "components/header";
export default {
  name: 'App',
  data(){
    return {
      closePopTab: false  
    }
  },
  components:{
    CTabbar,
    CHeader
  },
  created(){
    
  },
  methods:{
    clickChatPage(){  
        console.log("wobeidianangag");      
        this.closePopTab = !this.closePopTab;
    }
  } 
}
</script>

<style>

</style>
