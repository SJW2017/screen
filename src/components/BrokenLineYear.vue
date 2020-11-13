<template>
  <div>
    <div class="chart-title">{{ title }}</div>
    <div :id="blid"></div>
  </div>
</template>

<script>
import { Chart } from '@antv/g2'

export default {
  name: 'BrokenLineYear',
  props: ['title', 'blid', 'linedata'],
  data() {
    return {
      data: [
        { team: '团队1', thisyear: 7890, lastyear: 8000 },
        { team: '团队2', thisyear: 8000, lastyear: 7850 },
        { team: '团队3', thisyear: 4586, lastyear: 8020 },
        { team: '团队4', thisyear: 5525, lastyear: 9523 },
        { team: '团队5', thisyear: 2698, lastyear: 1223 },
        { team: '团队6', thisyear: 8546, lastyear: 7542 },
        { team: '团队7', thisyear: 8546, lastyear: 8542 }
      ]
    }
  },
  created() {},
  mounted() {
    this.getLineData()
    this.createLine()
  },
  methods: {
    getLineData() {},
    createLine() {
      const chart = new Chart({
        container: this.blid,
        autoFit: true,
        height: 250
      })
      chart.data(this.linedata)

      chart.scale({
        month: {
          alias: '月份'
        },
        thisyear: {
          alias: '今年',
          min: 0,
          sync: true, // 将 thisyear 字段数值同 lastyear 字段数值进行同步
          nice: true
        },
        lastyear: {
          alias: '去年',
          sync: true, // 将 pv 字段数值同 time 字段数值进行同步
          nice: true
        }
      })
      chart.axis('month', {
        grid: null,
        title: {}
      })
      chart.axis('thisyear', {
        title: {}
      })
      chart.axis('lastyear', {
        title: {}
      })

      chart.tooltip({
        showCrosshairs: true,
        shared: true
      })
      chart
        .line()
        .position('month*thisyear')
        .color('#4FAAEB')
      chart
        .line()
        .position('month*lastyear')
        .color('#9AD681')
        .shape('dash')
      chart.render()
    }
  }
}
</script>

<style>
.chart-title {
  text-align: center;
  margin-bottom: 10px;
}
</style>
