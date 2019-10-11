import Vue from 'vue'
import App from './App'
import router from './router'

import 'assets/scss/index.scss';
import 'swiper/dist/css/swiper.css';


import 'babel-polyfill';
import fastclick from 'fastclick';
import VueLazyload from 'vue-lazyload';

Vue.use(VueLazyload,{
	preLoad: 1.5,	
	attempt: 1
})
fastclick.attach(document.body);
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
