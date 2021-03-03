import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    meta: {},
    component: () => import(/* webpackChunkName: "home" */ '../views/Home.vue')
  },
  {
    path: '/about',
    name: 'About',
    meta: {
      title: 'Sobre Nós',
      image: 'breadcrumb-bg_aboutus.png'
    },
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutUs.vue')
  }
]

const router = new VueRouter({
  mode: 'hash',
  // scrollBehavior(to, from, savedPosition) {
  //   return { x: 0, y: 0 }
  // },
  routes
})

export default router
