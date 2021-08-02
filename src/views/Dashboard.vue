<template>
  <v-app :style="image" style="background-size: 100% auto">
    <UserInfo />
    <Jobs/>
    <div class="flex p-4 bg-white">
      <div class="w-1/3 mr-8">
        <Experience />
        <SoftSkills />
      </div>
      <div class="w-1/2 mr-8">  
        <ProgrammingChart />
        <TestsTable />
      </div>
      <div class="w-1/6">
        <Areas/>
        <Language/>
        <DataBanks/>
      </div>
    </div>

  </v-app>
</template>

<script>

import UserInfo from '../components/UserInfo';
import Jobs from '../components/Jobs.vue';
import Experience from '../components/Experience';
import SoftSkills from '../components/SoftSkills';
import Areas from '../components/Areas';
import Language from '../components/Language';
import DataBanks from '../components/Data_Banks';
import ProgrammingChart from '../components/ProgrammingChart';

export default {
  watch: {
  },
  name: 'Dashboard',  
  components: {
    UserInfo,
    Jobs,
    Experience,
    SoftSkills,
    Areas,
    Language,
    DataBanks,
    ProgrammingChart,
    // TestsTable,
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