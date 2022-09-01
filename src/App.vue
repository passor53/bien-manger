<template lang="fr">
  <div id="block-header">
    <AppHeader />
  </div>
</template>

<script>

// @ is an alias to /src
import AppHeader from '@/components/AppHeader.vue'

export default {
  name: 'App.vue',
  components: {
    AppHeader
  }
}
</script>

<style>
body {
  border-collapse: collapse;
  margin: 0;
  padding: 0;

  /* make it look decent enough */
  background: #1c3144;
  color: black;
  font-family: "Avenir Next", "Avenir", sans-serif;
}

#block-header {
  border: solid 1px blue;
}

h1 {
  color: #7ea16b;
}
</style>