import Vue from 'vue'
import Router from 'vue-router'

import Discover from '@/pages/discover'
import Chats from '@/pages/chats'
import Contacts from '@/pages/contacts'
import Me from '@/pages/me'
import Search from '@/pages/search'
import GroupChat from '@/pages/groupchat'
import FaceChat from '@/pages/facechat'


Vue.use(Router)

export default new Router({
  routes: [   
    {
      path: '/chats',
      name: 'Chats',
      component: Chats
    },
    {
      path: '/discover',
      name: 'Discover',
      component: Discover
    },
    {
      path: '/contacts',
      name: 'Contacts',
      component: Contacts
    },
    {
      path: '/me',
      name: 'Me',
      component: Me
    },{
      path: '/search',
      name: 'Search',
      component: Search
    },{
      path: '/groupchat',
      name: 'GroupChat',
      component: GroupChat
    },{
      path: '/facechat',
      name: 'FaceChat',
      component: FaceChat
    },
  ]
})
