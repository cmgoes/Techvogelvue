<template>
  <div class="bg-white">
    <div class="border-8 max-w-screen-md m-auto pa-4">
      <h4 class="text-h4 text-yellow-500">Jobs Applied</h4>
      <v-sheet 
        v-for="(item,i) in job"
        :key="i"
      >
        <v-row class="border-8 border-yellow-500 flex justify-between rounded-xl m-4">      
          <v-col cols="12" lg="7" md="7" sm="7">
            <h6 class="border-black px-3 pt-2 orange--text text--darken-4 text-xs font-bold">{{item.budget}}</h6>
            <h5 class="text-h5 px-3 black--text">{{item.title}}</h5>
            <div class="flex px-3 pb-2">
              <div class="flex mr-4 items-center">
                <v-img src="./assets/clock.svg"  height="20" max-width="20">
                </v-img>
                <h5 class="text-black ml-2 text-xs font-bold">Postade at {{item.createtime}}</h5>
              </div>
              <div class="flex mr-4 items-center">
                <v-img src="./assets/company.svg"  height="20" max-width="20">
                </v-img>
                <h5 class="text-black ml-2 text-xs font-bold">{{item.companyName}}</h5>
              </div>
              <div class="flex mr-4 items-center">
                <v-img src="./assets/clock.svg" height="20" max-width="20">
                </v-img>
                <h5 class="text-black ml-2 text-xs font-bold">{{item.timeStyle}}</h5>
              </div>
            </div>
          </v-col>
          <v-col class="flex justify-around items-center" cols="12" lg="5" md="5" sm="5">
            <div class="">
              <v-img :src='item.img' height="40" max-width="40" class="rounded-circle m-auto mb-2">
              </v-img>
              <h6 class="text-xs">{{item.clientname}}</h6>
            </div>
            <div class="text-center">
              <h5 class="font-bold">Your Position</h5>
              <h6 class="text-h5 ">{{item.position}}</h6>
            </div>
          </v-col>
        </v-row>
      </v-sheet>
    </div>
  </div>
</template>
<script>

export default {
  name:'Appliedjobs',
  data:()=>({
    job:[
      {budget:'R$12,000.00', title:'Java Script/Vue-Mid Level',companyName:"Cocacola",timeStyle:"fulltime",createtime:'25/06/21',img:'./assets/5.jpg',clientname:'Rosangela Silva',position:"10%"},
      {budget:'R$12,000.00', title:'Css + Mongo - Junior',companyName:"Nubank",timeStyle:"fulltime",createtime:'25/06/21',img:'./assets/5.jpg',clientname:'Rosangela Silva',position:"10%"},
      {budget:'R$6.000,00', title:'Front End- C++ Junior',companyName:"Microsoft",timeStyle:"parttime",createtime:'25/06/21',img:'./assets/5.jpg',clientname:'Rosangela Silva',position:"10%"},
    ]
  })
}
</script>
