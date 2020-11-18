<template>
    <div>
        <ul>
            <li v-for="goal in goals" :key='goal'>
                <slot :item="goal" another-prop="Bruh"></slot>
            </li>
        </ul>        
    </div>
</template>

<script>
    export default {
        name: 'CourseGoals',
        data () {
            return {
                goals: [
                    'Finish the course',
                    'Learn vue'
                ]
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>