import Vue from 'vue';
import App from './App';
import router from './router';

import 'swiper/dist/css/swiper.css';
import 'assets/scss/index.scss';


import 'babel-polyfill';
import fastclick from 'fastclick';
import vueLazyload from 'vue-lazyload';


fastclick.attach(document.body);

Vue.config.productionTip = false

Vue.use(vueLazyload,{
	preload:1,
	error:'pages/home/1.jpg',
	loading:'pages/home/1.jpg',
	attempt:1
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App),  
})
