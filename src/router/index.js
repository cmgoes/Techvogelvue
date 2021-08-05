import Vue from 'vue'
import VueRouter from 'vue-router'
import Dashboard from '../views/Dashboard.vue'
import Profile from '../views/ProfileDashboard.vue'
import Jobs from '../views/JobsDashboard.vue'
import Chat from '../views/ChatDashboard.vue'
import Rank from '../views/RankDashboard.vue'

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
  {
    path: '/chat',
    name: 'Chat',
    component: Chat,
  },
  {
    path: '/rank',
    name: 'Rank',
    component: Rank,
  },
]

const router = new VueRouter({
  routes
})

export default router
