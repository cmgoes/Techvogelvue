<template>
  <v-app>
    <Header />
    <v-content>
      <router-view></router-view>
    </v-content>
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
