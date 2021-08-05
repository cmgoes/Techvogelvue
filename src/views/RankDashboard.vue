<template>
  <v-app :style="image" style="background-size: 100% auto">
    <UserInfo />
    <Jobs />
    <Rank />
  </v-app>
</template>

<script>
import UserInfo from "../components/UserInfo";
import Jobs from "../components/Jobs.vue";
import Rank from "../components/Rank";

export default {
  watch: {},
  name: "ChatDashboard",
  components: {
    UserInfo,
    Jobs,
    Rank
  },
  data: () => ({
    image: { backgroundImage: "url(./assets/bg.jfif)" },
  }),
  methods: {},
  computed: {},
  created() {},
};
</script>
