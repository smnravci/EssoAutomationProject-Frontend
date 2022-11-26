<template>
  <router-view></router-view>
</template>

<script>
import { RouterView } from 'vue-router'
export default{
  components:{
    RouterView
  },
  data(){
    return{
    }
  }
}
</script> 

<style>
  #app{
    background-image: url("./assets/world.jpg");

  }
</style>
