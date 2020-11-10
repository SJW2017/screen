<template>
  <div id="barchartx"></div>
</template>

<script>
import { Chart } from '@antv/g2'

export default {
  name: 'barchartx',
  data() {
    return {
      msg: '欢迎来到菜鸟教程！1',
      chart: null,
      tryfirstData: [
        { type: '汽车', value: 34 },
        { type: '建材家居', value: 85 },
        { type: '住宿旅游', value: 103 },
        { type: '交通运输与仓储邮政', value: 142 },
        { type: '建筑房地产', value: 251 },
        { type: '教育', value: 367 },
        { type: 'IT 通讯电子', value: 491 },
        { type: '社会公共管理', value: 672 },
        { type: '医疗卫生', value: 868 },
        { type: '金融保险', value: 1234 }
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
        container: 'barchartx',
        autoFit: true,
        height: 500
      })
      chart1.data(this.tryfirstData)
      chart1.scale({
        value: {
          max: 1400,
          min: 0,
          alias: '销量（百万）'
        }
      })
      chart1.axis('type', {
        title: null,
        tickLine: null,
        line: null
      })
      chart1.axis('value', {
        label: null,
        title: {
          offset: 30,
          style: {
            fontSize: 12,
            fontWeight: 300
          }
        }
      })
      chart1.legend(false)
      chart1.coordinate().transpose()
      chart1
        .interval()
        .position('type*value')
        .size(26)
        .label('value', {
          style: {
            fill: '#8d8d8d'
          },
          offset: 10
        })
      chart1.interaction('element-active')
      chart1.render()
    }
  },
  // 计算属性
  computed: {}
}
</script>
