import { createRouter, createWebHistory } from 'vue-router'
import home from "../views/home/index.vue"
import tasks from "../views/tasks/index.vue"
import addtask from "../views/tasks/add.vue"
import edittask from "../views/tasks/edit.vue"
import NotFound from "../views/not-found.vue"
import TheDefaultLayout from "../views/layout/layout.vue"
import TheCustomLayout from "../views/layout/custom-navbar.vue"
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: home,
      meta: {
        layout: TheDefaultLayout
      }
    },
    {
      path: '/tasks',
      name: 'tasks',
      component: tasks,
      meta: {
        layout: TheDefaultLayout
      }
    },
    {
      path: '/tasks/add',
      name: 'addtask',
      component: addtask,
      meta: {
        layout: TheDefaultLayout
      }
    },
    {
      path: '/tasks/edit/:id',
      name: 'edittask',
      component: edittask,
      meta: {
        layout: TheDefaultLayout
      }
    },
    {
      path: "/:catchAll(.*)",
      name: "NotFound",
      component: NotFound,
      meta: {
        layout: TheDefaultLayout
      }
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth',
      }
    } else if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  },
})


export default router
