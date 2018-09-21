import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'

import router from './router'
import store from './store'

axios.defaults.baseURL = 'https://vuejs-http-49c0e.firebaseio.com'
/* axios.defaults.headers.common['Authorization'] = 'fasdfa' */
axios.interceptors.request.use( (config) => {
  console.log('Request interceptor', config)
  return config 
})

axios.interceptors.response.use( res => {
  console.log('Response Interceptor', res)
  return res
})
 

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
