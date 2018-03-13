<template>
  <!-- Category ing..-->
  <div class="social state">
      <div class="title">
        instagram: 2,480,810
      </div>
      <div class="range">
        <span>3m</span>
        <span>6m</span>
        <span>12m</span>
        <span>all</span>
      </div>
      <vue-highcharts :options="socialChartOptions" ref="chart" :classname="'chart'"></vue-highcharts>
  </div>
</template>

<script>

import VueHighcharts from "vue2-highcharts";

export default {
  name: 'social',
  data () {
    return {
      show: false,
      socialChartOptions: {
        chart: { type: "line", height: "337px" },
        title: { text: "" },
        credits: { enabled: false },
        legend: { enabled: false },
        xAxis: { type: "datetime" },
        yAxis: { title: { text: null } },
        series: []
      }
    }
  },
  components: {
    VueHighcharts
  },
  props: {
    title: {
      type: String,
      required: true,
      default: 'title'
    }    
  },
  methods: {
    showSocialChart: function(chart, url) {
        chart.delegateMethod("showLoading", "Loading...");
        this.$http.get(url).then(result => {
            if (result.status == 200) {
                chart.hideLoading();
                var start = this.getUTCDate(result.data.data.startdate)
                var data = {
                    name: "Insta",
                    data: result.data.data.score,
                    pointStart: start,
                    pointInterval: 24 * 3600 * 1000 // one day
                };
                chart.addSeries(data);
            }
        });
    },
    drawChart: function(type) {
      this.showSocialChart(this.$refs.chart, "/static/action/social.json?type=" + type);
    },
    getUTCDate: function(date) {
      var year = date / 10000;
      var month = (date % 10000) / 100;
      var day = date % 100;
      return Date.UTC(year, month - 1, day);
    }
  }
}
</script>

<style scoped>
.title {
  height: 24px;
  background-color: #316699;
  width: 184px;
  font-size: 14px;
  line-height: 24px;
}

.range {
  height: 22px;
  margin-top: 5px;
  background-color: #ffffff;
  color: #000;
  width: 84px;
  font-size: 14px;
}

.chart {
  height: calc(100% - 51px);
}
</style>
