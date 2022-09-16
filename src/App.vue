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
  padding-bottom: 10vh;
  background-image: url(./assets/4633.jpg);
  background-repeat: repeat;
  background-size: cover;
  color: whitesmoke;
  font-family: "Avenir Next", "Avenir", sans-serif;
  text-align: center;
}

h1 {
  margin-top: 5vh;
  color: #c4fffb;
}

h2 {
  color: #aadbd8;
  font-weight: bold;
  ;
}

h4 {
  color: #87e7e1
}

ul {
  color: whitesmoke;
}

p {
  color: whitesmoke;
  padding: 0 3vw 0 3vw;
}
</style>