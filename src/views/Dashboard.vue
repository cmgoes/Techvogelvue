<template>
  <v-app :style="image" style="background-size: 100% auto">
    <UserInfo />
      <div class="flex p-4 bg-white">
        <div class="w-1/3 mr-8">
          <Experience />
          <SoftSkills />
        </div>
        <div class="w-1/2 mr-8">dffdf</div>
        <div class="w-1/6">dfdfdf</div>
      </div>
  </v-app>
</template>

<script>

import UserInfo from '../components/UserInfo';
import Experience from '../components/Experience';
import SoftSkills from '../components/SoftSkills';
export default {
  watch: {
  },
  name: 'Dashboard',  
  components: {
    UserInfo,
    Experience,
    SoftSkills,
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