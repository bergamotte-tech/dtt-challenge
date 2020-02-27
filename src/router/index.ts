import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import i18n from '@/i18n'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    redirect: `/${i18n.locale}`
  }
]

// fill routes with available locales
const locales = i18n.availableLocales
for (let i = 0; i < locales.length; i++) {
  console.log('Je tente de push ' + locales[i])
  routes.push({
    path: '/' + locales[i],
    component: {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      render(c: (arg0: string) => any) {
        return c('router-view')
      }
    },
    children: [
      {
        path: '',
        meta: 'list',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import('@/views/EventList.vue')
      },
      {
        path: `${i18n.t('path.show', locales[i])}`,
        meta: 'show',
        component: () => import('@/views/EventShow.vue')
      },
      {
        path: `${i18n.t('path.create', locales[i])}`,
        meta: 'create',
        component: () => import('@/views/EventCreate.vue')
      },
      {
        path: '*',
        meta: 'error-404',
        component: () => import('@/views/errors/Error404.vue')
      }
    ]
  })
}
routes.push({
  path: '/*',
  component: () => import('@/views/errors/ErrorLanguage.vue')
})

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router
