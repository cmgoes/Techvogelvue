<template>
  <div class="p-3 pt-16">
    <v-row
      align="center"
      class="border-8 border-t-0 divide-solid divide-gray-300 bg-white"
    >
      <v-container class="flex items-center">
        <v-col>
          <v-row 
            class="text-xl"
          >
            Dennis obrien
          </v-row>
          <v-row 
            class="font-bold"
          >
            Full Stack-Senior
          </v-row>
          <v-row 
            class="text-xs"
          >
            At Oracle
          </v-row>
        </v-col>
        <v-col>
          <v-row class="text-xs font-extrabold flex-end">
            <v-img
              src="./assets/br.svg"
              max-width="22"
              max-height="17"
              class="mr-2 mb-1"
            ></v-img>
            Brasil
          </v-row>
          <v-row class="text-xs">Sao Paulo-SP</v-row>
        </v-col>
        <v-col>
          <v-row>
            <v-btn icon small>
              <v-icon color="light-blue darken-3">fab fa-linkedin</v-icon>
            </v-btn>
          </v-row>
          <v-row>
            <v-btn icon small>
              <v-icon color="grey darken-4">fab fa-github</v-icon>
            </v-btn>
          </v-row>
        </v-col>
        <v-col class="relative">
          <div class="absolute border-4 divide-solid border-red"></div>
          <div class="absolute"></div>
          <v-row class="items-center">
            <v-col class="justify-center">
              <v-row>
                <v-img
                  src="./assets/starChart.png"
                  maxWidth="45"
                >
                </v-img>
              </v-row>
                <v-row class="text-xs font-bold">Global Rank</v-row>
            </v-col>
            <v-col>
              <v-row class="text-xl font-bold uppercase">Top 10%</v-row>
              <v-row class="text-xs font-bold">In 5.7k</v-row>
            </v-col>
            <v-col>
              <v-row class="text-xl font-bold uppercase">234.00</v-row>
              <v-row class="text-xs font-bold">Score</v-row>
            </v-col>
          </v-row>
        </v-col>
      </v-container>
    </v-row>
  </div>
</template>

<script>

export default {
  watch: {
  },
  name: 'UserInfo',  
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
