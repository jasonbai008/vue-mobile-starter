<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">    
    <HelloWorld msg="Vue2-Mobile-Starter"/>
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

<style scoped lang="less">
img {
  width: 200px;
  margin-top: 20vh;
}
</style>
