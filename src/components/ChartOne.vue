<template>
  <div id="c3"></div>
</template>

<script>
import { Chart } from '@antv/g2'

export default {
  name: 'chartone',
  data() {
    return {
      msg: '欢迎来到菜鸟教程！1',
      chart: null,
      tryfirstData: [
        { genre: 'Sports', sold: 120 },
        { genre: 'Strategy', sold: 120 },
        { genre: 'Action', sold: 120 },
        { genre: 'Shooter', sold: 120 },
        { genre: 'Other', sold: 120 }
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
        container: 'c3',
        width: 480,
        height: 330
      })
      chart1.data(this.tryfirstData)
      chart1
        .interval()
        .position('genre*sold')
        .color('genre')
      chart1.render()
    }
  },
  // 计算属性
  computed: {}
}
</script>
