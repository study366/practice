<template>
    <div class="mine-navbar">
        
        <slot name="left" class="mine-navbar-left" v-if="$slots.left"></slot>
       
        <slot name="center" class="mine-navbar-center" v-if="$slots.center"></slot>
        
        <slot name="right" class="mine-navbar-right" v-if="$slots.right"></slot>
        
        <h1 class="mine-navbar-title" v-if="title">
          <span class="mine-navbar-text" v-text="title"></span>
        </h1>
    </div>
</template>
<script>    
    export default {
        name: 'mine-navbar',
        props:{
          title:{
            type: String,
            default: ''

          }
        }
    }
</script>

<style lang="scss" scoped>
    @import "~assets/scss/mixins";
    
    .mine-navbar{
        @include flex-between();
        height: 50px;
        background-color: #fff;

        &-left{
            margin-left: 10px;
            height: 100%;
            line-height: 100%;
            ~ .mine-navbar-right{
                position: static;
            }
        }

        &-center{
            flex: 1;
            margin: 0 10px;
            height: 100%;
            ~ .mine-navbar-right{
                position: static;
            }
        }

        &-right{
            position: absolute;
            @include flex-center;
            /*height: 100%;*/
            right: 0;
            height: 100%;
            margin-right: 10px; 
        }

        &-title{
          position: absolute;
          top: 0;
          bottom: 0;
          left: 20%;
          right: 20%;
          @include flex-center();
          

          .mine-navbar-text{          
            @include ellipsis();
            font-size:18px;
            line-height: 1.5;
            color: #fff;
            padding: 0 8px
          }
  
        }
    }
</style>