<template>
    <section>
        <form @submit.prevent="submitData">
            <div>
                <h4>enteredName: {{ enteredName }}</h4>
                <input 
                    type="text" 
                    placeholder="Your name"
                    v-model="enteredName"
                />
            </div>
            <div>
                <h4>enteredAge: {{ enteredAge }}</h4>
                <input 
                    type="number" 
                    placeholder="Your age"
                    v-model="enteredAge"
                />
            </div>
            <button>Set!</button>
        </form>
    </section>
</template>

<script>
export default {
    name: 'UserData',

    emits: {
        'set-data': function (name, age) {
            return name && age
        }
    },

    data () {
        return {
            enteredName: '',
            enteredAge: ''
        }
    },

    methods: {
        submitData () {
            this.$emit('set-data', this.enteredName, this.enteredAge)
        }
    }
}
</script>

<style>

section {
    border: 1px solid #ccc;
    border-radius: 10px;
    width: 50%;
    justify-content: space-between;
    margin: 2rem auto;
    padding-top: 3rem;
    padding-bottom: 3rem;
}

</style>
