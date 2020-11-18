<template>
  <div>
    <the-header></the-header>
    <button @click="setSelectedComp('active-goals')">Active Goals</button>
    <button @click="setSelectedComp('manage-goals')">Manage Goals</button>
    <!-- <badge-list></badge-list>
    <user-info
      :full-name="activeUser.name"
      :info-text="activeUser.description"
      :role="activeUser.role"
    ></user-info>
    <course-goals>
      <template #default="slotProps">
        <h2>{{slotProps.item}}{{slotProps['another-prop']}}</h2>
      </template>
    </course-goals> -->

    <!-- <active-goals></active-goals>
    <manage-goals></manage-goals> -->

    <keep-alive>
      <component 
      :is="selectedComp"
      title="Test"
     />
    </keep-alive>
    
  </div>
</template>

<script>
import TheHeader from './components/TheHeader.vue';
// import UserInfo from './components/UserInfo.vue';
// import BadgeList from './components/BadgeList.vue';
// import CourseGoals from './components/CourseGoals.vue';
import ActiveGoals from './components/ActiveGoals';
import ManageGoals from './components/ManageGoals';

export default {
  data() {
    return {
      selectedComp: 'active-user',
      activeUser: {
        name: 'Maximilian Schwarzmüller',
        description: 'Site owner and admin',
        role: 'admin',
      },
    };
  },

  methods: {
    setSelectedComp(cmp) {
      this.selectedComp = cmp
    }
  },

  components: {
    // BadgeList,
    TheHeader,
    // UserInfo,
    // CourseGoals,
    ActiveGoals,
    ManageGoals
  }
};
</script>

<style>
html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>