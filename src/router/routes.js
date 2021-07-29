
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      { path: 'input', component: () => import('pages/Input.vue') },
      { path: 'select', component: () => import('pages/Select.vue') },
      { path: 'button', component: () => import('pages/Button.vue') },
      { path: 'radio', component: () => import('pages/Radio.vue') },
      { path: 'checkbox', component: () => import('pages/Checkbox.vue') },
      { path: 'expansionItem', component: () => import('pages/ExpansionItem.vue') },
      { path: 'datepicker', component: () => import('pages/Datepicker.vue') },
      { path: 'sample', component: () => import('pages/Sample.vue') }
    ]
  },
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorPage.vue')
  }
]

export default routes
