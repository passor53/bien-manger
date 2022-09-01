import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import RecipeView from '../views/RecetteView.vue'
import TipView from '../views/TipView.vue'
import MenuView from '../views/MenuView.vue'
import RecipesView from '../views/LesRecettesView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },

  {
    path: '/about',
    name: 'about',

    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },

  {
    path: '/recipes',
    name: 'recipes',
    component: RecipesView
  },

  {
    path: '/recipe',
    name: 'recipe',
    component: RecipeView
  },

  {
    path: '/tip',
    name: 'tip',
    component: TipView
  },

  {
    path: '/menu',
    name: 'menu',
    component: MenuView
  }
]

const router = createRouter({
  history: createWebHistory("/"), //process.env.BASE_URL
  routes
})

export default router
