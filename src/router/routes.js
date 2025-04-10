const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') },
      { path: 'experiment', component: () => import('pages/ExperimentPage.vue') }, //<- REMEMBER TO DELETE THIS LINE BEFORE UPLOADING TO PRODUCTION
      { path: 'upload/product', component: () => import('pages/EditProduct.vue') },
      { path: 'upload/product/:id', component: () => import('pages/EditProduct.vue') },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
]

export default routes
