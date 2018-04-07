import Home from '../views/Home.vue'
import DevTools from '../views/DevTools.vue'

export default {
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/Home'),
      meta: {title: 'The Weekly Output | ' + 'Home' }
    }, {
      path: '/dev',
      name: 'dev',
      component: DevTools,
    }, {
      path: '/articles/:category/:slug',
      name: 'article',
      component: () => import('../views/Article'),
      props: true
    }, {
      path: '/author/:name',
      name: 'author',
      component: () => import('../views/Author'),
      props: true
    }, {
      path: '/articles/:category',
      name: 'category',
      component: () => import('../views/Category'),
      props: true
    }
  ]
}
