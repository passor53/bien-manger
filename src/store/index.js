import { createStore } from 'vuex'

export default createStore({
  state: {
    saisons: []
  },
  getters: {
    getSaisonnameFromId(id) {
      return this.saisons.filter(saison => saison.id == id)[0].name
    },
    saisons(state) {
      return state.saisons
    }
  },
  mutations: {
    setSaisons(state, data) {
      state.saisons = data
    }
  },
  actions: {
    initializeSaisons(context) {
      var myHeaders = new Headers();
      myHeaders.append("Authorization", "Bearer keyaN8glHhIloJltf")
      let options = { headers: myHeaders }
      fetch("https://api.airtable.com/v0/appT0bvntx0RS1M8p/Saison", options)
        .then(data => data.json())
        .then(data => {
          let t16 = [];
          for (let index = 0; index < data.records.length; index++) {
            const db_record = data.records[index];
            t16.push({ id: db_record.id, name: db_record.fields.Name })
          }
          context.commit("setSaisons", t16)
        })
    }
  },
  modules: {
    // ingredients
    // etape
  }
})