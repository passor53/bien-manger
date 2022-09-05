<template lang="fr">
  <div id="block-header">
    <AppHeader />
    <router-view />
    <AppFooter />
  </div>
</template>

<script>

// @ is an alias to /src
import AppHeader from '@/components/AppHeader.vue'
import AppFooter from '@/components/AppFooter.vue'

export default {
  name: 'App.vue',
  components: {
    AppHeader,
    AppFooter
  },
}
</script>

<style>
body {
  border-collapse: collapse;
  margin: 0;
  padding: 0;

  /* make it look decent enough */
  background: #370617;
  color: black;
  font-family: "Avenir Next", "Avenir", sans-serif;
  text-align: center;
}



h1 {
  margin-top: 5vh;
  color: #ffba08;
}

h2 {
  color: #ffba08;
  ;
}

ul {
  color: #f48c06;
}

p {
  color: #f48c06;
  padding: 0 3vw 0 3vw;
}
</style>