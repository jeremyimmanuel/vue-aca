const app = Vue.createApp({
  data() {
    return {
      currentUserInput: '',
      message: 'Vue is great!',
    };
  },
  beforeCreate () {
    console.log('before create!')
  },

  created () {
    console.log('created!')
  },

  mounted () {
    console.log('mounted!')
  },
  
  // This get called after data got updated and 
  beforeUpdate () {
    console.log(this.message)
    console.log('beforeUpdate!')
  },

  updated () {
    console.log('updated!')
  },

  beforeUnmount () {
    console.log('before unmount!')
  },

  unmounted () {
    console.log('unmounted')
  },


  methods: {
    saveInput(event) {
      this.currentUserInput = event.target.value;
    },
    setText() {
      this.message = this.$refs.userText.value
      // console.dir(this.$refs.userText.value)

    },
  },
});

app.mount('#app');

setTimeout(function () {
  app.unmount();
}, 3000)

// ...

// let message = 'Hello';

// let longMessage = message + ' World!'

// console.log(longMessage)

// message = 'Hello!!!!'

// console.log(longMessage)