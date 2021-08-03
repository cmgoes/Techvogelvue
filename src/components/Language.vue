<template>
  <div class="Language border-8 p-5 my-4 flex flex-column">
    <h5 
      class="text-h5 mb-4"
    >
      Language
    </h5>
    <table 
      class="language_table text-center"
    >
      <tbody>
        <tr
        v-for="(item,i) in Languages"
        :key="i"
        height="40"
        >
          <td 
            class="border-yellow-500 border-r-4 px font-bold" 
            :class="i==Languages.length - 1 ? '' : 'border-b-4'"
          >
            {{item.title}}
            </td>
          <td 
            class=" border-yellow-500 px" 
            :class="i==Languages.length - 1 ? '' : 'border-b-4'"
          >
            {{item.degree}}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>

export default {
  created () {
  },
  name:'Language',
  data: () => ({
    Languages:[
      { title:'Portuguese',degree:'Fluent' },
      { title:'English',degree:'Advanced' },
      { title:'Spanish',degree:'Intermediary' },
      { title:'Franch',degree:'Begginer' },
    ]
    }),

}
</script>
