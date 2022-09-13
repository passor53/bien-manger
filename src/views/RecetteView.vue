<template>
    <div class="blockRecipeImage">
        <h1 class="nameRecipe" v-for="recette in recettes" :key="recette">
            {{$store.getters['names/getRecettenameFromId'](name)}}
        </h1>
        <h2>{{$store.getters['names/toto']}}</h2>
        <div id="list-recipe" v-for="recette in recettes" :key="recette">
            <img class="mini-img" src="" alt="" />

            <div class="season">
                <h2>Saison</h2>
                <div class="season_recipe" v-for="saison in recette.fields.Saison" :key="saison">
                    {{$store.getters['saisons/getSaisonnameFromId'](saison)}}
                </div>

            </div>
            <div class="description">
                <h2>Description</h2>
                <Router-Link to="/recipe">{{ recette.fields.Description }}</Router-Link>
            </div>
            <div class="step">
                <h2>Etapes</h2>
                <Router-link to="/step">{{ recette.fields.Etape }}</Router-link>
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
        }
    },
    created() {
        this.$store.dispatch("saisons/initializeSaisons")
        this.$store.dispatch('names/initializeRecettes')


        console.log("La naissance du component")
        var myHeaders = new Headers();
        myHeaders.append("Authorization", "Bearer keyaN8glHhIloJltf")
        let id_de_la_recette = this.$route.params.id
        let options = { headers: myHeaders }
        fetch("https://api.airtable.com/v0/appT0bvntx0RS1M8p/Recette/" + id_de_la_recette, options)
            .then(data => data.json())
            .then(data => this.recettes = [data])
    }
}
</script>
<style scoped>
h2 {
    font-size: large;
}

h1 a {
    color: #87e7e1;
}

a {
    text-decoration: none;
    color: whitesmoke;
}

p {
    color: whitesmoke;
}

.nameRecipe {
    border-bottom: 1px solid black;
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
    position: relative;
    align-content: center;
    padding-bottom: 100%;
}

#recipe-return {
    border-bottom: 1px solid black;
}

#footer {
    border: 1px solid black;
    padding-bottom: 35%;
}
</style>