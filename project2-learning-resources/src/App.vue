<template>
    <the-header />
    <ul>
        <learning-resource 
            v-for="resource in storedResources" 
            :key="resource.id"
            :resource="resource"
        >
        </learning-resource>
    </ul>
</template>

<script>
import TheHeader from './components/TheHeader'
import LearningResource from './components/learning-resources/LearningResource'

export default {
    data () {
        return {
            lol: {
                id: 'something',
                title: 22
            },
            storedResources: [
                {
                    id: 'official-guide',
                    title: 'Official Guide',
                    description: 'The official Vue.js documentation',
                    link: 'https://vuejs.org'
                },
                {
                    id: 'google',
                    title: 'Google',
                    description: 'Learn to google',
                    link: 'https://google.com'
                }
            ]
        }
    },

    components: {
        LearningResource,
        TheHeader
    }
}   
</script>

<style>
html {
    font-family: Arial, Helvetica, sans-serif;
}
body {
    margin: 0;
}
</style>