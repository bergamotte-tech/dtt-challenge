import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import i18n from '@/i18n'
import { VNode } from 'vue/types/umd'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'rt-root',
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
    name: locales[i] + '-root',
    component: {
      render(createElement): VNode {
        return createElement('router-view')
      }
    },
    children: [
      {
        path: '/' + locales[i] + `/${i18n.t('router.path-home', locales[i])}`,
        name: locales[i] + '-home',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import('@/views/Home.vue')
      },
      {
        path:
          '/' + locales[i] + `/${i18n.t('router.path-categories', locales[i])}`,
        name: locales[i] + '-categories',
        component: () => import('@/views/Categories.vue')
      },
      {
        path:
          '/' +
          locales[i] +
          `/${i18n.t('router.path-categories', locales[i])}` +
          '/:idcat',
        name: locales[i] + '-category-details',
        component: () => import('@/views/CategoryDetails.vue')
      },
      {
        path: '/' + locales[i] + `/${i18n.t('router.path-random', locales[i])}`,
        name: locales[i] + '-random',
        component: () => import('@/views/Random.vue')
      },
      {
        path:
          '/' +
          locales[i] +
          `/${i18n.t('router.path-details', locales[i])}` +
          '/:id',
        name: locales[i] + '-details',
        component: () => import('@/views/Details.vue'),
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
  name: 'rt-error-language',
  component: () => import('@/views/errors/ErrorLanguage.vue')
})

const router = new VueRouter({
  routes,
  mode: 'history' //'hash' if unsupported
})

import { getRoutesList } from './generateSitemap'
const sitemap: Array<string> = getRoutesList(routes, window.location.href)

router.beforeEach((to, from, next) => {
  if (from.name === to.name) {
    next()
  } else {
    if (from.fullPath.substring(1, 3) == to.fullPath.substring(1, 3)) {
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
        next()
      } else {
        i18n.locale = chosenLanguage
        i18n.fallbackLocale = chosenLanguage
        next()
      }
    }
  }
})

export { router, sitemap }
