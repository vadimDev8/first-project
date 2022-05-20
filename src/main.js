import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import dataFilter from './filters/date.filter'
import Vuelidate from 'vuelidate'
import messagePlugin from './utils/message.plugin'

import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import './registerServiceWorker'
import 'materialize-css/dist/js/materialize.min'


Vue.config.productionTip = false
Vue.use(messagePlugin)
Vue.filter('date', dataFilter)
Vue.use(Vuelidate)



new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')












