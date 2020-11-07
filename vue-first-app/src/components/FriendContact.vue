<template>
  <li>
      <h2>{{ friend.name }}</h2>
      <button @click="toggleDetails">{{ detailsAreVisible ? 'Hide' : 'Show' }} details!</button>
      <ul v-if="detailsAreVisible">
          <li>
              <strong>Phone:</strong>
              {{ friend.phone }}
          </li>
          <li>
              <strong>Email:</strong>
              {{ friend.email }}
          </li>
      </ul>
  </li>
</template>

<script>
export default {
    name: 'FriendContact',
    
    data () {
        return {
            detailsAreVisible: true,
            friend:  {
                id: 'manuel',
                name: 'Manuel Lorenz',
                phone: '204 532 4329',
                email: 'manuel@localhost.com'
            },
        }
    },
    props: {
        friends: Object
    },

    methods: {
        toggleDetails () {
            this.detailsAreVisible = !this.detailsAreVisible
        }
    }
}
</script>

<style>


</style>