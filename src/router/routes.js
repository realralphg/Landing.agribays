
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { name:'home', path: '', component: () => import('pages/Index.vue') },
      { name:'works', path: 'how_it_works', component: () => import('pages/Index.vue') },
      { name:'plans', path: 'plans', component: () => import('pages/Index.vue') },
      { name:'terms', path: 'terms_and_conditions', component: () => import('pages/Index.vue') },
      { name:'privacy', path: 'privacy_policy', component: () => import('pages/Index.vue') },
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
