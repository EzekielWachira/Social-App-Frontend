
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
          { path: '/home', component: () => import('pages/Main/Home') },
          { path: '/events', component: () => import('pages/Main/Events') },
          { path: '/calendar', component: () => import('pages/Main/Calendar') },
          { path: '/forums', component: () => import('pages/Main/Forums') },
          { path: '/bookmarks', component: () => import('pages/Main/Bookmarks') },
          { path: '/tags', component: () => import('pages/Main/Tags') },
          { path: '/topics', component: () => import('pages/Main/Topics') },
          { path: '/files', component: () => import('pages/Main/Files') },
          { path: '/meetings', component: () => import('pages/Main/Meetings') },
          { path: '/todos', component: () => import('pages/Main/Todos') }
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
