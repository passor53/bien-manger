import { createStore } from 'vuex'

export default createStore({
  state: {
    count: 0,
    recipes: ["Salade", "Tomates", "Oignon"]
  },
  getters: {
    count(state) {
      return state.count
    },
    listRecipe(state) {
      return state.recipes.filter((elt) => elt.startsWith(''))
    }
  },
  mutations: {
    // addRecipe(state, element) {
    //   state.recipes.push(element)
    // }
  },
  actions: {
  },
  modules: {
  }
})