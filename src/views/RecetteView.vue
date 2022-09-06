<template>
    <div class="blockRecipeImage">
        <h1 class="nameRecipe">Nom de la recette</h1>
        <div id="recipes">
            <ul class="recipeCell">
                <li>Image</li>
                <li v-for="recette in recettes" :key="recette">
                    <Router-Link to="/recipe">Saison {{ recette.fields.Saison }}</Router-Link>
                </li>
                <li>Description</li>
                <li>les étapes</li>
            </ul>
        </div>
        <div id="recipe">
            <p>
                <span v-for="(element, index) of $store.getters.listRecipe " :key="index">{{ element }}&nbsp;</span>
            </p>
            <!-- <input type="button" @click="addRecipe" value="Ajouter une recette"> -->
            <input type="button" @click="goToPage" value="Retour">
        </div>
    </div>
    <div id="step">
        <h3>ETAPE</h3>
    </div>
</template>

<script>
export default {

}


</script>
<style scoped>
.nameRecipe {
    border-bottom: 1px solid black;
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

#recipe {
    border-bottom: 1px solid black;
}

#footer {
    border: 1px solid black;
    padding-bottom: 35%;
}
</style>