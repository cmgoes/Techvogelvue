<template>
  <div 
    class="border-8 divide-solid divide-gray-300 p-4"
  >
    <p class="text-2xl">Soft Skills</p>
    <div 
      v-for="(softskill, index) in softskills" :key="index"
      class="mb-3 flex justify-between items-center pr-8"
    >
      <div  
        class="bg-yellow-400 p-1 rounded text-lg"
      >
        {{ softskill.text }}
      </div>
      <div
        class="flex justify-end"
      >
          <div 
            v-for="(n, numindex) in softskill.number" :key="numindex + '_index'"
            class="w-4 h-4 bg-blue-700 rounded-full mr-2"
          ></div>
          <div 
            v-for="(n, numindex) in 5 - softskill.number" :key="numindex + 'index'"
            class="w-4 h-4 bg-blue-300 rounded-full mr-2"
          ></div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  watch: {
  },
  name: 'SoftSkills',  
  data: () => ({
    softskills: [
      {
        text: 'Lidership',
        number: 3
      },
      {
        text: 'Empath',
        number: 4
      },
      {
        text: 'Comunication',
        number: 3
      },
      {
        text: 'criativity',
        number: 5
      },
    ]
  }),
  methods: {
    
  },
  computed: {
    
  },
  created() {
    
  },
}
</script>
