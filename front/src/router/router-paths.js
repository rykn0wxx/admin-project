export default [
  {
    path: '/app',
    name: 'LayoutsApplication',
    view: 'layouts/Application',
    redirect: '/home',
    children: [
      {
        path: '/home',
        name: 'Home',
        view: 'pages/Home'
      }, {
        path: '/about',
        name: 'About',
        view: 'pages/About'
      }
    ]
  }, {
    path: '/landing',
    name: 'LayoutsLanding',
    view: 'layouts/Landing'
  }
]
