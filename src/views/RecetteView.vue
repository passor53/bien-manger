<template>
    <div class="blockRecipeImage">
        <h1 class="namerecipe">nom recette</h1>
        <div id="list-recipe">
            <img class="mini-img" src="" alt="" />
            <div class="season">
                <p>Saison</p>
            </div>
            <div>
                <p>Description</p>
            </div>
            <div class="step" v-for="recette in recettes" :key="recette">etapes
                <Router-Link to="/recipe">{{ recette.fields.Etape }}</Router-Link>
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
            recettes: []
        }
    },
    created() {
        console.log("La naissance du component")
        var myHeaders = new Headers();
        myHeaders.append("Authorization", "Bearer keyaN8glHhIloJltf")
        let options = { headers: myHeaders }
        fetch("https://api.airtable.com/v0/appT0bvntx0RS1M8p/Recette?maxRecords=3&view=Grid%20view", options)
            .then(data => data.json())
            .then(data => this.recettes = data.records)

    },
}


</script>
<style scoped>
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