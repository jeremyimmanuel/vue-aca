new Vue({
    el: '#exercise',
    data: {
        value: ''
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