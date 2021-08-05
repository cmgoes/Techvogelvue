<template>
  <v-app :style="image" style="background-size: 100% auto">
    <UserInfo />
    <Jobs />
    <div class="flex flex-col lg:flex-row p-4 bg-white">
      <div class="w-full mr-8 lg:w-3/10">
        <Experience />
      </div>
      <div class=" w-full lg:w-7/10">
       <ProfileEdit />
      </div>
    </div>
  </v-app>
</template>

<script>

import UserInfo from '../components/UserInfo';
import Jobs from '../components/Jobs.vue';
import Experience from '../components/Experience';
import ProfileEdit from '../components/ProfileEdit';
export default {
  watch: {
  },
  name: 'ProfileDashboard',  
  components: {
    UserInfo,
    Jobs,
    Experience,
    ProfileEdit
  },
  data: () => ({
      image: { backgroundImage: "url(./assets/bg.jfif)" }
    }),
  methods: {
    
  },
  computed: {
    
  },
  created() {
    
  },
}
</script>
<style scope>
</style>