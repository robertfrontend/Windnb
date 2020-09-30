import Vue from 'vue'
import App from './App.vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import { BSkeleton } from 'bootstrap-vue'
import VueLazyload from 'vue-lazyload'
 

Vue.config.productionTip = false
// Install BootstrapVue
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)
Vue.component('b-skeleton', BSkeleton)

Vue.use(VueLazyload)



new Vue({
  render: h => h(App),
}).$mount('#app')
