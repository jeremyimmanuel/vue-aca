<template>
    <li>
        <div>
            <header>
                <h3>{{ resource.title }}</h3>
                <button>Delete</button>
            </header>
        </div>
        <p>{{ resource.description }}</p>
        <nav>
            <a :href="resource.link">View Resource</a>
        </nav>
    </li>
</template>

<script>
export default {
    name: 'LearningResource',
    props: {
        resource: {
            type: Object,
            required: true,
            validator: (r) => {
                return r.id && 
                        r.title && 
                        r.description &&
                        r.link
            }
        }
    }
    
}
</script>

<style lang="scss" scoped>

</style>
