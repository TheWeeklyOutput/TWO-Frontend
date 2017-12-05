import Home from '../views/Home.vue'
import DevTools from '../views/DevTools.vue'

export default {
  mode: 'hash',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/dev',
      name: 'dev',
      component: DevTools
    }
  ]
}
