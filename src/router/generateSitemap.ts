import { RouteConfig } from 'vue-router'

//inspired by the solution of https://zigamiklic.com/simple-sitemap-for-vue-router/
export function getRoutesList(
  routes: Array<RouteConfig>,
  pre: string
): Array<string> {
  const routesList: Array<string> = []

  for (let index = 0; index < routes.length; index++) {
    const currentRoute = routes[index]
    if (currentRoute.path) {
      routesList.push(currentRoute.path)
    }

    if (currentRoute.children != undefined) {
      let childrenList: Array<string> = []
      childrenList = getRoutesList(currentRoute.children, pre)
      for (let index = 0; index < childrenList.length; index++) {
        routesList.push(childrenList[index])
      }
    }
  }
  return routesList
}
//console.log(getRoutesList(routes, window.location.href))
