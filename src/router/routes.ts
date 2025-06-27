import type { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout1.vue'),
    children: [
      { path: '', component: () => import('pages/Homepage/home-index.vue') },
      { path: 'incubatee', component: () => import('pages/IncubateeIndex.vue') },
      { path: 'mentor', component: () => import('pages/MentorIndex.vue') },
      { path: 'mentorPage', component: () => import('pages/Mentor/MentorProfile.vue') },
      { path: 'incubateePage', component: () => import('pages/Incubatees/IncubateesIndex.vue') },
      { path: 'internalMentor', component: () => import('pages/Mentor/InternalMentor.vue') },
      { path: 'add-news', component: () => import('pages/Admin/add-news.vue') },

    ],
  },
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
