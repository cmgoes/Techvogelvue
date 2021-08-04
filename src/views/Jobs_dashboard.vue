<template>
  <v-app :style="image" style="background-size: 100% auto">
    <UserInfo />
    <Jobs/>
    <AppliedJobs/>
  </v-app> 
</template>
<script>
import UserInfo from '../components/UserInfo';
import Jobs from '../components/Jobs.vue';
import AppliedJobs from '../components/Applied_jobs.vue';
export default {
  name:'Jobs_dashboard',
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
