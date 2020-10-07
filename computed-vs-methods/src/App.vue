<template>
  <div id="app">
    <button v-on:click="counter++">Increase</button>
    <button v-on:click="counter--">Decrease</button>
    <button v-on:click="secondCounter++">Increase Second</button>
    <p>Counter: {{ counter }}</p>
    <p>Result: {{ output }}</p>
    
  </div>
</template>

<script>
export default {
  name: 'App',
  data: function() {
    return {
      counter: 0,
      secondCounter: 0
    }
  },
  // computed only gets called only when the property
  // it depends on gets updated
  // always runs synchronously
  computed: {
    output: function() {
      return this.counter > 5 ? 'Greater 5' : 'Smaller than 5'
    }
  },
  // methods gets called every time the DOM gets rendered
  methods: {
    result: function() {
      return this.counter > 5 ? 'Greater 5' : 'Smaller than 5'
    }
  },
  // Similar to computed but async
  // function will run when `key` changes
  // value here is the value of the key after the change
  watch: {
    counter: function(value) {
      console.log(value)
      var vm = this;
      setTimeout( function() {
        vm.counter = 0;
      }, 2000)
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
