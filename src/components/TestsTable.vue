<template>
  <div
    class="border-8 divide-solid divide-gray-300 p-4 mb-8"
  >
    <p 
      class="text-2xl"
    >
      Tests
    </p>
    <div 
      class="flex flex-col sm:flex-row justify-between items-end"
    >
      <apexchart
        type="bar"
        height="350"
        :options="chartOptions"
        :series="series"
        class="flex-grow mr-4"
      ></apexchart>
      <v-btn
        large
        color="light-blue lighten-1"
        class="white--text"
      >
        Results
      </v-btn>
    </div>
  </div>
</template>

<script>
import VueApexCharts from "vue-apexcharts";
export default {
  name: "TestsTable",
  components: {
    apexchart: VueApexCharts,
  },
  data: () => ({
    series: [
      {
        name: "Correct answers",
        data: [123, 207, 141, 99],
      },
      {
        name: "Total questions",
        data: [135, 245, 145, 169],
      },
    ],
    chartOptions: {
      colors: ["#1E88E5", "#90CAF9"],
      chart: {
        type: 'bar',
        height: 350,
        stacked: true,
        toolbar: {
          show: false,
        }
      },
      plotOptions: {
        bar: {
          borderRadius: 4,
          horizontal: true,
        }
      },
      stroke: {
        width: 0,
      },
      dataLabels: {
        enabled: false
      },
      yaxis: {
        labels: {
          style: {
            fontSize: "18px",
          },
        },
      },
      xaxis: {
        tickPlacement: 'between',
        categories: ['Javascript', 'CSS', 'Vue.js', 'java'],
        labels: {
          style: {
            fontSize: "18px",
          },
          formatter: (value) => { return value },
        },
        axisBorder: {
          show: true,
          color: '#039BE5',
          offsetX: -5,
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
      tooltip: {
        style: {
          fontSize: "16px"
        },
      },
      fill: {
        opacity: 1,
      },
      legend: {
        position: "bottom",
        horizontalAlign: "center",
        fontSize: "18px",
        markers: {
          width: 20,
          height: 20,
          radius: 20,
          offsetX: -5,
          offsetY: 0
        },
        itemMargin: {
          horizontal: 10,
          vertical: 0
        },
      },
    },
  }),
};
</script>