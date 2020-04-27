import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

console.log('环境', process.env.NODE_ENV);


new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')