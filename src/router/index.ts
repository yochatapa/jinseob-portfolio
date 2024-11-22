import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router'

import AboutMe from '@/views/about/AboutMe.vue'
import Career from '@/views/career/Career.vue'
import Projects from '@/views/projects/Projects.vue'
import Skills from '@/views/skills/Skills.vue'
import Contact from '@/views/contact/Contact.vue'


const router = createRouter({
  history: createWebHashHistory(),
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
