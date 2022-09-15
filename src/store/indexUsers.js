export default {
    namespaced: true,
    state: {
        users: []
    },
    getters: {
        getUsersFromId: (state) => (id) => {
            let s = state.users.find(user => user.id == id)
            console.log("zgnzog")
            return s
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
                        tuser.push({ id: db_record.id, name: db_record.fields.Name, utilisateur: db_record.fields.Utilisateur })
                    }
                    context.commit("setUsers", tuser)
                })
        }
    },
    modules: {

    }
}