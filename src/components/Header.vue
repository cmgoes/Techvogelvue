<template>
    <v-app-bar
        color="deep-purple accent-4"
    >
      <v-container class="flex items-center">
        <v-img
          src="./assets/vogel-logo.svg"
          max-width="130"
          class="block"
        ></v-img>
        <v-spacer></v-spacer>
        <v-btn
          color="orange darken-2"
          class="font-bold white--text mr-3"
        >
          Dashboard
        </v-btn>
        <v-btn
          color="orange darken-2"
          class="font-bold white--text mr-3"
        >
          Jobs Applyed
        </v-btn>
        <v-btn
          color="orange darken-2"
          class="font-bold white--text mr-3"
        >
          Tests
        </v-btn>
        <v-btn
          color="orange darken-2"
          class="font-bold white--text mr-3"
        >
          Messages
        </v-btn>
        <v-btn
          color="orange darken-2"
          class="font-bold white--text mr-3"
        >
          Profile
        </v-btn>
        <v-btn 
          icon
        >
          <v-icon color="orange darken-2">mdi-bell</v-icon>
        </v-btn>
        <v-menu offset-y>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              icon
              color="deep-purple darken-4"
              dark
              v-bind="attrs"
              v-on="on"
              x-large
            >
              <v-icon>mdi-account-circle</v-icon>
            </v-btn>
          </template>
          <v-list>
            <v-list-item>
              <v-list-item-title class="cursor-pointer">Profile</v-list-item-title>
            </v-list-item>
            <v-list-item>
              <v-list-item-title class="cursor-pointer">Log out</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
        </v-container>
    </v-app-bar>
</template>

<script>
export default {
  watch: {
  },
  name: 'Header',  
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