export default {
  mode: 'hash',
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/Home'),
      meta: {title: 'The Weekly Output | ' + 'Home'}      
      
    }, {
      path: '/articles/:category/:id',
      name: 'article',
      component: () => import('../views/Article'),
      props: true,
      meta: {title: 'Article'}            
    }, {
      path: '/author/:name',
      name: 'author',
      component: () => import('../views/Author'),
      props: true,
      meta: {title: 'Author'}      
    }, {
      path: '/articles/:category',
      name: 'category',
      component: () => import('../views/Category'),
      props: true,
      meta: {title: 'Category'}      
    }
  ]
}
