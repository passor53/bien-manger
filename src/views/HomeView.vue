<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/Bien-Manger.jpg">
    <HelloWorld msg="Bienvenu sur notre site : Bien-Manger" />
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
img {
  width: 75vw;
  height: 45vh;
}

.home {
  margin-top: 5vh;
  text-align: center;
}


</style>