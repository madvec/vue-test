import Vue from 'vue'
import App from './App.vue'
import { router } from './_helpers/router'
import { store } from './store/store'

import  { configureFakeBackend }  from './_helpers';
configureFakeBackend();

new Vue({
  el: '#app', router, store,
  render: h => h(App)
})
