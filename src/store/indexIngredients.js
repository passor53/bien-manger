export default {
    namespaced: true,
    state: {
        ingredients: []
    },
    getters: {
        getIngredientnameFromId: (state) => (name) => {
            let i = state.ingredients.filter(ingredient => ingredient.id == name)
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
            fetch("https://api.airtable.com/v0/appT0bvntx0RS1M8p/Recette_has_Ingredient", options)
                .then(data => data.json())
                .then(data => {
                    let tingredient = [];
                    for (let index = 0; index < data.records.length; index++) {
                        const db_record = data.records[index];
                        tingredient.push({ id: db_record.id, ingredient: db_record.fields.Ingredient[index] })
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