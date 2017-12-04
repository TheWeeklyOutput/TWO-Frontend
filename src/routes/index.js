import Home from '../views/Home'

export default {
  mode: 'hash',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    }, {
      path: '/articles/:category/:id',
      name: 'article',
      component: () => import('../views/Article'),
      props: true
    }
  ]
}
