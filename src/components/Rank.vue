<template>
  <div 
    class="bg-white p-4 h-full"
  >
    <div 
      class="max-w-screen-md m-auto"
    >
      <div 
        class="flex flex-col md:flex-row justify-between items-center mb-2"
      >
        <div
          class="w-48 h-10 border-4 border-gray-300 d-flex rounded-lg xs:mb-3 sm:mb-3 md:mb-0"
        >
          <input 
            type="text" 
            placeholder=""
            class="w-36 h-full px-2 focus:outline-none font-bold blue-grey--text text--darken-3"
          />
          <div
            class="border-l-4 border-gray-300 bg-orange-darken w-full h-full rounded-r"
          >
            <v-btn icon>
              <v-icon
                large
                color="white"
              >
                search
              </v-icon>
            </v-btn>
          </div>
        </div>
        <div class="d-flex flex-col sm:flex-row items-center">
          <input 
            type="text" 
            placeholder="Language" 
            class="w-36 h-10 px-2 focus:outline-none border-2 rounded-lg border-orange-darken border-solid mr-3 blue-grey--text text--darken-3 xs:mb-3"
          />
          <input 
            type="text" 
            placeholder="Experiences" 
            class="w-36 h-10 px-2 focus:outline-none border-2 rounded-lg border-orange-darken border-solid mr-3 blue-grey--text text--darken-3 xs:mb-3"
          />
          <input 
            type="text" 
            placeholder="Area" 
            class="w-36 h-10 px-2 focus:outline-none border-2 rounded-lg border-orange-darken border-solid mr-3 blue-grey--text text--darken-3 xs:mb-3"
          />
          <v-btn
            color="orange darken-2"
            class="white--text font-bold capitalize"
          >
            Enter
          </v-btn>
        </div>
      </div>
      <p
        class="text-xl font-bold text-center light-blue--text text--accent-4"
      >
        Top 5
      </p>
      <div class="hidden md:flex">
        <p 
          class="flex-grow ml-24 mb-1"
        >
          Ranking position
        </p>
        <p
          class="mr-20 mb-1"
        >
          3 best languages
        </p>
        <p
          class="mr-6 mb-1"
        >
          Points
        </p>
      </div>
      <div
        v-for="(user, index) in users"
        :key="index"
        class="flex flex-col xs:py-2 sm:py-2 md:py-0 md:flex-row justify-between items-center 
              border-8 bordr-gray-300 rounded-lg mb-4 pl-2"
      >
        <div>
          <v-img
            :src="user.image"
            width="70"
            height="70"
            class="rounded-full"
          >
          </v-img>
        </div>
        <div
          class="w-36 text-center font-bold text-lg"
        >
          <p
            class="mb-0"
          >
            {{ user.name }}
          </p>
          <p
            class="mb-0 text-orange-darken"
          >
            {{ user.rank }}&#176;
          </p>
        </div>
        <div 
          class="font-bold blue-grey--text text--darken-3 mr-2 xs:mb-2 sm:mb-2 md:mb-0"
        >
          {{ user.skill }}
        </div>
        <div class="flex xs:mb-2 sm:mb-2 md:mb-0">
          <v-btn 
            v-for="(language, number) in user.bestLanguages" 
            :key="number"
            color="orange darken-2"
            class="w-16 text-caption mr-2 font-weight-bold white--text"
          >
            {{ language }}
          </v-btn>
        </div>
        <div
          class="w-20 text-center font-bold text-2xl bg-blue-400 py-3 rounded-r-full md:rounded-r-xl rounded-l-full white--text"
        >
          {{ user.points }}
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
  },
  created () {
  },
  name: "Chat",
  data: () => ({
    users: [
      {
        image:'./assets/1.jpg',
        name: 'Pedro Silva',
        rank: 1,
        skill: 'Java Script/Vue.js - Mid Level',
        bestLanguages: [ 'Vue.js', 'C#', 'Java S.' ],
        points: 135.64
      },
      {
        image:'./assets/2.jpg',
        name: 'James Carvalho',
        rank: 2,
        skill: 'Java Script/Vue.js - Mid Level',
        bestLanguages: [ 'Vue.js', 'C#', 'Java S.' ],
        points: 125.45
      },
      {
        image:'./assets/3.jpg',
        name: 'Lilian Souza',
        rank: 3,
        skill: 'Java Script/Vue.js - Mid Level',
        bestLanguages: [ 'Vue.js', 'C#', 'Java S.' ],
        points: 87.21
      },
      {
        image:'./assets/4.jpg',
        name: 'Marcelo Costa',
        rank: 4,
        skill: 'Java Script/Vue.js - Mid Level',
        bestLanguages: [ 'Vue.js', 'C#', 'Java S.' ],
        points: 135.64
      },
      {
        image:'./assets/5.jpg',
        name: 'James Carvalho',
        rank: 5,
        skill: 'Java Script/Vue.js - Mid Level',
        bestLanguages: [ 'Vue.js', 'C#', 'Java S.' ],
        points: 125.45
      },
      {
        image:'./assets/6.png',
        name: 'You',
        rank: 189,
        skill: 'Java Script/Vue.js - Mid Level',
        bestLanguages: [ 'Vue.js', 'C#', 'Java S.' ],
        points: 234.00
      }
    ]
  }),
  methods: {
  }
};
</script>
