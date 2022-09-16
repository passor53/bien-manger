<template>
    <div class="blockRecipeImage">
        <h1 class="nameRecipe">Les Recettes</h1>
    </div>
    <div class="blockImage">
        <div class="cell" v-for="recette in recettes" :key="recette">
            <p class="name-recipe">

                <Router-Link :to="'/recipe/'+ recette.id">{{ recette.fields.Name }}</Router-Link>
            </p>
            <div class="season_recipe" v-for="saison in recette.fields.Saison" :key="saison">
                {{$store.getters['saisons/getSaisonnameFromId'](saison)}}


            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "LesRecettesView",
    data() {
        return {
            recettes: [],
        }
    },
    created() {
        this.$store.dispatch("saisons/initializeSaisons")

        let options = { headers: new Headers({ "Authorization": "Bearer keyaN8glHhIloJltf" }) }
        fetch("https://api.airtable.com/v0/appT0bvntx0RS1M8p/Recette/", options)
            .then(data => data.json())
            .then(data => this.recettes = data.records)
        fetch("https://api.airtable.com/v0/appT0bvntx0RS1M8p/Saison/", options)
            .then(data => data.json())
            .then(data => this.saisons = [data])
    },


}



</script>
<style scoped>
p a {
    text-decoration: none;
    color: #87e7e1;
}

a {
    text-decoration: none;
    color: black;
}

.name-recipe {
    border-radius: 19px 19px 0px 0px;
    border: solid 1px whitesmoke;
    background-color: black;
    opacity: 90%;
}

h1.nameRecipe {
    text-align: center;
}

.season_recipe {
    display: table-footer-group;
    border: solid 1px black;
    color: yellow;
    background-color: black;
    opacity: 85%;
}

.blockImage {
    display: flex;
    flex-wrap: wrap;
}

.cell {
    background-image: url(../assets/recette.jpg);
    margin-left: 5em;
    margin-bottom: 5em;
    margin-top: 2em;
    width: 20em;
    height: 15em;
    border: 1px solid whitesmoke;
    border-radius: 20px;
}


@media screen and (max-width: 1024px) {
    .cell {
        margin: 1em auto;
    }
}


#recipe {
    border-bottom: 1px solid whitesmoke;
}

p a:visited {
    font-style: italic;
}

p a:hover {
    text-decoration: underline;
}
</style>