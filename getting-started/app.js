new Vue({
    el: '#app',
    data : {
        title : 'Hello World',
        link : 'https://google.com',
        counter : 0,
        step : 1,
        coord : {
            x : 0,
            y : 0
        },
    },
methods : {
    changeTitle : function(event) {
        this.title = event.target.value
        this.step = parseInt(event.target.value)
    },
    increase : function(step, event) {
        this.counter += step;
        this.title = event.clientX
        console.log(event.clientX)
    },
    updateCoordinate : function(event) {
        
        this.coord.x = event.clientX;
        this.coord.y = event.clientY;
    },
    dummy: function(event) {
        event.stopPropagation();
    },
    alertMe: function(event) {
        alert('Alert!')
    }
}
})