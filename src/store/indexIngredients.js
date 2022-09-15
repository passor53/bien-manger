export default {
    namespaced: true,
    state: {
        ingredients: [],
        images: []
    },
    getters: {

        getFromRelationalLink: (state) => (relation_id) => {
            return state.ingredients.find(ingredient => ingredient.id_relations?.includes(relation_id))
        },

        getFromImage: (state) => (image_id) => {
            return state.images.find(image => image.url?.includes(image_id))
        }
    },
    mutations: {
        setIngredients(state, data) {
            state.ingredients = data
        },

        setImages(state, data) {
            state.images = data
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
                        tingredient.push({ id_ingredient: db_record.id, id_relations: db_record.fields.Recette_has_Ingredient, name: db_record.fields.Name })
                    }

                    context.commit("setIngredients", tingredient)
                })


            /*fetch("https://api.airtable.com/v0/appT0bvntx0RS1M8p/Image", options)
                 .then(data => data.json())
                 .then(data => {
                     let timage = [];
                     for (let index = 0; index < data.records.length; index++) {
                         const db_record = data.records[index];
                         timage.push({ id_image: db_record.id, url_image: db_record.fields.url })
                     }
                     console.log("VUEX: Initialisation des images")
                     console.log(timage)
                     context.commit("setImages", timage)
                 })*/
        }
    },
    modules: {

    }
}