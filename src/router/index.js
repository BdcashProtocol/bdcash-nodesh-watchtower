import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Nodesh',
    component: () => import(/* webpackChunkName: "nodesh" */ '../views/NodeSH.vue')
  },
  {
    path: '/devchain',
    name: 'DevChain',
    component: () => import(/* webpackChunkName: "devchain" */ '../views/DevChain.vue')
  },
  {
    path: '/rewards',
    name: 'Rewards',
    component: () => import(/* webpackChunkName: "rewards" */ '../views/Rewards.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
