import { createRouter, createWebHistory } from 'vue-router'

const HomePage = () => import('@/pages/HomePage.vue')
const ProjectsPage = () => import('@/pages/ProjectsPage.vue')
const CoursesPage = () => import('@/pages/CoursesPage.vue')
const PersonalPage = () => import('@/pages/PersonalPage.vue')
const TravelPage = () => import('@/pages/TravelPage.vue')
const SportsPage = () => import('@/pages/SportsPage.vue')
const PhotographyPage = () => import('@/pages/PhotographyPage.vue')
const HobbiesPage = () => import('@/pages/HobbiesPage.vue')

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomePage,
  },
  {
    path: '/projects',
    name: 'projects',
    component: ProjectsPage,
  },
  {
    path: '/courses',
    name: 'courses',
    component: CoursesPage,
  },
  {
    path: '/personal',
    name: 'personal',
    component: PersonalPage,
  },
  {
    path: '/personal/travel',
    name: 'travel',
    component: TravelPage,
  },
  {
    path: '/personal/sports',
    name: 'sports',
    component: SportsPage,
  },
  {
    path: '/personal/photography',
    name: 'photography',
    component: PhotographyPage,
  },
  {
    path: '/personal/hobbies',
    name: 'hobbies',
    component: HobbiesPage,
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/',
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) return savedPosition
    if (to.hash) return { el: to.hash, behavior: 'smooth' }
    return { top: 0, behavior: 'smooth' }
  },
})

export default router
