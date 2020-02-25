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
        component: () => import('@/views/EventList.vue')
      },
      {
        path: 'event',
        name: 'event-show',
        component: () => import('@/views/EventShow.vue')
      },
      {
        path: 'event/create',
        name: 'event-create',
        component: () => import('@/views/EventCreate.vue')
      },

      {
        path: 'error/undefined-language',
        name: 'error-undefined-language',
        component: () => import('@/views/errors/ErrorUndefinedLanguage.vue')
      },
      {
        path: 'error/not-found',
        name: 'error-404',
        component: () => import('@/views/errors/Error404.vue')
      },
      {
        path: '*',
        redirect: 'error/not-found'
      }
    ]
  }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

router.beforeEach((to, from, next) => {
  if (to.fullPath === '') next()
  else if (from.params.lang === to.params.lang) next()
  else {
    // get the language from the url
    const chosenLanguage: string = to.params.lang

    // get the existing locales
    const locales = i18n.availableLocales
    // check if language corresponds to one of the existing locales
    let isValidLanguage = false
    for (let i = 0; i < locales.length; i++) {
      if (locales[i] === chosenLanguage) {
        isValidLanguage = true
        i = locales.length
      }
    }

    if (!isValidLanguage) {
      next(i18n.locale + '/error/undefined-language')
    } else {
      i18n.locale = chosenLanguage
      i18n.fallbackLocale = chosenLanguage
      next()
    }
  }
})

export default router
