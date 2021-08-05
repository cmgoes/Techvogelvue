<template>
  <v-app :style="image" style="background-size: 100% auto">
    <UserInfo />
    <Jobs />
    <AppliedJobs />
  </v-app> 
</template>
<script>
import UserInfo from '../components/UserInfo';
import Jobs from '../components/Jobs.vue';
import AppliedJobs from '../components/AppliedJobs.vue';
export default {
  created () {
  },
  name:'JobsDashboard',
  components:{
    Jobs,
    UserInfo,
    AppliedJobs,
  },
   data: () => ({
      image: { backgroundImage: "url(./assets/bg.jfif)" }
    }),

}
</script>
