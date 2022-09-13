export default {
    namespaced: true,
    state: {
        steps: [],

    },
    getters: {
        getFromId: (state) => (id) => {
            let s = state.steps.find(step => step.id == id)
            return s
        },
        steps(state) {
            return state.steps
        }
    },
    mutations: {
        setStep(state, data) {
            state.steps = data
        }
    },
    actions: {
        initializeSteps(context) {
            var myHeaders = new Headers();
            myHeaders.append("Authorization", "Bearer keyaN8glHhIloJltf")
            let options = { headers: myHeaders }
            fetch("https://api.airtable.com/v0/appT0bvntx0RS1M8p/Etape", options)
                .then(data => data.json())
                .then(data => {
                    let tstep = [];
                    for (let index = 0; index < data.records.length; index++) {
                        const db_record = data.records[index];
                        tstep.push({ id: db_record.id, name: db_record.fields.Name, description: db_record.fields.Description })
                    }
                    console.log("VUEX: Initialisation des étapes")
                    console.log(tstep)
                    context.commit("setStep", tstep)
                })
        }
    },
    modules: {
    }
}