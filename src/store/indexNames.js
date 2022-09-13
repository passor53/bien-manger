export default {
    namespaced: true,
    state: {
        names: [],
    },
    getters: {
        getRecettenameFromId: (state) => (id) => {

            if (state.recette.length > 0) {
                console.log('status recette et id')
                console.log(state.recette)
                console.log(id)
                let r = state.recette.filter(recette => recette.id)
                return r[0]?.name
            }
            return null
        },
        recettes(state) {
            return state.recette
        }
    },
    mutations: {
        setRecette(state, data) {
            state.recette = data
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
                    context.commit("setRecette", trecette)
                })
        }
    },
    modules: {
    }
}