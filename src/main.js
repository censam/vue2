import Vue from 'vue'
import App from './App.vue'

// import Navbar from './components/Navbar.vue'


// Vue.component(Navbar)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
