import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'


 
import Home from 'pages/home';
import Cart from 'pages/cart';
import Category from 'pages/category';
import Personal from 'pages/personal';
import Product from 'pages/product';
import Search from 'pages/search';



const routes = [	
    {
      path: '/home',
      name: 'home',
      component:() => import ('pages/home'),
      children:[{
		name:'home-product',
		path:'product/:id',
		component:()=>import('pages/product'),
	}]
    },
    {
      path: '/cart',
      name: 'cart',
      component:() => import ('pages/cart'),
    },
    {
      path: '/category',
      name: 'category',
      component:() => import ('pages/category'),
    },
    {
      path: '/personal',
      name: 'personal',
      component:() => import ('pages/personal'),
    },
    {
      path: '/product',
      name: 'product',
      component:() => import('pages/product')
    },
    {
      path: '/search',
      name: 'search',
      component: () => import('pages/search')
    },{
      path: '*',      
      redirect:'/home'
    },
]
;
Vue.use(Router)

export default new Router({
  routes
})
