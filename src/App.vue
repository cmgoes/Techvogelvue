<template>
  <v-app>
    <Header />
    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>

import Header from './components/Header';
export default {
  watch: {
  },
  name: 'Home',  
  components: {
    Header
  },
  data: () => ({
  }),
  methods: {
    
  },
  computed: {
    
  },
  created() {
    
  },
}
</script>
