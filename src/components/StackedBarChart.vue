<template>
  <div id="StackedBarChart"></div>
</template>

<script>
import { Chart } from '@antv/g2'

export default {
  name: 'stackedbarchart',
  data() {
    return {
      tryfirstData: [
        { name: '报单占比', 月份: '一月', 月均降雨量: 18.9 },
        { name: '报单占比', 月份: '二月', 月均降雨量: 28.8 },
        { name: '报单占比', 月份: '三月', 月均降雨量: 39.3 },
        { name: '报单占比', 月份: '四月', 月均降雨量: 81.4 },
        { name: '报单占比', 月份: '五月', 月均降雨量: 47 },
        { name: '报单占比', 月份: '六月', 月均降雨量: 20.3 },
        { name: '报单占比', 月份: '七月', 月均降雨量: 24 },
        { name: '报单占比', 月份: '八月', 月均降雨量: 35.6 },
        { name: '报单占比', 月份: '九月', 月均降雨量: 35.6 },
        { name: '报单占比', 月份: '十月', 月均降雨量: 35.6 },
        { name: '报单占比', 月份: '十一月', 月均降雨量: 35.6 },
        { name: '报单占比', 月份: '十二月', 月均降雨量: 35.6 },
        { name: '开店占比', 月份: '一月', 月均降雨量: 18.9 },
        { name: '开店占比', 月份: '二月', 月均降雨量: 28.8 },
        { name: '开店占比', 月份: '三月', 月均降雨量: 39.3 },
        { name: '开店占比', 月份: '四月', 月均降雨量: 81.4 },
        { name: '开店占比', 月份: '五月', 月均降雨量: 47 },
        { name: '开店占比', 月份: '六月', 月均降雨量: 20.3 },
        { name: '开店占比', 月份: '七月', 月均降雨量: 24 },
        { name: '开店占比', 月份: '八月', 月均降雨量: 35.6 },
        { name: '开店占比', 月份: '九月', 月均降雨量: 47 },
        { name: '开店占比', 月份: '十月', 月均降雨量: 20.3 },
        { name: '开店占比', 月份: '十一月', 月均降雨量: 24 },
        { name: '开店占比', 月份: '十二月', 月均降雨量: 35.6 },
        { name: '复销占比', 月份: '一月', 月均降雨量: 12.4 },
        { name: '复销占比', 月份: '二月', 月均降雨量: 23.2 },
        { name: '复销占比', 月份: '三月', 月均降雨量: 34.5 },
        { name: '复销占比', 月份: '四月', 月均降雨量: 99.7 },
        { name: '复销占比', 月份: '五月', 月均降雨量: 52.6 },
        { name: '复销占比', 月份: '六月', 月均降雨量: 35.5 },
        { name: '复销占比', 月份: '七月', 月均降雨量: 37.4 },
        { name: '复销占比', 月份: '八月', 月均降雨量: 42.4 },
        { name: '复销占比', 月份: '九月', 月均降雨量: 52.6 },
        { name: '复销占比', 月份: '十月', 月均降雨量: 35.5 },
        { name: '复销占比', 月份: '十一月', 月均降雨量: 37.4 },
        { name: '复销占比', 月份: '十二月', 月均降雨量: 42.4 },
        { name: '支出占比', 月份: '一月', 月均降雨量: 12.4 },
        { name: '支出占比', 月份: '二月', 月均降雨量: 23.2 },
        { name: '支出占比', 月份: '三月', 月均降雨量: 34.5 },
        { name: '支出占比', 月份: '四月', 月均降雨量: 99.7 },
        { name: '支出占比', 月份: '五月', 月均降雨量: 52.6 },
        { name: '支出占比', 月份: '六月', 月均降雨量: 35.5 },
        { name: '支出占比', 月份: '七月', 月均降雨量: 37.4 },
        { name: '支出占比', 月份: '八月', 月均降雨量: 99.7 },
        { name: '支出占比', 月份: '九月', 月均降雨量: 52.6 },
        { name: '支出占比', 月份: '十月', 月均降雨量: 35.5 },
        { name: '支出占比', 月份: '十一月', 月均降雨量: 37.4 },
        { name: '支出占比', 月份: '十二月', 月均降雨量: 42.4 }
      ]
    }
  },
  // 生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  // 生命周期 - 载入后, Vue 实例挂载到实际的 DOM 操作完成，一般在该过程进行 Ajax 交互
  mounted() {
    this.tryfirst()
  },
  // 方法集合
  methods: {
    tryfirst() {
      const chart1 = new Chart({
        container: 'StackedBarChart',
        autoFit: true,
        height: 320
      })
      chart1.data(this.tryfirstData)
      chart1.scale('月均降雨量', {
        nice: true
      })
      chart1.tooltip({
        shared: true,
        showMarkers: false
      })
      chart1
        .interval()
        .position('月份*月均降雨量')
        .color('name')
        .adjust('stack')
      chart1.interaction('active-region')
      chart1.render()
    }
  },
  // 计算属性
  computed: {}
}
</script>
