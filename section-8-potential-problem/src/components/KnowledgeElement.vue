<template>
  <li>
    <h3>{{ topicName }}</h3>
    <p>{{ description }}</p>
    <button @click="select-topic">Learn More</button>
  </li>
</template>

<script>
export default {
  inject: ['select-topic'],
  props: ['id', 'topicName', 'description'],
  emits: ['select-topic'],
};
</script>