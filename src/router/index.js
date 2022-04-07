import { createRouter, createWebHistory } from 'vue-router'
import EventList from '@/views/EventList.vue'
import About from '@/views/About.vue'
import EventsDetails from '@/views/EventDetails.vue'

const routes = [
  {
    path: '/',
    name: 'EventList',
    component: EventList
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/event/:id',
    name: 'EventDetails',
    props: true,
    component: EventsDetails
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
