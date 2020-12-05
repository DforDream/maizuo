import Vue from 'vue'
import VueRouter from 'vue-router'
import Film from '../views/Film.vue'
import Cinema from '../views/Cinema.vue'
// import Center from '../views/Center.vue'
import Nowplaying from '../views/film/Nowplaying'
import Comingsoon from '../views/film/Comingsoon'
import Datail from '../views/Datail'
// import Login from '../views/Login'

Vue.use(VueRouter) // 注册模块 创建了全局组件 router-view

const routes = [{
  path: '/film',
  component: Film,
  // 嵌套路由
  children: [{
    path: 'nowplaying',
    component: Nowplaying
  }, {
    path: '/film/comingsoon',
    component: Comingsoon
  }, {
    path: '',
    redirect: '/film/nowplaying'
  }]
},
{
  path: '/cinema',
  component: Cinema
},
{
  path: '/center',
  component: () => import('../views/Center.vue')
},
// {
//   path: '/datail/:myid', // 动态路由
//   component: Datail,
//   name: 'datailId'
// },
{
  path: '/datail',
  component: Datail
},
{
  path: '/login',
  component: () => import('../views/Login.vue')
},
{ // 重定向路由
  path: '*',
  redirect: '/film'
}
]

const router = new VueRouter({
  // mode: 'history',
  // base: process.env.BASE_URL,
  routes
})

// 全局路由守卫
const auth = ['/center', '/order']
router.beforeEach((to, from, next) => {
  if (auth.includes(to.fullPath)) {
    // console.log('验证token')
    if (!localStorage.getItem('token')) {
      next('/login')
    } else {
      next()
    }
  } else {
    next()
  }
})

export default router
