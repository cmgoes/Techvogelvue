<template>
  <div class="bg-white border-8 border-t-0">
    <v-container class="flex">
      <h3 class="text-h4 flex items-center text-center"> Jobs <br/>
         Available
      </h3>
      <v-row class="m-0">
        <v-col  
          v-for="(item,i) in job"
          :key="i"
          class="p-3"
          cols="12"
          lg="4"
        >
          <h6 class="border-4 border-b-0 border-black px-3 pt-2 orange--text text--darken-4">{{item.budget}}</h6>
          <h5 class="text-h5 px-3 black--text">{{item.title}}</h5>
          <div class="flex border-4 border-t-0 border-black px-3 pb-2">
            <div class="flex">
              <v-img src="./assets/company.svg"  height="20" max-width="20">
              </v-img>
              <h5 class="text-black">{{item.companyName}}</h5>
            </div>
            <div class="flex ">
              <v-img src="./assets/clock.svg" height="20" max-width="20">
              </v-img>
              <h5 class="text-black">{{item.timeStyle}}</h5>
            </div>
          </div>
        </v-col>
      </v-row>
      <div class="flex items-center">
        <v-btn
         icon
        >
         <v-icon></v-icon>
        </v-btn>
        <v-btn
          color="orange darken-2"
          class="font-bold white--text mr-3"
        >
         See+
        </v-btn>
      </div>
     
      </v-container>
  </div>
</template>
<script>
export default {
  name:'Jobs',
  data: () => ({
    job:[
      {budget:'R$12,000.00', title:'Java Script/Vue-Mid Level',companyName:"Cocacola",timeStyle:"fulltime"},
      {budget:'R$12,000.00', title:'Css + Mongo - Junior',companyName:"Nubank",timeStyle:"fulltime"},
      {budget:'R$6.000,00', title:'Front End- C++ Junior',companyName:"Microsoft",timeStyle:"parttime"},
    ]
      
    

    }),
}
</script>
