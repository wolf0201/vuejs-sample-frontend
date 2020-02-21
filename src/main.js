import Vue from 'vue'
import App from './App.vue'
import router from "./router"

import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue'

import ElementUI from 'element-ui'
import locale from "element-ui/src/mixins/locale";
import 'element-ui/lib/theme-chalk/index.css'

Vue.config.productionTip = false

// Bootstrap
Vue.use(BootstrapVue)

Vue.use(ElementUI, {locale})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
