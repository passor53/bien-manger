<template>
    <div class="blockRecipeImage">
        <h1 class="nameRecipe">Les recettes</h1>
        <div id="recipes">
            <ul class="recipeCell">
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
            </ul>
        </div>

        <!-- <div id="recipe">
            <p>
                <span v-for="(element, index) of $store.getters.listRecipe " :key="index">{{ element }}&nbsp;</span>
            </p>
            <input type="button" @click="addRecipe" value="Ajouter une recette">
            <input type="button" @click="goToPage" value="Retour">
        </div> -->
    </div>
    <footer id="footer">
        Pied de page
    </footer>
</template>

<script>
export default {
    methods: {
        goToPage() {
            this.$router.push('/')
        },
        // addRecipe() {
        //     this.$store.commit("addRecipe", "Poireau")
        // }
    }
}
</script>
<style scoped>
.block {
    display: flex;
    align-items: center;
}

.nameRecipe {
    border-bottom: 1px solid black;
}

#recipeCell {
    border-bottom: 1px solid black;
}

ul {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 20px;
    padding: 0.3em;
}

ul.recipeCell {
    width: 400px;
    height: 300px;
    margin: 0 auto;
}

ul.recipeCell li {
    margin: 0;
    padding: 0;
    list-style: none;
    background: whitesmoke;
    display: inline-block;
    cursor: grab;
    border: 2px solid rgb(0, 0, 0);
}

#recipes {
    padding-bottom: 15vh;
    padding-top: 10vh;
}

#footer {
    display: inline-block;
    border: 1px solid black;
    position: fixed;
    bottom: 0;
    align-items: center;
}
</style>