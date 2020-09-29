
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '/', component: () => import('pages/Index.vue') }
    ]
  },
  {
    path: '/authentication',
    component: () => import('layouts/Authorization'),
    children: [
      { path: '/register', component: () => import('pages/Authentication/Register') },
      { path: '/login', component: () => import('pages/Authentication/Login') }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
