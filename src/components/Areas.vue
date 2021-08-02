<template>
  <div class="Bar_chart p-2 border-8">
    <h4 class="text-h4">Areas</h4>
    <Barcharta :chartData="datacollection" :options="options"/>
    
  </div>    
</template>
<script>
// import { component } from 'vue/types/umd'
import Barcharta from './Barchart.vue'
export default {
  name:'Barchart',
  components:{
    Barcharta,
  },
  data: function () {
		return {
			datacollection: {
				labels: [['40%','Matlab'], ['60%','Blockchain'],['50%','Website'],['54%','Mobile App']],
				datasets: [
					{
						label: 'Data One',
						backgroundColor: '#2911abe6',
						// pointBackgroundColor: 'white',
						borderWidth: 1,
						pointBorderColor: '#249EBF',
						data: [45, 60, 50, 54],
					}
]
			},
			options: {
				scales: {
					yAxes: [{
						ticks: {
							beginAtZero:true,
              display: false
						},
						gridLines: {
              // drawBorder: false,
							display: false
						},
					}],
					xAxes: [{
						ticks: {
							beginAtZero: true
						},
            maxBarThickness: 30,
            categoryPercentage: 1.0,
            barPercentage: 1.0,
						gridLines: {
							display: false
						}
					}]
				},
				legend: {
					display: false
				},
				tooltips: {
					enabled: true,
					mode: 'single',
				},
				responsive: true,
				maintainAspectRatio: false,
				height: 100
}
		}
	},
  
}
</script>
