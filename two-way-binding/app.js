new Vue({
    el: '#app',
    data: {
        name: "Jeremy"
    },
    methods: {
        showAlert: function(event) {
            alert("Bruh!")
        },
        inputKeydown: function(event) {
            this.value = event.target.value
        }
    }
});