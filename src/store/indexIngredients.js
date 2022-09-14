export default {
    namespaced: true,
    state: {
        ingredients: []
    },
    getters: {
        getIngredientnameFromId: (state) => (name) => {
            let i = state.ingredients.find(ingredient => ingredient.id == name)
            console.log('etat de i')
            console.log(i)
            return i
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
            fetch("https://api.airtable.com/v0/appT0bvntx0RS1M8p/Recette", options)
                .then(data => data.json())
                .then(data => {
                    let tingredient = [];
                    for (let index = 0; index < data.records.length; index++) {
                        const db_record = data.records[index];
                        tingredient.push({ id_recette: db_record.id, id_ingredient: db_record.fields.Recette_has_Ingredient, name: db_record.fields.Name })
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