<template>
  <div id="StoreStatistics"></div>
</template>

<script>
import { Chart } from '@antv/g2'

export default {
  name: 'storestatistics',
  data() {
    return {
      tryfirstData: [
        { name: '中心店', 月份: '团队1', 月均降雨量: 18.9 },
        { name: '中心店', 月份: '团队2', 月均降雨量: 28.8 },
        { name: '中心店', 月份: '团队3', 月均降雨量: 39.3 },
        { name: '中心店', 月份: '团队4', 月均降雨量: 81.4 },
        { name: '中心店', 月份: '团队5', 月均降雨量: 47 },
        { name: '中心店', 月份: '团队6', 月均降雨量: 20.3 },
        { name: '中心店', 月份: '团队7', 月均降雨量: 24 },
        { name: '5万品鉴店', 月份: '团队1', 月均降雨量: 18.9 },
        { name: '5万品鉴店', 月份: '团队2', 月均降雨量: 28.8 },
        { name: '5万品鉴店', 月份: '团队3', 月均降雨量: 39.3 },
        { name: '5万品鉴店', 月份: '团队4', 月均降雨量: 81.4 },
        { name: '5万品鉴店', 月份: '团队5', 月均降雨量: 47 },
        { name: '5万品鉴店', 月份: '团队6', 月均降雨量: 20.3 },
        { name: '5万品鉴店', 月份: '团队7', 月均降雨量: 24 },
        { name: '2万品鉴店', 月份: '团队1', 月均降雨量: 12.4 },
        { name: '2万品鉴店', 月份: '团队2', 月均降雨量: 23.2 },
        { name: '2万品鉴店', 月份: '团队3', 月均降雨量: 34.5 },
        { name: '2万品鉴店', 月份: '团队4', 月均降雨量: 99.7 },
        { name: '2万品鉴店', 月份: '团队5', 月均降雨量: 52.6 },
        { name: '2万品鉴店', 月份: '团队6', 月均降雨量: 35.5 },
        { name: '2万品鉴店', 月份: '团队7', 月均降雨量: 37.4 }
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
        container: 'StoreStatistics',
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
