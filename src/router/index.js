import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/CategoryMainView.vue';
import About from '@/views/ClassDetailView.vue';
import Work from '@/views/MemberRegisterView.vue';
import Contact from '@/views/TakeCourseView.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
  { path: '/work', component: Work },
  { path: '/contact', component: Contact },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
