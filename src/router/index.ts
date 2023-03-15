import { createRouter, createWebHistory } from "vue-router";
import Moment from '../views/moment/index.vue'
import Login from '../views/login/index.vue'

const routes = [
  {path: '/', component: Moment},
  {path: '/login', component: Login},
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router