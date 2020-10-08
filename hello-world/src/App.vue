<template>
  <div id="app">
    <div class="demo"
        @click="attachedRed = !attachedRed"
        :class="{ red: attachedRed }"></div>
    <div class="demo green"></div>
    <div class="demo blue"></div>
    
  </div>
</template>

<script>


export default {
  name: 'App',
  data: function() {
    return {
      attachedRed: false,
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

.demo {
  width: 100px;
  height: 100px;
  background-color: gray;
  display: inline-block;
  margin: 10px;
}

.red {
  background-color: red;
}

.green {
  background-color: green;
}

.blue {
  background-color: blue;
}
</style>
