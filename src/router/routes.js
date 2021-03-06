const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: 'input', component: () => import('pages/Input.vue') },
      { path: 'select', component: () => import('pages/Select.vue') },
      { path: 'button', component: () => import('pages/Button.vue') },
      { path: 'radio', component: () => import('pages/Radio.vue') },
      { path: 'checkbox', component: () => import('pages/Checkbox.vue') },
      { path: 'caution', component: () => import('src/pages/Caution.vue') },
      { path: 'help', component: () => import('src/pages/Help.vue') },
      { path: 'datePicker', component: () => import('src/pages/DatePicker.vue') },
      { path: 'pagination', component: () => import('pages/Pagination.vue') },
      { path: 'dialog', component: () => import('pages/Dialog.vue') },
      { path: 'tooltip', component: () => import('pages/Tooltip.vue') },
      { path: 'filePicker', component: () => import('pages/FilePicker.vue') },
      { path: 'table', component: () => import('pages/Table.vue') },
      { path: 'tabs', component: () => import('pages/Tabs.vue') },
      { path: 'toggle', component: () => import('pages/Toggle.vue') },
      { path: 'chip', component: () => import('pages/Chip.vue') },
      { path: 'breadcrumbs', component: () => import('src/pages/Breadcrumbs.vue') },
      { path: 'dropdown', component: () => import('src/pages/Dropdown.vue') },
      { path: 'markupTable', component: () => import('src/pages/MarkupTable.vue') },
      { path: 'project', component: () => import('src/pages/Project.vue') },
    ],
  },
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorPage.vue'),
  },
];

export default routes;
