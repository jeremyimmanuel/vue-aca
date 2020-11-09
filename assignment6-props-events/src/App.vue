<template>
  <active-user :username="user.name" :age="user.age" />

  <user-data @set-data="setActiveUser" />
</template>

<script>
import ActiveUser from "./components/ActiveUser";
import UserData from "./components/UserData";

export default {
  name: "App",

  data() {
    return {
      user: {
        name: "",
        age: "",
      },
    };
  },

  methods: {
    setActiveUser( name, age ) {
      console.log()
      
      this.user.name = name;
      this.user.age = age;
    },
  },

  components: {
    ActiveUser,
    UserData,
  },
};
</script>

<style>
html {
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
