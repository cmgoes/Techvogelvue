<template>
  <div
    class="p-4 bg-white"
  >
    <div 
      class="flex flex-col sm:flex-row items-center justify-between mb-2 overflow-x-hidden githubwidth"
    >
      <p 
        class="mb-0"
      >
        {{ totalCommitNumber }} contributions in the last year
      </p>
      <div>
        <v-select
          flat 
          solo
          hide-details
          label="Contribution settings"
          class="text-sm w-48"
        ></v-select>
      </div>
    </div>
    <div 
      class="py-2 px-8 border divide-solid boder-red-400 githubwidth"
    >
      <div>
        <apexchart
          id="githubchart"
          type="heatmap"
          width="722"
          height="112"
          :options="chartOptions"
          :series="series"
        ></apexchart>
      </div>
      <div 
        class="flex flex-col-reverse sm:flex-row items-center"
      >
        <p 
          class="mb-0"
        >
          <v-hover>
            <a
              slot-scope="{ hover }"
              href="https://docs.github.com/articles/why-are-my-contributions-not-showing-up-on-my-profile" 
              class="text-sm"
              :class="`${hover ? 'light-blue--text text--darken-2': 'black--text'}`"
            >
              Learn how we count contributions
            </a>
          </v-hover>
        </p>
        <div 
          class="flex text-sm items-center justify-end"
        >
          <p class="mb-0 mr-1">Less</p>
          <div class="w-2.5 h-2.5 mr-1 rounded-sm" style="background: #ebedf0"></div>
          <div class="w-2.5 h-2.5 mr-1 rounded-sm" style="background: #9be9a8"></div>
          <div class="w-2.5 h-2.5 mr-1 rounded-sm" style="background: #40c463"></div>
          <div class="w-2.5 h-2.5 mr-1 rounded-sm" style="background: #30a14e"></div>
          <div class="w-2.5 h-2.5 mr-1 rounded-sm" style="background: #216e39"></div>
          <p class="mb-0">More</p>
        </div>        
      </div>
    </div>
  </div>
</template>

<script>

import VueApexCharts from "vue-apexcharts";
import moment from "moment";
export default {
  name: "Github",
  components: {
    apexchart: VueApexCharts,
  },
  data: () => ({
    githh: 'dfdfdf',
    today: moment(),
    dateContext: moment(),
    getMonth: moment(),
    totalCommitNumber: 0,
    day: ['Saturday', 'Friday', 'Thursday', 'Wednesday', 'Tuesday', 'Monday', 'Sunday'],
    options: {
      plotOptions: {
        heatmap: {
          radius: 3,
          enableShades: false,
          colorScale: {
            ranges: [{
                from: 0,
                to: 20,
                color: '#ebedf0'
              },
              {
                from: 21,
                to: 40,
                color: '#9be9a8'
              },
              {
                from: 41,
                to: 60,
                color: '#40c463'
              },
              {
                from: 61,
                to: 80,
                color: '#30a14e'
              },
              {
                from: 81,
                to: 100,
                color: '#216e39'
              },
            ],
          },
          min: 20,
          max: 30
        },
      },
      chart: {
        height: 350,
        type: 'heatmap',
        toolbar: {
          show: false,
        }
      },
      dataLabels: {
        enabled: false
      },
      yaxis: {
        show: false,
      },
      xaxis: {
        categories: [],
        position: 'top',
        labels: {
          offsetY: 1,
          style: {
            fontSize: '10px',
          }
        }
      },
      legend: {
        show: false,
      },
      grid: {
        padding: {
          top: -20,
          right: 0,
          bottom: -24,
          left: 0
        }
      },
      stroke: {
        width: 2
      },
      tooltip: {
        custom: function(opts) {
          const value = opts.series[opts.seriesIndex][opts.dataPointIndex]
          let commitdate = moment().subtract((360 - opts.dataPointIndex * 7 + opts.seriesIndex), 'days')
          return value + " contribution on " + commitdate.format('MMM') + " " + commitdate.format('DD') + ", " + commitdate.format('YYYY');
        }
      },
    }
  }),
  methods: {
    ddd() {
      console.log(this.tooltip)
      console.log(moment().subtract(1, 'days').toDate())
    }
  },
  computed: {
    series() {
      this.totalCommitNumber = 0;
      const commitdata = [
        { name: 'Saturday', data: [], date: [] }, 
        { name: 'Friday', data: [], date: [] }, 
        { name: 'Thursday', data: [], date: [] },
        { name: 'Wednesday', data: [], date: [] }, 
        { name: 'Tuesday', data: [], date: [] },  
        { name: 'Monday', data: [], date: [] }, 
        { name: 'Sunday', data: [], date: [] }, 
      ];
      let currentdate = this.today;
      for ( let i = 0; i < 366; i++ ) {
        let date = this.dateContext.subtract(1, 'days');
        for ( let j = 0; j < 7; j++ ) {
          if (i == 0 && currentdate.format('dddd') == this.day[j] ) {
            commitdata[j].date.push(currentdate.toDate())
            let commitNumber = Math.floor(Math.random()* 100)
            this.totalCommitNumber += commitNumber
            commitdata[j].data.push(commitNumber)
          }
          if ( date.format('dddd') == this.day[j] ) {
            commitdata[j].date.push(date.toDate())
            let commitNumber = Math.floor(Math.random()* 100)
            this.totalCommitNumber += commitNumber
            commitdata[j].data.push(commitNumber)
          }
        }
      }
      return commitdata
    },
    chartOptions() {
      this.options.xaxis.categories.push(this.today.format('MMM'))
      for ( let l = 0; l < 11; l++ ) {
        this.options.xaxis.categories.unshift(this.getMonth.subtract(1, 'month').format('MMM'))
      }
      return this.options
    },
  },
};
</script>
<style>
#githubchart .apexcharts-xaxistooltip {
  display: none;
}
#githubchart .apexcharts-tooltip {
  background: rgba(0, 0, 0, 0.85);
  color: white;
  font-size: 12px;
  border: none !important;
  padding: 8px 12px;
}
.githubwidth {
  width: 100%;
  overflow-x: scroll;
}
@media screen and (min-width: 840px) {
  .githubwidth {
    width: 818px;
    overflow-x: hidden;
  }
}
</style>