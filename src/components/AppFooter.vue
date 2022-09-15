<template lang="fr">
    <footer>
      <p><router-link to="/legalnotice">Mentions légales</router-link></p><p>
        <Router-Link to="/contact">Nous contacter</Router-Link></p><p>
            <Router-Link to="/about">A propos</Router-Link></p>
      <div id="scroll_to_top">
    <a href="#top"><img src="../assets/scroll-up.png" title="Retour en haut de page"/></a>
</div>
    </footer>
</template>

<script>
export default {
    name: "AppFooter",
}
</script>

<style scoped>
footer {
    display: flex;
    flex-direction: row;
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100vw;
    height: 8vh;
    background-color: whitesmoke;
    justify-content: center;
    align-items: center;
    border-top: 1px solid black;
    border-radius: 15px 15px 0 0;
}

p {
    padding: 2.5vh 1vw 0 1vw;
    text-decoration: underline;
}

a {
    text-decoration: none;
    color: black;
}

#scroll_to_top {
    position: absolute;
    margin-left: 92vw;
}

#scroll_to_top img {
    width: 2vw;
    height: 4vh;
}

#scroll_to_top:hover span {
    cursor: pointer;

}
</style>