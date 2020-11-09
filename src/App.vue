<template>
  <div id="app">
    <!--  上部分 -->
    <a-row type="flex" justify="space-around" align="top" :gutter="16">
      <!-- top-left -->
      <a-col :span="7">
        <div class="border-light">
          <div id="c1"></div>
          <div id="c2"></div>
        </div>
      </a-col>
      <!-- top-middle -->
      <a-col :span="10" class="flex-v">
        <h1>创思奇及凤凰商城数据大屏</h1>
        <div class="search">
          <a-range-picker size="small" :locale="locale" />
          <a-cascader
            :options="options"
            placeholder="选择省市区"
            style="width: 240px"
            size="small"
          />
        </div>
        <MapChart></MapChart>
      </a-col>
      <!-- top-right -->
      <a-col :span="7">
        <div class="border-light">
          <ChartOne></ChartOne>
          <PieChart></PieChart>
        </div>
      </a-col>
    </a-row>
    <!-- 下部分 -->
    <a-row>
      <a-col> </a-col>
    </a-row>
  </div>
</template>

<script>
import Hello from './components/Hello'
import ChartOne from './components/ChartOne'
import MapChart from './components/MapChart'
import PieChart from './components/PieChart'
import Instrument from './components/Instrument'
import zhCN from 'ant-design-vue/lib/locale-provider/zh_CN'
// 两种引用方法
import * as G2 from '@antv/g2'
import { Chart } from '@antv/g2'

export default {
  name: 'app',
  components: {
    Hello,
    ChartOne,
    MapChart,
    PieChart,
    Instrument
  },
  // 生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  // 生命周期 - 载入后, Vue 实例挂载到实际的 DOM 操作完成，一般在该过程进行 Ajax 交互
  mounted() {
    this.initComponent()
    this.tryfirst()
  },
  data() {
    return {
      locale: zhCN,
      msg: '',
      chart: null,
      data: [
        { genre: 'Sports', sold: 275 },
        { genre: 'Strategy', sold: 115 },
        { genre: 'Action', sold: 120 },
        { genre: 'Shooter', sold: 350 },
        { genre: 'Other', sold: 150 }
      ],
      tryfirstData: [
        { genre: 'Sports', sold: 100 },
        { genre: 'Strategy', sold: 115 },
        { genre: 'Action', sold: 100 },
        { genre: 'Shooter', sold: 300 },
        { genre: 'Other', sold: 100 }
      ],
      options: [
        {
          value: 'hebei',
          label: '河北省',
          children: [
            {
              value: 'tangshan',
              label: '唐山市',
              children: [
                {
                  value: 'lubei',
                  label: '路北区'
                }
              ]
            }
          ]
        },
        {
          value: 'jiangsu',
          label: '内蒙古',
          children: [
            {
              value: 'nanjing',
              label: '呼和浩特',
              children: [
                {
                  value: 'zhonghuamen',
                  label: '赛罕区'
                }
              ]
            }
          ]
        }
      ]
    }
  },
  // 方法集合
  methods: {
    initComponent() {
      // 此函数为个人习惯,喜欢创建一个初始化的函数
      this.msg = 'vue-cli案例'
      const chart = new G2.Chart({
        container: 'c1',
        width: 300,
        height: 150
      })
      chart.data(this.data)
      chart
        .interval()
        .position('genre*sold')
        .color('genre')
      this.chart = chart
      this.chart.render()
    },
    tryfirst() {
      const chart1 = new Chart({
        container: 'c2',
        width: 300,
        height: 150
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
<!-- 样式代码 -->
<style>
h1 {
  color: #fff;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  padding: 10px;
  padding: 10px 20px;
  background: #000;
  height: 100%;
  color: #fff;
}
.border-light {
  border: rgba(255, 255, 255, 0.6) solid 1px;
  border-radius: 10px;
  box-shadow: 0 0 8px #ddd;
  -moz-box-shadow: 0 0 8px #ddd;
  -webkit-box-shadow: 0 0 8px #ddd;
  padding: 10px;
}
.border-light:hover {
  border: #fc0 solid 1px;
  box-shadow: 0 0 8px #ddd;
  -moz-box-shadow: 0 0 8px #ddd;
  -webkit-box-shadow: 0 0 8px #ddd;
}
.flex-v {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.search {
  margin-bottom: 10px;
}
</style>
