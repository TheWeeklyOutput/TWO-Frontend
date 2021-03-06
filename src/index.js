import './promise-polyfill'
import 'es6-object-assign/auto'
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
import infiniteScroll from 'vue-infinite-scroll'

Vue.use(require('vue-social-sharing'))

Vue.use(infiniteScroll)
Vue.directive({infiniteScroll})

Vue.use(VueTimeago, {
  name: 'timeago', // component name, `timeago` by default
  locale: undefined,
  locales: {
    // you will need json-loader in webpack 1
    'en-US': require('date-fns/locale/en')
  }
})

// vue-shortkey
Vue.use(require('vue-shortkey'))
Vue.use(Affix)
Vue.use(VueProgressiveImage)

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
  window.scrollTo(0, 0);
  next();
});

Vue.directive('click-outside', {
  bind: function (el, binding, vnode) {
    el.event = function (event) {
      // here I check that click was outside the el and his childrens
      if (!(el == event.target || el.contains(event.target))) {
        // and if it did, call method provided in attribute value
        vnode.context[binding.expression](event);
      }
    };
    document.body.addEventListener('click', el.event)
  },
  unbind: function (el) {
    document.body.removeEventListener('click', el.event)
  },
});


window['_paq'] = window['_paq'] || []

let loc = window.location
Vue.router.afterEach((to, from) => {
  window['_paq'].push(['setDocumentTitle', to.path])
  window['_paq'].push(['setCustomUrl', loc.protocol + '//' + loc.hostname + to.fullPath])

  // Allow override page settings
  const settings = Object.assign(
    {},
    routeOption('matomo', from, to, store),
    routeOption('piwik', from, to, store),
    to.meta && to.meta.matomo,
    to.meta && to.meta.piwik
  )
  Object.keys(settings).forEach(key => {
    window['_paq'].push(settings[key])
  })

  // We tell Matomo to add a page view
  window['_paq'].push(['trackPageView'])
})

function routeOption (key, from, to, store) {
  let matched = to.matched[0]
  let matchedComponent = matched.components.default
  return componentOption(matchedComponent, key, from, to, store)
}

function componentOption (component, key, ...args) {
  if (!component || !component.options || !component.options[key]) {
    return {}
  }
  let option = component.options[key]
  if (typeof option === 'function') {
    option = option(...args)
  }
  return option
}

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
