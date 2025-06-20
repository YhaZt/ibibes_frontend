import type { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: 'incubatee',
        name: 'home',
        component: () => import('pages/IncubateeIndex.vue'),
      },
      {
        path: 'mentor',
        name: 'mentor.index',
        component: () => import('pages/MentorIndex.vue'),
      },
      {
        path: 'mentorPage',
        name: 'mentor.profile',
        component: () => import('pages/Mentor/MentorProfile.vue'),
      },
      {
        path: 'incubateePage',
        name: 'incubatee.index',
        component: () => import('pages/Incubatees/IncubateesIndex.vue'),
      },
    ]
  },

  // Catch-all route
  {
    path: '/:catchAll(.*)*',
    name: 'error.notfound',
    component: () => import('pages/ErrorNotFound.vue'),
  }
]

export default routes
