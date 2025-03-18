import { createRouter, createWebHistory } from 'vue-router';
import MainLayout from '@/layouts/MainLayout.vue';
// import AuthLayout from '@/layouts/AuthLayout.vue';

const routes = [
  {
    path: '/',
    component: () => import('@/views/MainView.vue'),
    name: 'home',
  },
  {
    path: '/categoryMain',
    component: () => import('@/views/CategoryMainView.vue'),
    name: 'categoryMain',
  },
  {
    path: '/classDetail',
    component: () => import('@/views/ClassDetailView.vue'),
    name: 'classDetail',
  },
  {
    path: '/memberRegister',
    component: () => import('@/views/MemberRegisterView.vue'),
    name: 'memberRegister',
  },
  {
    path: '/takeCourse',
    component: () => import('@/views/TakeCourseView.vue'),
    name: 'takeCourse',
  },

  // {
  //   path: '/login',
  //   component: AuthLayout,
  //   children: [
  //     {
  //       path: '',
  //       component: Login,
  //     },
  //   ],
  // },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
