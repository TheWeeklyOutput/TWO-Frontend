import './promise-polyfill'
import Vue from 'vue'
import VueResource from 'vue-resource'
import Router from 'vue-router'
import { sync } from 'vuex-router-sync'
import App from './App'
import routes from './routes'
import store from './store'
import Affix from 'vue-affix'
import VueTimeago from 'vue-timeago'
import VueProgressiveImage from 'vue-progressive-image'


Vue.use(VueTimeago, {
  name: 'timeago', // component name, `timeago` by default
  locale: 'en-US',
  locales: {
    // you will need json-loader in webpack 1
    'en-US': require('vue-timeago/locales/en-US.json')
  }
})

// vue-shortkey
Vue.use(require('vue-shortkey'))
Vue.use(Affix)
Vue.use(VueProgressiveImage, {
  blur: 30
})




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

Vue.router.beforeEach(function (to, from, next) {
  document.title = to.meta.title
  window.scrollTo(0, 0);
  next();
});


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
