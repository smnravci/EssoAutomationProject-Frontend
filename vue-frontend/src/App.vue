<template>
  <router-view>
      <router-link to="/">Home</router-link>
      <router-link to="/cityandcountry">Cities and Countries</router-link>
  </router-view>
</template>

<script>
import { RouterView } from 'vue-router';
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
