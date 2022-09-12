<template>
    <div class="blockRecipeImage">
        <h1 class="nameRecipe">nom recette</h1>

        <div class="season">
            <h2>Saison</h2>

        </div>

        <div class="description">
            <h2>Description</h2>
        </div>

        <div class="step">
            <h2>Etapes</h2>

        </div>
        <div id="recipe-return">
            <input type="button" value="Retour" onclick="history.go(-1)">
        </div>

    </div>

</template>

<script>
export default {
    name: "LaRecetteView",
    data() {
        return {
            recette: []
        }
    },
    created() {

        var myHeaders = new Headers();
        myHeaders.append("Authorization", "Bearer keyaN8glHhIloJltf")
        let id_de_la_recette = this.$route.params.id
        let options = { headers: myHeaders }
        fetch("https://api.airtable.com/v0/appT0bvntx0RS1M8p/Recette/" + id_de_la_recette, options)
            .then(data => data.json())
            .then(data => this.recette = [data])


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