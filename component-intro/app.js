const app = Vue.createApp({
    data () {
        return {
            friends: [
                {
                    id: 'manuel',
                    name: 'Manuel Lorenz',
                    phone: '206 343 2342',
                    email: 'manuel@localhost.com'
                },
                {
                    id: 'julie',
                    name: 'Julie Jones',
                    phone: '425 192 4728',
                    email: 'julie@localhost.com'
                },
                
            ]
        }
    }

})

app.component('friend-contact', {
    template: `
    <li>
        <h2>{{ friend.name }}</h2>
        <button @click="detailsAreVisible = !detailsAreVisible">{{ detailsAreVisible ? 'Hide' : 'Show' }} Details</button>
        <ul v-if="detailsAreVisible">
            <li><strong>Phone:</strong>{{ friend.phone }}</li>
            <li><strong>Email:</strong>{{ friend.email }}</li>
        </ul>
    </li
    `,

    data () {
        return {
            detailsAreVisible: false,
            friend: {
                id: 'manuel',
                name: 'Manuel Lorenz',
                phone: '206 343 2342',
                email: 'manuel@localhost.com'
            }
        }
    },

    props:  

    methods: {
        toggleDetails () {
            this.detailsAreVisible = !this.detailsAreVisible
        }
    }
})

app.mount('#app')