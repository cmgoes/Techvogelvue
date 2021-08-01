<template>
  <v-app :style="image">
    <UserInfo />
    <Jobs/>
  </v-app>
</template>

<script>

import UserInfo from '../components/UserInfo';
import Jobs from '../components/Jobs.vue';
export default {
  watch: {
  },
  name: 'Dashboard',  
  components: {
    UserInfo,
    Jobs,
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