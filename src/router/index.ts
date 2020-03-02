import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import i18n from '@/i18n'
import { VNode } from 'vue/types/umd'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    redirect: `/${i18n.locale}`
  }
]

// fill routes with available locales
// NOTES : declare dynamic segments here, not in json as it will be considered a String
// NOTES : nested paths that start with / will be treated as a root path. This allows you to leverage the component nesting without having to use a nested URL.

const locales = i18n.availableLocales
for (let i = 0; i < locales.length; i++) {
  routes.push({
    path: '/' + locales[i],
    component: {
      render(createElement): VNode {
        return createElement('router-view')
      }
    },
    children: [
      {
        path: '/' + locales[i],
        name: locales[i] + '-event-list',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import('@/views/EventList.vue')
      },
      {
        path: '/' + locales[i] + `/${i18n.t('path.create', locales[i])}`,
        name: locales[i] + '-event-create',
        component: () => import('@/views/EventCreate.vue')
      },
      {
        path: '/' + locales[i] + `/${i18n.t('path.show', locales[i])}` + '/:id',
        name: locales[i] + '-event-show',
        component: () => import('@/views/EventShow.vue'),
        props: true
      },
      {
        path:
          '/' +
          locales[i] +
          `/${i18n.t('path.user', locales[i])}` +
          '/:username',
        name: locales[i] + '-user',
        component: () => import('@/views/User.vue'),
        props: true
      },
      {
        path: '/' + locales[i] + '/*',
        name: locales[i] + '-error-404',
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

router.beforeEach((to, from, next) => {
  if (from.fullPath.substring(1, 3) == to.fullPath.substring(1, 3)) {
    next()
  } else if (from.name == to.name) {
    next()
  } else {
    // get the language from the url
    const chosenLanguage: string = to.fullPath.substring(1, 3).substring(0, 2)

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
      console.log('aa')
      next()
    } else {
      i18n.locale = chosenLanguage
      i18n.fallbackLocale = chosenLanguage
      next()
    }
  }
})

export default router
