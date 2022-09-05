<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/Bien-Manger.jpg">
    <HelloWorld msg="Le site de référence pour partager ses recettes" />
    <Router-Link to="/login">login</Router-Link> <!-- | -->
  </div>

</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld
  }
}
</script>

<style scoped>
.home {
  margin-top: 5vh;
  text-align: center;
}
</style>