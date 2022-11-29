<template>
    <div class="sidebar" :style="{ width: sidebarWidth }">
        <h1>
            <span v-if="collapsed">
            </span>
            <span v-else>Esso</span>
        </h1>
        
        <SidebarLink to="/" icon="fas fa-home">Home</SidebarLink>
        <SidebarLink to="/login" icon="fa fa-sign-in">Login</SidebarLink>
        <SidebarLink to="/register" icon="fa fa-registered">Register</SidebarLink>
        <SidebarLink to="/about" icon="fa fa-info-circle">About</SidebarLink>

        <span class="collapse-icon" 
              :class="{'rotate-180': collapsed }"
              @click="toggleSidebar">
            <i class="fas fa-angle-double-left" />
        </span>
    </div>
</template>

<script>
import SidebarLink from './SidebarLink.vue'
import { collapsed, toggleSidebar, sidebarWidth } from './state'
export default {
    props: {},
    components: { SidebarLink },
    setup() {
        return { collapsed, toggleSidebar, sidebarWidth }
    }
}
</script>

<style>
:root {
    --sidebar-bg-color: rgb(11, 2, 60);
    --sidebar-item-hover: rgb(147, 149, 152);
    --sidebar-item-active: rgb(48, 14, 148);
}
</style>

<style scoped>
.sidebar {
    color: white;
    background-color: var(--sidebar-bg-color);
    float: left;
    position: fixed;
    z-index: 1;
    top: 0;
    left: 0;
    bottom: 0;
    padding: 0.5em;
    transition: 0.3s ease;
    display: flex;
    flex-direction: column;
}
.collapse-icon{
    position: absolute;
    bottom: 0;
    padding: 0.75em;
    color: rgba(255, 255, 255, 0.7);
    transition: 0.2s linear;
}
.rotate-180{
    transform: rotate(180deg);
    transition: 0.2s linear;
}


</style>