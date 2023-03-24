import { createRouter, createWebHistory } from "vue-router";
import Moment from '../views/moment/index.vue'
import Login from '../views/login/index.vue'
import Dashboard from '../views/dashboard/index.vue'
import { useTokenStore } from '@/store'
import DashboardHome from '@/components/dashboard/Home/DashboardHome.vue'
import DashboardSetting from '@/components/dashboard/Setting/DashboardSetting.vue'
import CreateArticle from '@/components/dashboard/Article/CreateArticle.vue'
import Article from '../components/dashboard/Article/CreateArticle.vue'

const routes = [
  {
    path: '/',
    component: Moment,
  },
  {
    path: '/login',
    component: Login,
  },
  {
    path: '/dashboard',
    component: Dashboard,
    children: [
      {
        path: 'index',
        component: DashboardHome,
      },
      {
        path: 'setting',
        component: DashboardSetting,
      },
      {
        path: 'article',
        component: CreateArticle,
      },
    ],
    meta: {
      requireLogin: true,
    },
  },
  {
    path: '/Article',
    component: Article,
    meta: {
      requireLogin: true,
    },
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requireLogin)) {  // 判断该路由是否需要登录权限
    if (useTokenStore().getToken()) {  // 判断当前用户的登录信息loginInfo是否存在
      next();
    } else {
      next({
        path: '/login',
      })
    }
  } else {
    next();
  }
})

export default router