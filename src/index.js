import './promise-polyfill'
import Vue from 'vue'
import VueResource from 'vue-resource'
import Router from 'vue-router'
import { sync } from 'vuex-router-sync'
import App from './App'
import routes from './routes'
import store from './store'
import Vuetify from 'vuetify'


// vuetify
Vue.use(Vuetify)

// vue-shortkey
Vue.use(require('vue-shortkey'))

// vue-resource
Vue.use(VueResource)

Vue.http.interceptors.push((request, next) => {
  request.credentials = true
  next()
})

let port = ':8000'
if (process.env.NODE_ENV === 'production') {
  port = ''
}

Vue.http.options.root = window.location.protocol + '//' + window.location.hostname + port

// vue-router
Vue.use(Router)
const router = new Router(routes)
Vue.router = router

sync(store, router)

const app = new Vue({
  router,
  store,
  ...App
})

// Enable progressive web app support (with offline-plugin)
if (process.env.NODE_ENV === 'production') {
  require('./pwa')
}
app.$mount('#app')

export { app, router, store }
