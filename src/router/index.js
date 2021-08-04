import Vue from 'vue'
import VueRouter from 'vue-router'
import Dashboard from '../views/Dashboard.vue'
import Profile from '../views/Profile_dashboard.vue'
import Jobs from '../views/Jobs_dashboard.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Dashboard',
    component: Dashboard,
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile,
  },
  
  {
    path: '/jobs',
    name: 'Jobs',
    component: Jobs,
  },
]

const router = new VueRouter({
  routes
})

export default router
