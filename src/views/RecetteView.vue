<template>
    <div class="blockRecipeImage">
        <h1 class="nameRecipe">Nom Recette</h1>
        <div id="image">
            <h3>IMAGE DE LA RECETTE</h3>
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