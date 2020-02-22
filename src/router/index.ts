import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'event-list',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/EventList.vue')
  },
  {
    path: '/event',
    name: 'event-show',
    component: () => import('../views/EventShow.vue')
  },
  {
    path: '/event/create',
    name: 'event-create',
    component: () => import('../views/EventCreate.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
