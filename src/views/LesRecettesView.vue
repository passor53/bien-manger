<template>
    <div class="blockRecipeImage">
        <h1 class="nameRecipe">Les recettes</h1>
    </div>
    <div class="blockImage">
        <Router-Link to="/recipe">
            <div class="cell">
                Voir recette
            </div>
        </Router-Link>
        <div class="cell">
            Voir recette
        </div>
        <div class="cell">
            Voir recette
        </div>
        <div class="cell">
            Voir recette
        </div>
        <div class="cell">
            Voir recette
        </div>
        <div class="cell">
            Voir recette
        </div>
    </div>
</template>

<script>
export default {
}

</script>
<style scoped>
h1.nameRecipe {
    text-align: center;
    border-bottom: 1px solid whitesmoke;
}

.blockImage {
    display: flex;
    flex-wrap: wrap;
}

.cell {
    margin-left: 5em;
    margin-bottom: 5em;
    margin-top: 2em;
    width: 20em;
    height: 15em;
    border: 1px solid whitesmoke;
}


@media screen and (max-width: 1024px) {
    .cell {
        margin: 1em auto;
    }
}

.cell:hover {
    cursor: pointer;
}

#recipe {
    border-bottom: 1px solid whitesmoke;
}
</style>