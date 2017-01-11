<template>
  <div id="app">
    <div class="appTitle">
      <h1>Welcom to </br> Boop !</h1>
      <p>{{ msg}}</p>
      <router-link to="/home">Go to Home</router-link>
    </div>

  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>
<style lang="scss">
@import "~style/home";
@import "~style/globals";
</style>
