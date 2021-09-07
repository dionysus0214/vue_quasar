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
      { path: 'pagination', component: () => import('pages/Pagination.vue') },
      { path: 'dialog', component: () => import('pages/Dialog.vue') },
      { path: 'tooltip', component: () => import('pages/Tooltip.vue') },
      { path: 'filePicker', component: () => import('pages/FilePicker.vue') },
      { path: 'tabs', component: () => import('pages/Tabs.vue') },
      { path: 'toggle', component: () => import('pages/Toggle.vue') },
      { path: 'chip', component: () => import('pages/Chip.vue') },
      { path: 'transfer', component: () => import('src/pages/Transfer.vue') },
      { path: 'banner', component: () => import('src/pages/Banner.vue') },
      { path: 'table', component: () => import('src/pages/Table.vue') },
      { path: 'sample', component: () => import('src/pages/Sample.vue') },
    ],
  },
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorPage.vue'),
  },
];

export default routes;
