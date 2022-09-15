export default {
    namespaced: true,
    state: {
        names: [],
    },
    getters: {
        getRecettenameFromId: (state) => (id) => {
            let n = state.names.find(name => name.id == id)
            return n

        },
        names(state) {
            return state.names
        }
    },
    mutations: {
        setName(state, data) {
            state.names = data
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
                    let tname = [];
                    for (let index = 0; index < data.records.length; index++) {
                        const db_record = data.records[index];
                        tname.push({ id: db_record.id, name: db_record.fields.Name })
                    }
                    context.commit("setName", tname)
                })
        }
    },
    modules: {
    }
}