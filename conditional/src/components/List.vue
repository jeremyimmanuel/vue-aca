<template>
    <div>
        <ul>
            <li v-for="(ingredient, i) in ingredients" :key="ingredient">
                {{ ingredient }} ({{ i }})
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: "VueList",
    data: function() {
        return {
            ingredients: ['meat', 'fruit', 'cookies'],
            people: [
                {name: 'Jeremy', age: 22, color: 'blue'},
                {name: 'Jing', age: 21, color: 'purple'}
            ]
        }
    }
}
</script>

<style>

</style>