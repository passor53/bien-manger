import { createStore } from 'vuex'

export default createStore({
    state: {
        recettes: []
    },
    getters: {
        getRecettenameFromId: (state) => (Name) => {

            if (state.recettes.length > 0) {
                console.log(state.recettes)
                console.log(Name)
                let r = state.recettes.filter(recette => recette.Name)
                return r[0]?.name
            }
            return null
        },
        recettes(state) {
            return state.recettes
        }
    },
    mutations: {
        setRecettes(state, data) {
            state.recettes = data
        }
    },
    actions: {
        initializeRecettes(context) {
            var myHeaders = new Headers();
            myHeaders.append("Authorization", "Bearer keyaN8glHhIloJltf")
            let options = { headers: myHeaders }
            fetch("https://api.airtable.com/v0/appT0bvntx0RS1M8p/recette", options)
                .then(data => data.json())
                .then(data => {
                    let trecette = [];
                    for (let index = 0; index < data.records.length; index++) {
                        const db_record = data.records[index];
                        trecette.push({ id: db_record.id, name: db_record.fields.Name })
                    }
                    console.log("VUEX: Initialisation des recettes")
                    console.log(trecette)
                    context.commit("setRecettes", trecette)
                })
        }
    },
    modules: {
        // ingredients
        // etape
    }
})