<template>
  <div
    class="border-8 divide-solid divide-gray-300 p-4 mb-8"
  >
    <p class="text-2xl">
      Tests
    </p>
    <div>
      <apexchart
        type="bar"
        height="300"
        :options="chartOptions"
        :series="series"
      ></apexchart>
      <div class="flex justify-around pl-6 pr-4 text-center">
        <p>MatLab</p>
        <p>BlockChain</p>
        <p>Website</p>
        <p>Mobile App</p>
      </div>
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
  data() {
    return {
      ddd: this.areaValue,
      series: [
        {
          name: "Correct answers",
          data: [45, 60, 30, 54],
          color: '#90CAF9'
        }        
      ],
      chartOptions: {
        chart: {
          type: 'bar',
          height: 350,
          stacked: true,
          toolbar: {
            show: false,
          }
        },
        stroke: {
          width: 0,
        },
        dataLabels: {
          enabled: false
        },
        yaxis: {
          show: false,
        },
        xaxis: {
          tickPlacement: 'between',
          categories: [45, 60, 30, 54],
          labels: {
            offsetY: 10,
            style: {
              fontSize: "20px",
              colors: '#039BE5'
            },
            formatter: function (value) {
              return value + "%";
            }          
          },
        },
        grid: {
          show: false,
        },
        tooltip: {
          style: {
            fontSize: "16px"
          },
          // y: {
          //   title: {
          //     formatter: (seriesName) => "",
          //   },
          // },
        },
        fill: {
          opacity: 1,
        },
        legend: {
          show: false,
        },
      },
    };
  },
  methods: {
  },
  computed: {
  },
};
</script>

