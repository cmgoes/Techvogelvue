<template>
  <v-app :style="image" style="background-size: 100% auto">
    <UserInfo />
    <Jobs />
    <Chat />
  </v-app>
</template>

<script>
import UserInfo from "../components/UserInfo";
import Jobs from "../components/Jobs.vue";
import Chat from "../components/Chat.vue";

export default {
  watch: {},
  name: "ChatDashboard",
  components: {
    UserInfo,
    Jobs,
    Chat
  },
  data: () => ({
    image: { backgroundImage: "url(./assets/bg.jfif)" },
  }),
  methods: {},
  computed: {},
  created() {},
};
</script>
