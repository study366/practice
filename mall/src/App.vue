<template>
  <div id="app" class="g-container">
    <div class="g-view-container">
      <router-view></router-view>   
    </div>
    <div class="g-footer-container">      
      <c-tabbar></c-tabbar> 
    </div>
  </div>
</template>

<script>
  import CTabber from 'components/tabber';
  export default {
    name: 'App',
    components:{
      'c-tabbar': CTabber
    }
  }
</script>

<style>

</style>
