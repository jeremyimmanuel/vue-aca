<template>
  <div id="app">
    <p v-if="show">You can see me!</p>
    <p v-else>Now you see me!</p>

    <template v-if="show">
      <h1>Template</h1>
      <p>Inside a template</p>
    </template>
    <p v-show="show">Do you see me?</p>

    <button @click="show = !show">switch</button>
    <vue-list/>
  </div>
</template>

<script>
import VueList from "./components/List"

export default {
  name: 'App',
  components: {
    VueList
  },

  data: function() {
    return {
      show: true
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
