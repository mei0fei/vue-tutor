// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VeeValidate from 'vee-validate';
import App from './App'
import router from './router'
import store from './store'
import VuexTest from './VuexTest'

Vue.config.productionTip = false
Vue.use(VeeValidate);

/* eslint-disable */
var vm = new Vue({
  el: '#app',
  router,
  store,
  components: { 'app': App },
  template: '<app/>'
})
