<template>
    <h4>🚧👷 PAGE EN COURS DE CONSTRUCTION 👷🚧</h4>
    <div class="blockImage">
        <div class="cell">
            <div>
                <p>Entrée</p>
            </div>
        </div>
        <br>
        <div class="cell">
            <p>Plat</p>
        </div>
        <br>
        <div class="cell">
            <p>Dessert</p>
        </div>
    </div>
</template>
<script>
export default {

}
</script>

<style scoped>
.blockImage {
    display: flex;
    flex-wrap: wrap;
}

.cell {

    margin-left: 6em;
    margin-bottom: 5em;
    margin-top: 5em;
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

p {
    border-bottom: solid 1px white;
    background-color: black;
    /* opacity: 50%; */
    color: white;
}

h4 {
    font-size: 50px;
    color: rgb(255, 128, 0);
    margin-top: 5vh;
}
</style>