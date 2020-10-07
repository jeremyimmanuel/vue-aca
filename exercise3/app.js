new Vue({
        el: '#exercise',
        data: {
            value: 0,
            timerisrunning: false
        },
        computed: {
            result: function() {
                if (this.value < 42) {
                    return "Not there yet!"
                } else {
                    return "The answer to everything!"
                }
            }
        },
        watch: {
            value: function(v) {
                console.log(v)
                vm = this
                if (this.timerisrunning) {
                    console.log("timer is already running!");
                } else {
                    vm.timerisrunning = true;
                    setTimeout(function() {
                        vm.value = 0
                        vm.timerisrunning = false
                    }, 2000)
                }
                
            }
        }
    });