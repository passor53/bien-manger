<template>
    <div class="blockRecipeImage">
        <div class="conteneur-h1-recipes">
            <div class="conteneur-img-recipe">
                <img class="enseigne" alt="enseigne avec le titre a l'interieur" src="../assets/enseigne.png" />
            </div>
            <h1 class="nameRecipe" v-for="recette in recettes" :key="recette">
                {{$store.getters['names/getRecettenameFromId'](recette.id)?.name}}
            </h1>
        </div>
        <div class="block-img-buttons">
            <img class="img-recipe" alt="Image de la recette" src="../assets/recette.jpg" />
            <div class="Buttons-del-put">
                <div v-for="(index) in recettes" :key="index">
                    <input class="button" type="button" value="Supprimer" @click="deleted(index)" />
                </div>
                <input class="button" type="button" value="Modifier" />
            </div>
        </div>
        <div id="list-recipe" v-for="recette in recettes" :key="recette">

            <div class="block-season-description">
                <div class="description" v-for="description in recettes" :key="description">
                    <h2>Description</h2>
                    {{$store.getters['descriptions/getDescriptionnameFromId'](description.id)?.name}}
                </div>
                <div class="season">
                    <h2 class="title-saison">Saison</h2>
                    <div class="season_recipe" v-for="saison in recette.fields.Saison" :key="saison">
                        {{$store.getters['saisons/getSaisonnameFromId'](saison)}}
                    </div>
                </div>
            </div>
            <div class="ingredients">
                <h2>Ingredients</h2>
                <div class="ingredient" v-for="relation_id in recette.fields.Recette_has_Ingredient" :key="relation_id">
                    {{$store.getters['ingredients/getFromRelationalLink'](relation_id).name }}
                </div>
            </div>

            <div class="steps">
                <h2>Etapes</h2>
                <div class="step" v-for="step in recette.fields.Etape" :key="step">
                    <b>{{$store.getters['steps/getFromId'](step)?.name}}</b>
                    <br>
                    {{$store.getters['steps/getFromId'](step)?.description}}

                </div>
            </div>
            <div id="recipe-return">
                <input type="button" value="Retour" onclick="history.go(-1)">
            </div>
        </div>

    </div>

</template>

<script>

export default {
    name: "LaRecetteView",
    data() {
        return {
            recettes: [],
            ingredients: [],

        }
    },
    created() {
        this.$store.dispatch("saisons/initializeSaisons")
        this.$store.dispatch('names/initializeRecettes')
        this.$store.dispatch('steps/initializeSteps')
        this.$store.dispatch('descriptions/initializeDescriptions')
        this.$store.dispatch('ingredients/initializeIngredients')

        console.log("La naissance du component")
        var myHeaders = new Headers();
        myHeaders.append("Authorization", "Bearer keyaN8glHhIloJltf")
        let id_de_la_recette = this.$route.params.id
        let options = { headers: myHeaders }
        fetch("https://api.airtable.com/v0/appT0bvntx0RS1M8p/Recette/" + id_de_la_recette, options)
            .then(data => data.json())
            .then(data => this.recettes = [data])

    },
    methods: {
        deleted(index) {
            var myHeaders = new Headers();
            myHeaders.append("Authorization", "Bearer keyaN8glHhIloJltf")
            let id_de_la_recette = this.$route.params.id
            let response = confirm("??tes-vous s??r(e) de vouloir supprimer la recette ?");
            let options = { headers: myHeaders, method: 'DELETE' }
            fetch("https://api.airtable.com/v0/appT0bvntx0RS1M8p/Recette/" + id_de_la_recette, options)
                .then(data => data.json())
                .then(data => this.recettes = [data])
            console.log(response)
            this.recettes.splice(index, 1)
            this.$router.push({ path: '/recipes' })
        }

    }
}

</script>
<style scoped>
.conteneur-h1-recipes {
    z-index: 1;
}

.enseigne {
    width: 50vw;
    z-index: 2;
}

.nameRecipe {
    z-index: 3;
    font-size: 100%;
    text-decoration: underline;
}

.img-recipe {
    border-radius: 5vw;
    border: solid 1px whitesmoke;
    box-shadow: 2px 1px rgb(49, 49, 49);
    width: 150px;
    height: 150px;
}

.block-img-buttons {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    margin: 2vh 0 2vh 0;
}

.Buttons-del-put {
    display: flex;
    flex-direction: column;
}

.button {
    border-radius: 4vw;
    margin: 1vh 0 1vh 0;
}

.block-season-description {
    display: flex;
    flex-direction: row;
    justify-content: center;
    border-radius: 5vw;
    margin: 4vh 2vw 4vh 2vw;

}

.season {
    border: solid 1px rgb(44, 43, 43);
    border-radius: 4vw 4vw 2vw 2vw;
    background-color: rgb(44, 43, 43);
    box-shadow: 2px 1px coral;
    color: yellow;
    padding: 1vh 2vw 1vh 2vw;
    margin-right: 2vw;
    padding-top: 2.5vh;
}

h2 {
    font-size: large;
    color: crimson;
}

h1 a {
    color: #87e7e1;
}

a {
    text-decoration: none;
    color: whitesmoke;
}

.title-saison {
    font-size: x-large;
}

.description {
    background-color: rgb(255, 249, 212);
    border: solid 1px rgb(255, 249, 212);
    color: black;
    border-radius: 5vw 5vw 2vw 2vw;
    margin-right: 2vw;
    padding: 1vh 2vw 1vh 2vw;
    box-shadow: 2px 1px coral;
    margin-left: 2vw;
    margin-right: 5vw;
}

.ingredients {
    background-image: url(../assets/feuille.png);
    background-size: 100%;
    background-repeat: no-repeat;
    display: flex;
    flex-direction: column;
    background-color: transparent;
    color: black;
    margin: 2vh 2vw 2vh 2vw;
    padding: 17vh 4vw 10vh 4vw;
}

@media screen and (max-width: 733px) {
    .ingredients {
        background-size: 85%;
        background-position: center;
    }
}

@media screen and (width: 900px) {
    .ingredients {
        background-size: 70%;
        background-position: center;
    }
}

@media screen and (width: 1266px) {
    .ingredients {
        background-size: 80%;
        background-position: center;
    }
}

@media screen and (width: 1366px) {
    .ingredients {
        background-size: 30%;
        background-position: center;
    }

    .img-recipe {
        border-radius: 3vw;
    }
}

.steps {
    background-image: url(../assets/tableau-cuisine.jpg);
    background-repeat: no-repeat;
    background-size: 100% 100%;
    padding: 6vh 2vw 5vh 2vw;
    border: solid 1px whitesmoke;
    margin: 4vh 4vw 4vh 4vw;
}

.step {
    border: dashed 1px whitesmoke;
    border-left: none;
    border-right: none;
    padding: 1vh 2vw 1vh 2vw;
    margin: 0 2vw 0 2vw;
}

ul {
    list-style-type: none;
}

#recipeCell {
    border-bottom: 1px solid black;
}

#image {
    border-bottom: 1px solid black;
}

#step {

    align-content: center;
    padding-bottom: 100%;
}

#footer {
    border: 1px solid black;
    padding-bottom: 35%;
}
</style>