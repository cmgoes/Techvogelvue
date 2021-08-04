<template>
  <v-app :style="image" style="background-size: 100% auto">
    <UserInfo />
    <Jobs />
    <div class="flex flex-col 2xl:flex-row p-4 bg-white">
      <div class="mr-8 experience-softskill flex flex-col lg:flex-row 2xl:block">
        <Experience />
        <SoftSkills />
      </div>
      <div class="chartArea">
        <div class="flex flex-col lg:flex-row">
          <div class="w-full lg:w-2/3 mr-8">
            <ProgrammingChart />
            <TestsTable />
          </div>
          <div class="w-full lg:w-1/3">
            <Areas />
            <Language />
            <DataBanks />
          </div>
        </div>
        <Github />
      </div>
    </div>
  </v-app>
</template>

<script>
import UserInfo from "../components/UserInfo";
import Jobs from "../components/Jobs.vue";
import Experience from "../components/Experience";
import SoftSkills from "../components/SoftSkills";
import ProgrammingChart from "../components/ProgrammingChart";
import TestsTable from "../components/TestsTable";
import Areas from "../components/Areas";
import Language from "../components/Language";
import DataBanks from "../components/DataBanks";
import Github from "../components/Github";

export default {
  watch: {},
  name: "Dashboard",
  components: {
    UserInfo,
    Jobs,
    Experience,
    SoftSkills,
    ProgrammingChart,
    TestsTable,
    Areas,
    Language,
    DataBanks,
    Github
  },
  data: () => ({
    image: { backgroundImage: "url(./assets/bg.jfif)" },
  }),
  methods: {},
  computed: {},
  created() {},
};
</script>
<style>
.experience-softskill,
.chartArea {
  width: 100%;
}
@media screen and (min-width: 1536px) {
  .experience-softskill {
    width: 540px;
  }
  .chartArea {
    width: calc(100% - 540px);
  }
}

</style>
