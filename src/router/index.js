import { createRouter, createWebHashHistory } from 'vue-router';
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
    component: () => import('@/views/CartCourse.vue'),
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
  history: createWebHashHistory(),
  routes,
});

export default router;
