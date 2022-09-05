<template>
    <div class="blockImage">
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

}
</script>

<style>
.blockImage {
    display: flex;
    flex-wrap: wrap;
}

.cell {

    margin-left: 6em;
    margin-bottom: 5em;
    margin-top: 8em;
    width: 20em;
    height: 15em;
    border: 1px solid whitesmoke;
}

@media screen and (max-width: 1024px) {
    .cell {
        margin: 1em auto;
    }
}
</style>