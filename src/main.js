import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vmodal from 'vue-js-modal'
import vuetify from './plugins/vuetify';


Vue.config.productionTip = false

Vue.use(vmodal)

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
