/**
 入口js
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'

new Vue({
  el: '#app',
  // vue 2.0的写法
  render: h => h(App),
  // components: { App }  vue1.0的写法
  router
})
