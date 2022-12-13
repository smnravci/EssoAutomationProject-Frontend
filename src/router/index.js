import { createRouter, createWebHistory } from 'vue-router'
import Login from '../components/Login.vue'
import Register from '../components/Register.vue'
import Layout from '../components/Layout.vue'
import Dashboard from '../components/Dashboard.vue'
import City from '../components/City.vue'
import Country from '../components/Country.vue'

const Home = () => import('../views/HomeView.vue')
const About = () => import('../views/AboutView.vue')

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/dashboard',
      name: 'Dashboard',
      component: Dashboard
    },
    {
      path: '/layout',
      name: 'Layout',
      component: Layout
    },
    {
      path: '/country',
      name: 'Country',
      component: Country
    },
    {
      path: '/city',
      name: 'City',
      component: City
    }
  ]
});

router.beforeEach((to,from,next)=>{
  const publicPages = ['/','/login','/register']
  const authRequired = !publicPages.includes(to.path)
  const loggedIn = localStorage.getItem('token')

  if(authRequired && !loggedIn){
    next('/login');
    return;
  }else{
    next();
    return;
  }
});

export default router;
