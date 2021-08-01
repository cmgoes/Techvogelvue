<template>
  <v-app :style="image" style="background-size: 100% auto">
    <UserInfo />
  </v-app>
</template>

<script>

import UserInfo from '../components/UserInfo';
export default {
  watch: {
  },
  name: 'Dashboard',  
  components: {
    UserInfo
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