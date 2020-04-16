<template>
  <div id="app">
    <img alt="Vue logo" src="assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <h2>{{a}}</h2>
  </div>
</template>

<script>
  import { ref } from 'vue';
  import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  setup(){
    const a = ref(1);

    return {
      a
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
