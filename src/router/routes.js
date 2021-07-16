
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      { path: 'input', component: () => import('components/Input.vue') },
      { path: 'select', component: () => import('components/Select.vue') },
      { path: 'button', component: () => import('components/Button.vue') },
      { path: 'radio', component: () => import('components/Radio.vue') },
      { path: 'checkbox', component: () => import('components/Checkbox.vue') },
      { path: 'pagination', component: () => import('components/Pagination.vue') },
      { path: 'table', component: () => import('components/Table.vue') },
      { path: 'modal', component: () => import('components/Modal.vue') }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
