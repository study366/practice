// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

// 引入vuex 插件
// 引入vue-resource插件
// store是自己新建的文件名 
// 引入mint-ui
// 导入样式

import store from './store/'
import VueResource from 'vue-resource'
import MintUi from 'mint-ui'
import 'mint-ui/lib/style.css'
//全局使用vue-resource
Vue.use(VueResource);
Vue.use(MintUi);

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,

  // 导入store  
  store,
  
  components: { App },
  template: '<App/>'
})
