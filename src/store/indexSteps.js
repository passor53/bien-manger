export default {
    namespaced: true,
    state: {
        steps: [],
    },
    getters: {
        getStepsnameFromId: (state) => (id) => {

            if (state.steps.length > 0) {
                console.log('status steps')
                console.log(state.steps)
                console.log(id)
                let s = state.steps.filter(step => step.name)
                return s[0]?.name
            }
            return null
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
                        tstep.push({ id: db_record.id, name: db_record.fields.Name })
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