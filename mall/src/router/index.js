import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

import Home from '@/pages/home';
import Cart from '@/pages/cart';
import Category from '@/pages/category';
import Product from '@/pages/product';
import Search from '@/pages/search';

const routers = [{
	name:'home',
	path:'/home',
	component:Home,
	children:[{
		name:'home-product',
		path:'product/:id',
		component:()=>import('pages/home'),
	}]
},
{
	name:'cart',
	path:'/cart',
	component: Cart
},
{
	name:'category',
	path:'/category',
	component:()=>import('@/pages/cart')},
{
	name:'product',
	path:'/product',
	component:()=>import('@/pages/cart')},
{
	name:'search',
	path:'/search',
	component:()=>import('@/pages/cart')},
{	
	path:'*',
	redirect:'/home'
}]

Vue.use(Router)

export default new Router({  
    routes:routers  
});
