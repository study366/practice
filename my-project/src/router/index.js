import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
// 路径
import case1 from '@/pages/case/index.vue'
import case2 from '@/pages/case2/index.vue'

import Damo1 from '@/pages/damo1/index.vue'
import Damo2 from '@/pages/damo2/index.vue'
import Damo3 from '@/pages/damo3/index.vue'
import Damo4 from '@/pages/damo4/index.vue'
import Damo5 from '@/pages/damo5/index.vue'
import Damo6 from '@/pages/damo6/index.vue'
import Damo7 from '@/pages/damo7/index.vue'
import Damo8 from '@/pages/damo8/index.vue'
import Damo9 from '@/pages/damo9/index.vue'
import Damo10 from '@/pages/damo10/index.vue'
import Damo11 from '@/pages/damo11/index.vue'
import Damo12 from '@/pages/damo12/index.vue'
import Damo13 from '@/pages/damo13/index.vue'
import Damo14 from '@/pages/damo14/index.vue'
import Damo15 from '@/pages/damo15/index.vue'
import Damo16 from '@/pages/damo16/index.vue'
import Damo17 from '@/pages/damo17/index.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    // 路由配置
    {
      path: '/damo1',
      name: 'Damo1',
      component: Damo1
    },

    {
      path: '/damo2',
      name: 'damo2',
      component: Damo2
    },
    {
      path: '/damo3',
      name: 'damo3',
      component: Damo3
    },
     {
      path: '/damo4',
      name: 'damo4',
      component: Damo4
    },
    {
      path: '/damo5',
      name: 'damo5',
      component: Damo5
    },
    {
      path: '/damo6',
      name: 'damo6',
      component: Damo6
    },
    {
      path: '/damo7',
      name: 'damo7',
      component: Damo7
    },
    {
      path: '/case',
      name: 'case',
      component: case1
    },
    {
      path: '/case2',
      name: 'case1',
      component: case2
    },
     {
      path: '/damo8',
      name: 'damo8',
      component: Damo8
    },
    // 加冒号  表示 不固定值  ：表示通配符
    {
      path: '/damo9/:userId',
      name: 'damo9',
      component: Damo9
    },
    {
      path: '/damo10',
      name: 'damo10',
      component: Damo10
    },
     {
      path: '/damo11',
      name: 'damo11',
      component: Damo11
    },
    {
      path: '/damo12',
      name: 'damo12',
      component: Damo12
    },
    {
      path: '/damo13',
      name: 'damo13',
      component: Damo13
    },
    {
      path: '/damo14',
      name: 'damo14',
      component: Damo14
    },
    {
      path: '/damo15',
      name: 'damo15',
      component: Damo15
    },
    {
      path: '/damo16',
      name: 'damo16',
      component: Damo16
    },
    {
      path: '/damo17',
      name: 'damo17',
      component: Damo17
    },
  ]
})
