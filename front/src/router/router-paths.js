export default [
  {
    path: '/app',
    name: 'Application',
    view: 'layouts/Application',
    redirect: '/home',
    children: [
      {
        path: '/home',
        name: 'Home',
        view: 'pages/Home',
        icon: 'home'
      }, {
        path: '/about',
        name: 'About',
        view: 'pages/About',
        icon: 'info'
      }
    ]
  }, {
    path: '/landing',
    name: 'Landing',
    view: 'layouts/Landing'
  }, {
    path: '/authentication',
    name: 'Authentication',
    view: 'layouts/Authentication',
    redirect: '/authentication/login',
    children: [
      {
        path: '/authentication/login',
        name: 'Login',
        view: 'auths/Login',
        icons: 'person_outline'
      }, {
        path: '/authentication/register',
        name: 'Register',
        view: 'auths/Register',
        icons: 'contacts'
      }
    ]
  }, {
    path: '/boards',
    name: 'Boards',
    view: 'layouts/Boards',
    redirect: '/allboards',
    children: [
      {
        path: '/allboards',
        name: 'AllBoards',
        view: 'boards/AllBoards',
        icon: 'dashboard'
      }
    ]
  }
]
