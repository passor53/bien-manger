export default {
    namespaced: true,
    state: {
        ingredients: []
    },
    getters: {
        getIngredientnameFromId: (state) => (id) => {

            if (state.ingredients.length > 0) {
                console.log(state.ingredients)
                console.log(id)
                let i = state.ingredients.filter(ingredient => ingredient.id == id)
                return i[0]?.name
            }
            return null
        },
        ingredients(state) {
            return state.ingredients
        }
    },
    mutations: {
        setIngredients(state, data) {
            state.ingredients = data
        }
    },
    actions: {
        initializeIngredients(context) {
            var myHeaders = new Headers();
            myHeaders.append("Authorization", "Bearer keyaN8glHhIloJltf")
            let options = { headers: myHeaders }
            fetch("https://api.airtable.com/v0/appT0bvntx0RS1M8p/Ingredient", options)
                .then(data => data.json())
                .then(data => {
                    let tingredient = [];
                    for (let index = 0; index < data.records.length; index++) {
                        const db_record = data.records[index];
                        tingredient.push({ id: db_record.id, name: db_record.fields.Name })
                    }
                    console.log("VUEX: Initialisation des ingredients")
                    console.log(tingredient)
                    context.commit("setIngredients", tingredient)
                })
        }
    },
    modules: {

    }
}