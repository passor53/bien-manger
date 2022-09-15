import { createStore } from 'vuex'
import names from './indexNames'
import steps from './indexSteps'
import saisons from './indexSeasons'
import descriptions from './indexDescriptions'
import ingredients from './indexIngredients'
import users from './indexUsers'
export default createStore({
  state: {

  },
  getters: {

  },
  mutations: {

  },
  actions: {

  },
  modules: {
    names,
    steps,
    saisons,
    descriptions,
    ingredients,
    users
  }
})