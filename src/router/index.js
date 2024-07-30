import { createRouter, createWebHistory } from 'vue-router'
import MainLayout from '../layouts/MainLayout.vue'
import Home from '../views/Home.vue'
import Help from '../views/Help.vue'
import About from '../views/About.vue'
import Roadmap from '../views/Roadmap.vue'
import Html from '../edu/Html.vue'
import Css from '../edu/Css.vue'
import Javascript from '../edu/Javascript.vue'
import Bootstrap from '../edu/Bootstrap.vue'

const routes = [
  {
    path: '/',
    component: MainLayout,
    children: [
      { path: '/', component: Home },
      { path: 'help', component: Help },
      { path: 'about', component: About },
      { path: 'roadmap', component: Roadmap },
      { path: 'html', component: Html },
      { path: 'css', component: Css },
      { path: 'js', component: Javascript },
      { path: 'bootstrap', component: Bootstrap },
    ]
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  linkActiveClass:'active',
  linkExactActiveClass:'active'
})

export default router
