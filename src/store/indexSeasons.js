export default {
    namespaced: true,
    state: {
        saisons: []
    },
    getters: {
        getSaisonnameFromId: (state) => (id) => {

            if (state.saisons.length > 0) {
                console.log(state.saisons)
                console.log(id)
                let s = state.saisons.filter(saison => saison.id == id)
                return s[0]?.name
            }
            return null
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
                    let tsaison = [];
                    for (let index = 0; index < data.records.length; index++) {
                        const db_record = data.records[index];
                        tsaison.push({ id: db_record.id, name: db_record.fields.Name })
                    }
                    console.log("VUEX: Initialisation des saisons")
                    console.log(tsaison)
                    context.commit("setSaisons", tsaison)
                })
        }
    },
    modules: {

    }
}