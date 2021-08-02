<template>
  <div class="p-3 pt-16">
    <v-row
      align="center"
      class="border-8 border-t-0 divide-solid divide-gray-300 bg-white"
    >
      <v-container 
        class="flex items-center justify-between flex-col xl:flex-row sm:pl-32"
      >
        <div 
          class="flex items-center w-full justify-around xs:mr-0 xs:mb-4 sm:mr-0 sm:mb-4 flex-col md:flex-row xl:w-auto xl:justify-between xl:mr-12 xl:mb-0"
        >
          <div 
            class="relative xs:mb-4 sm:mb-4 md:mb-0"
          >
            <div 
              class="absolute -left-32 -top-8"
            >
              <v-badge
                bordered
                bottom
                color="yellow accent-3"
                offset-x="20"
                offset-y="20"
              >
                <v-avatar size="100">
                  <v-img :src="userimage"></v-img>
                </v-avatar>
              </v-badge>
            </div>
            <p 
              class="text-xl mb-0"
            >
              Dennis obrien
            </p>
            <p 
              class="font-bold mb-0"
            >
              Full Stack-Senior
            </p>
            <p 
              class="text-xs mb-0"
            >
              At Oracle
            </p>
          </div>
          <div>
            <div
              class="flex items-center"
            >
              <div 
                class="xs:mb-4 sm:mb-4 md:mb-0 mr-8"
              >
                <div class="flex">
                  <v-img
                    src="./assets/br.svg"
                    max-width="22"
                    max-height="17"
                    class="mr-2 mb-1"
                  ></v-img>
                  <p 
                    class="mb-0 text-xs font-extrabold"
                  >
                    Brasil
                  </p>
                </div>
                <p 
                  class="text-xs mb-0"
                >
                  Sao Paulo-SP
                </p>
              </div>
              <div 
                class="xs:mb-4 sm:mb-4 md:mb-0"
              >
                <v-btn 
                  icon 
                  small 
                  block
                >
                  <v-icon color="light-blue darken-3">
                    fab fa-linkedin
                  </v-icon>
                </v-btn>
                <v-btn 
                  icon 
                  small 
                  block
                >
                  <v-icon color="grey darken-4">
                    fab fa-github
                  </v-icon>
                </v-btn>
              </div>
            </div>
          </div>
        </div>
        <div 
          class="flex items-center w-full justify-around flex-col md:flex-row xl:w-auto xl:justify-between"
        >
          <div 
            class="xs:mr-4 xs:mb-4 sm:mr-4 sm:mb-4 md:mb-0 xl:mr-0"
          >
            <div 
              class="flex items-center relative px-8 py-2"
            >
              <div
                class="absolute border-t-4 border-l-4 divide-solid border-gray-700 w-12 h-12 top-0 left-0"
              ></div>
              <div
                class="absolute border-b-4 border-r-4 divide-solid border-gray-700 w-12 h-12 bottom-0 right-0"
              ></div>
              <v-col 
                class="mr-8"
              >
                <v-row 
                  class="justify-center"
                >
                  <v-img
                    src="./assets/starChart.png"
                    maxWidth="45"
                  >
                  </v-img>
                </v-row>
                  <v-row  
                    class="text-xs font-bold whitespace-nowrap"
                  >
                    Global Rank
                  </v-row>
              </v-col>
              <v-col class="mr-8">
                <v-row 
                  class="text-xl font-bold uppercase whitespace-nowrap justify-center"
                >
                  Top 10%
                </v-row>
                <v-row 
                  class="text-xs font-bold justify-center"
                >
                  In 5.7k
                </v-row>
              </v-col>
              <v-col>
                <v-row 
                  class="text-xl font-bold uppercase justify-center"
                >
                  234.00
                </v-row>
                <v-row 
                  class="text-xs font-bold justify-center"
                >
                  Score
                </v-row>
              </v-col>
            </div>
          </div>
          <div 
            class="sm:mr-4 sm:mb-4 md:mb-0 xl:mr-0"
          >
            <v-btn
              color="blue darken-1"
              class="white--text font-bold"
            >
              Rank
            </v-btn>
          </div>
          <div>
            <div class="flex">
              <div class="mr-4">
                <p class="mb-0">
                  Profile Complete
                </p>
                <div class="flex">
                  <div 
                    class="border-black border-4 divide-solid w-40 h-6 mr-2"
                  >
                    <div 
                      class="bg-yellow-500 h-full" 
                      :style="profileWidth"
                    ></div>
                  </div>
                  <p class="font-bold mb-0">
                    {{ widthValue }}
                  </p>
                </div>
              </div>
              <div>
                <v-btn icon>
                  <v-icon color="grey darken-4">
                    fas fa-pencil-alt
                  </v-icon>
                </v-btn>
              </div>
            </div>
          </div>
        </div>
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
    widthValue: '20%',
    userimage: './assets/6.png'
  }),
  methods: {
    
  },
  computed: {
    profileWidth() {
      return `width: ${this.widthValue}`
    } 
  },
  created() {
    
  },
}
</script>
