import { createRouter, createWebHashHistory as createHistoryMode } from 'vue-router'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import type { RouteItem, RouteNavItem } from '@/types/router'

// 进度条
NProgress.configure({
  easing: 'ease', // 动画方式
  speed: 500, // 递增进度条的速度
  showSpinner: false, // 是否显示加载 icon
  trickleSpeed: 200, // 自动递增间隔
  minimum: 0.3 // 初始化时的最小百分比
})

const routes = [
  {
    path: '/Home',
    name: 'Home',
    meta: { title: '简介' },
    redirect: '/Home/Start',
    children: [
      {
        path: 'Start',
        name: 'Start',
        meta: { title: '快速开始' },
        component: () => import('../views/Start.vue')
      }
    ]
  },
  {
    path: '/Base',
    name: 'Base',
    redirect: '/Base/Button',
    meta: { title: '基础组件' },
    children: [
      {
        path: 'Button',
        name: 'Button',
        meta: { title: 'Button 按钮' },
        component: () => import('../views/Button.vue')
      },
      {
        path: 'Message',
        name: 'Message',
        meta: { title: 'Message 提示' },
        component: () => import('../views/Message.vue')
      }
    ]
  },
  { path: '/:patchAll(.*)*', redirect: '/Start' }
]

const getRouteNav = (routes: RouteItem[], parentPath?: string) => {
  const getRouteNavItem = (i: RouteItem) => {
    const newItem: RouteNavItem = {
      path: i.path,
      name: i.name,
      title: i.meta?.title,
      fullPath: parentPath && parentPath !== '/' ? `${parentPath}/${i.path}` : i.path
    }
    if (i.children?.length) {
      newItem.children = getRouteNav(i.children, newItem.fullPath)
    }
    return newItem
  }
  return routes.filter((i) => i.children || i.component).map((i) => getRouteNavItem(i))
}

export const routeNavs: RouteNavItem[] = getRouteNav(routes)

const router = createRouter({
  history: createHistoryMode(),
  routes
})

router.beforeEach((to, from) => {
  NProgress.start()
  // console.log('to-name:', to.name, ';from-name:', from.name);
})

router.afterEach(() => {
  NProgress.done()
})

export default router
