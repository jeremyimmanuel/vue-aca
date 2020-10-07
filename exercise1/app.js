new Vue ({
    el: '#exercise',
    data: {
        name : 'Jeremy Tandjung',
        age : 22,
        image_link: 'https://www.anime-planet.com/images/characters/joseph-joestar-19369.jpg?t=1594498765'
    },
    methods: {
        mulByThree : function(number) {
            return number * 3;
        },
        getRandom : () => {
            return Math.random() * 100
        },
        onChangeInput : function(event) {
            this.name = event.target.value
        }
    }
})