
import HomePage from "../components/HomePage.vue";
import Profile from "../components/ProfilePage.vue";

import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes:[
    { path: '/', redirect:'/home'},
  { path: '/profile', component: Profile },
  { path: '/home', component: HomePage }
  ]
})

  // const router=VueRouter.createRouter({
  //   history: VueRouter.createWebHistory(),
   
  // })
  

export default router
