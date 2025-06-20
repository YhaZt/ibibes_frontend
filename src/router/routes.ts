import type { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/IncubateeIndex.vue') }],
  },
    {
    path: '/mentor',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/MentorIndex.vue') }],
  },

    {
    path: '/mentorPage',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/Mentor/MentorProfile.vue') }],
  },
  {
    path: '/incubatee',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/Incubatees/IncubateesIndex.vue') }],
  },
  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
