<template>
    <div class="blockRecipeImage">
        <h1 class="nameRecipe">Les recettes</h1>
    </div>
    <div class="blockImage">
        <div class="cell" v-for="recette in recettes" :key="recette">
            <Router-Link to="/recipe">Voir recette de {{ recette.fields.Name }}</Router-Link>
        </div>
        <br>
        <div class="cell">


        </div>
        <br>
        <div class="cell">

        </div>
        <br>
        <div class="cell">

        </div>
        <br>
        <div class="cell">

        </div>
        <br>
        <div class="cell">

        </div>
    </div>
</template>

<script>
export default {
    name: "LesRecettesView",
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
    }
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

/* 
.cell2 {
    margin-left: 50em;
    width: 20em;
    height: 15em;
    border: 1px solid whitesmoke;
}

.cell3 {
    margin-left: 5em;
    width: 20em;
    height: 15em;
    border: 1px solid whitesmoke;
}

.cell4 {
    margin-left: 50em;
    width: 20em;
    height: 15em;
    border: 1px solid whitesmoke;
}

.cell5 {
    margin-left: 5em;
    width: 20em;
    height: 15em;
    border: 1px solid whitesmoke;
}

.cell6 {
    margin-left: 50em;
    width: 20em;
    height: 15em;
    border: 1px solid whitesmoke;
} */


#recipe {
    border-bottom: 1px solid whitesmoke;
}
</style>