<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/bien-manger.png">
    <HelloWorld msg="Le site de référence pour partager ses recettes" />
  </div>

</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  created() {
  },
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

img {
  border-radius: 10px;
}
</style>