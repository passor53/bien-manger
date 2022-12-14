import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import RecipeView from '../views/RecetteView.vue'
import MenuView from '../views/MenuView.vue'
import RecipesView from '../views/LesRecettesView.vue'
import LoginView from '../views/LoginView.vue'
import ContactView from '../views/ContactView.vue'
import AboutView from '../views/AboutView.vue'
import LegalNoticeView from '../views/LegalNoticeView.vue'
import SeasonView from '../views/LesRecettesView.vue'
import SeasonsView from '../views/LesRecettesView.vue'
import TipView from '../views/TipView.vue'
import YouShallNotPass from '../views/YouShallNotPass.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },

  {
    path: '/login',
    name: 'login',
    component: LoginView
  },

  {
    path: '/register',
    name: 'register',
  },

  {
    path: '/about',
    name: 'about',
    component: AboutView,
  },

  {
    path: '/recipes',
    name: 'recipes',
    component: RecipesView
  },

  {
    path: '/recipe/:id',
    name: 'recipe',
    component: RecipeView
  },

  {
    path: '/seasons/',
    name: 'seasons',
    component: SeasonsView
  },

  {
    path: '/season/:id',
    name: 'season',
    component: SeasonView
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
  },

  {
    path: '/contact',
    name: 'contact',
    component: ContactView
  },
  {
    path: '/legalnotice',
    name: 'legalnotice',
    component: LegalNoticeView
  },

  {
    path: '/youshallnotpass',
    name: 'saxo',
    component: YouShallNotPass
  }
]

const router = createRouter({
  history: createWebHistory("/"), //process.env.BASE_URL
  routes
})

export default router
