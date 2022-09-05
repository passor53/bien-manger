<template lang="fr">
    <footer>
      <p><router-link to="/legalnotice">Mentions légales</router-link></p><p><Router-Link to="/contact">Nous contacter</Router-Link></p><p><Router-Link to="/about">A propos</Router-Link></p>
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
    background-color: #6a040f;
    justify-content: center;
    align-items: center;
}

p {
    padding: 2.5vh 1vw 0 1vw;
}
</style>