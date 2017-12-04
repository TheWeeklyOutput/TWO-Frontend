import Home from '../views/Home'

export default {
  mode: 'hash',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    }, {
      path: '/articles/:id',
      name: 'article',
      component: () => import('../views/Article'),
    }
  ]
}
