import Vue from 'vue'
import App from './App.vue'
import store from './store'
import ColorMode from './plugin.js'
Vue.config.productionTip = false
Vue.use(ColorMode)
new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
