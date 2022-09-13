export default {
    namespaced: true,
    state: {
        descriptions: [],
    },
    getters: {
        getDescriptionnameFromId: (state) => (id) => {

            if (state.description.length > 0) {
                console.log('status description et id')
                console.log(state.description)
                console.log(id)
                let d = state.description.filter(description => description.id)
                return d[0]?.name
            }
            return null
        },
        descriptions(state) {
            return state.description
        }
    },
    mutations: {
        setDescription(state, data) {
            state.description = data
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
                    console.log("VUEX: Initialisation des descriptions")
                    console.log(tdescription)
                    context.commit("setDescription", tdescription)
                })
        }
    },
    modules: {
    }
}