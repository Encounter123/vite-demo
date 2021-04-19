import {
  createRouter,
  createWebHashHistory
} from 'vue-router'

import Index from '@/views/Index.vue'
import Todos from '@/components/Todos.vue'

const routers = [{
  path: '/',
  component: Index
}, {
  path: '/todos',
  component: Todos
}]

const router = createRouter({
  history: createWebHashHistory(),
  routes: routers
})

//特性 ：动态路由
router.addRoute({
  path: '/about',
  name: 'about',
  component: () => import('@/views/aboutView.vue')
})

router.addRoute('about', {
  path: '/about/user',
  component: {
    render() {
      return h('div', 'userInfo')
    }
  }
})







export default router