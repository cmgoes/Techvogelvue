<template>
  <div 
    class="border-8 divide-solid divide-gray-300 p-4 mb-8"
  >
    <p 
      class="text-2xl"
    >
      Programming Languages
    </p>
    <apexchart
      type="line"
      height="350"
      :options="chartOptions"
      :series="series"
    ></apexchart>
  </div>
</template>

<script>

import VueApexCharts from "vue-apexcharts";
export default {
  components: {
    apexchart: VueApexCharts,
  },
  watch: {
  },
  name: 'ProgrammingChart',  
  data: () => ({
    series: [
      {
        name: "JavaScript",
        data: [30, 40, 60, 90, 130, 180, 240, 310, 380, 470],
      },
      {
        name: "C#",
        data: [40, 60, 140, 260, 540, 600, 740, 790, 890, 930],
      },
      {
        name: "HTML",
        data: [30, 80, 290, 430, 480, 530, 650, 750, 890, 930],
      },
      {
        name: "C++",
        data: [40, 120, 180, 230, 330, 540, 590, 690, 738, 784],
      },
      {
        name: "Ruby",
        data: [65, 120, 190, 300, 360, 433, 544, 652, 766, 805],
      },
      {
        name: "Java",
        data: [45, 56, 178, 294 , 354, 456, 562, 662, 793, 892],
      },
      {
        name: "Vue.js",
        data: [34, 50, 93, 185, 203, 283, 485, 593, 682, 752],
      },
      {
        name: "React",
        data: [53, 202, 293, 340, 403, 542, 652, 767, 875, 989],
      }
    ],
    chartOptions: {
      chart: {
        height: 350,
        type: 'line',
        zoom: {
          enabled: false
        },
        toolbar: {
          show: false,
        }
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: 'straight'
      },
      yaxis: {
        show: false,
      },
      xaxis: {
        tickPlacement: 'between',
        categories: [['Jan.2020'], 'Feb.2020', 'Mar.2020', 'Apr.2020', 'May.2020', 'Jun.2020', 'Jul.2020', 'Aug.2020', 'Sep.2020', 'Oct.2020'],
        labels: {
          style: {
            fontSize: "16px",
          },
        },
        axisBorder: {
          show: true,
          color: '#039BE5',
          height: 2,
        },
        axisTicks: {
          show: true,
          borderType: 'solid',
          color: '#039BE5',
          height: 4,
          offsetX: 0,
          offsetY: 0
        },
      },
      legend: {
        position: "bottom",
        horizontalAlign: "center",
        fontSize: "16px",
        markers: {
          width: 18,
          height: 18,
          radius: 18,
          offsetX: -5,
          offsetY: 0
        },
        itemMargin: {
          horizontal: 10,
          vertical: 0
        },
      },
      grid: {
        show: false,
      },
    },
  }),
  methods: {
    
  },
  computed: {
    
  },
  created() {
    
  },
}
</script>
