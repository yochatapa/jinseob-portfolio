import { createRouter, createWebHistory } from 'vue-router'

import AboutMe from '@/views/about/index.vue'
import Career from '@/views/career/index.vue'
import Projects from '@/views/projects/index.vue'
import Skills from '@/views/skills/index.vue'
import Contact from '@/views/contact/index.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'about',
      component: AboutMe,
    },
    {
      path: '/career',
      name: 'Career',
      component: Career,
    },
    {
      path: '/projects',
      name: 'Projects',
      component: Projects,
    },
    {
      path: '/skills',
      name: 'Skills',
      component: Skills,
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact,
    },
  ],
})

export default router
