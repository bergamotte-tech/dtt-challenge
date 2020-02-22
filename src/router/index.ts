import Vue from 'vue'
import VueRouter from 'vue-router'
import i18n from '@/i18n'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: `/${i18n.locale}`
  },
  {
    path: '/:lang',
    component: {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      render(c: (arg0: string) => any) {
        return c('router-view')
      }
    },
    children: [
      {
        path: '',
        name: 'event-list',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import('../views/EventList.vue')
      },
      {
        path: 'event',
        name: 'event-show',
        component: () => import('../views/EventShow.vue')
      },
      {
        path: 'event/create',
        name: 'event-create',
        component: () => import('../views/EventCreate.vue')
      },
      {
        path: '*',
        name: 'error-404',
        component: () => import('../views/Error404.vue')
      }
    ]
  }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

router.beforeEach((to, from, next) => {
  // get the language from the url
  let language: string = to.params.lang

  // get the existing locales
  const locales = require.context(
    '../locales',
    true,
    /[A-Za-z0-9-_,\s]+\.json$/i
  )

  // check if language corresponds to one of the existing locales
  let isValidLanguage = false

  locales.keys().forEach(key => {
    const matched = key.match(/([A-Za-z0-9-_]+)\./i)
    if (matched && matched.length > 1 && !isValidLanguage) {
      isValidLanguage = matched[1] === language
    }
  })

  if (!isValidLanguage) {
    language = 'en'
  }
  i18n.locale = language
  next()
})

export default router
