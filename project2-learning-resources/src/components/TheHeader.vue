<template>
    <header>
        <h1>{{title}}</h1>
    </header>
</template>

<script>
export default {
    name: 'TheHeader',
    
    data () {
        return {
            title: 'RememberMe'
        }
    }
}
</script>

<style scoped>
header {
    background: maroon;
    align-items: center;
    display: flex;
    justify-content: center;
    font-size: 30px;
    font-weight: bold;
    height: 100px;
    color: white;
}
h1 {
    margin: 0;
}
</style>