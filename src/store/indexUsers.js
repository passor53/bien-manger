export default {
    namespaced: true,
    state: {
        utilisateurs: []
    },
    getters: {
        getUsersFromId: (state) => (id) => {

            if (state.users.length > 0) {
                console.log(state.users)
                console.log(id)
                let s = state.users.filter(user => user.id == id)
                return s[0]?.name
            }
            return null
        },
        users(state) {
            return state.users
        }
    },
    mutations: {
        setUsers(state, data) {
            state.users = data
        }
    },
    actions: {
        initializeUsers(context) {
            var myHeaders = new Headers();
            myHeaders.append("Authorization", "Bearer keyaN8glHhIloJltf")
            let options = { headers: myHeaders }
            fetch("https://api.airtable.com/v0/appT0bvntx0RS1M8p/Utilisateur", options)
                .then(data => data.json())
                .then(data => {
                    let tuser = [];
                    for (let index = 0; index < data.records.length; index++) {
                        const db_record = data.records[index];
                        tsaison.push({ id: db_record.id, name: db_record.fields.Name })
                    }
                    console.log("VUEX: Initialisation des utilisateurs")
                    console.log(tuser)
                    context.commit("setUsers", tuser)
                })
        }
    },
    modules: {

    }
}