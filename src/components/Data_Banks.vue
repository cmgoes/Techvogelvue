<template>
  <div 
    class="border-8 divide-solid divide-gray-300 p-4"
  >
    <p class="text-2xl">Data Banks</p>
    <div 
      v-for="(DataBank, index) in DataBanks" :key="index"
      class="mb-3 flex justify-between items-center "
    >
      <div  
        class="p-1"
      >
        {{ DataBank.text }}
      </div>
      <div
        class="flex justify-end"
      >
          <div 
            v-for="(n, numindex) in DataBank.number" :key="numindex + '_index'"
            class="w-4 h-4 bg-purple-700 rounded-full mr-2"
          ></div>
          <div 
            v-for="(n, numindex) in 5 - DataBank.number" :key="numindex + 'index'"
            class="w-4 h-4 bg-purple-300 rounded-full mr-2"
          ></div>
      </div>
    </div>
  </div>
</template>
<script>

export default{
  name:'DataBanks',
  data: () => ({
    DataBanks: [
      {
        text: 'PostGree',
        number: 3
      },
      {
        text: 'MySQL',
        number: 4
      },
      {
        text: 'SQL',
        number: 3
      },
    ]
  }),
 
}
</script>
