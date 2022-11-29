<template>
  <Sidebar/>
  <div :style="{ 'margin-left' : sidebarWidth }">
  <router-view/>
  </div>
</template>

<script>
import Sidebar from './components/sidebar/Sidebar.vue'
import { sidebarWidth } from './components/sidebar/state'
export default{
  components:{ Sidebar },
  setup(){
    return { sidebarWidth }
  }
}
</script> 

<style>
  #app{
    background-image: url("./assets/world.jpg");

  }
</style>
