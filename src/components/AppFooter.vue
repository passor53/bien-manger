<template lang="fr">
    <footer>
      <p><router-link to="/legalnotice">Mentions Légales</router-link></p><p><Router-Link to="/contact">Nous Contacter</Router-Link></p><p><Router-Link to="/about">A Propos</Router-Link></p>
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