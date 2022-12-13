<template>
  <Sidebar>
  <div :style="{ 'margin-left' : sidebarWidth }">
  </div>
  </Sidebar>
  <RouterView />
</template>

<script>
import { RouterView } from 'vue-router';
import Sidebar from './components/sidebar/Sidebar.vue'
import { sidebarWidth } from './components/sidebar/state'
export default{
  components:{ Sidebar, RouterView },
  setup(){
    return { sidebarWidth }
  }
}
</script> 

