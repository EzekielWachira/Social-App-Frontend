
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: '/',
        component: () => import('pages/Index.vue'),
        meta: { requiresAuth: true },
        children: [
          {
            path: '/home',
            component: () => import('pages/Main/Home')
          }
        ]
      }
    ]
  },
  {
    path: '/authentication',
    component: () => import('layouts/Authorization'),
    children: [
      { path: '/register', component: () => import('pages/Authentication/Register'), meta: { guestOnly: true } },
      { path: '/login', component: () => import('pages/Authentication/Login'), meta: { guestOnly: true } }
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
