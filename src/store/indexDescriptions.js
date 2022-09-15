export default {
    namespaced: true,
    state: {
        descriptions: [],
    },
    getters: {
        getDescriptionnameFromId: (state) => (id) => {
            let d = state.descriptions.find(name => name.id == id)
            return d

        },
    },
    descriptions(state) {
        return state.descriptions
    },
    mutations: {
        setDescription(state, data) {
            state.descriptions = data
        }
    },
    actions: {
        initializeDescriptions(context) {
            var myHeaders = new Headers();
            myHeaders.append("Authorization", "Bearer keyaN8glHhIloJltf")
            let options = { headers: myHeaders }
            fetch("https://api.airtable.com/v0/appT0bvntx0RS1M8p/recette", options)
                .then(data => data.json())
                .then(data => {
                    let tdescription = [];
                    for (let index = 0; index < data.records.length; index++) {
                        const db_record = data.records[index];
                        tdescription.push({ id: db_record.id, name: db_record.fields.Description })
                    }
                    context.commit("setDescription", tdescription)
                })
        }
    },
    modules: {
    }
}