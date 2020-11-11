<template>
  <a-config-provider :locale="locale">
    <div id="app">
      <!--  上部分 -->
      <a-row type="flex" justify="space-around" align="top" :gutter="16">
        <!-- top-left -->
        <a-col :span="7">
          <div class="border-light top-box">
            <!-- 订货排行榜 -->
            <div class="list-box-top">
              <ListBox></ListBox>
            </div>
            <a-row class="list-box-bottom">
              <!-- 库存预警 -->
              <a-col :span="9">
                <ListBoxProduct></ListBoxProduct>
              </a-col>
              <!-- 产品排行榜 -->
              <a-col :span="15" class="left-box-right">
                <vue-scroll :ops="ops" style="width:100%;height:100%">
                  <BarChartx></BarChartx>
                </vue-scroll>
              </a-col>
            </a-row>
          </div>
        </a-col>
        <!-- top-middle -->
        <a-col :span="10" class="flex-v">
          <h1>创思奇及凤凰商城数据大屏</h1>
          <div class="search">
            <a-range-picker size="small" style="width: 240px" />
            <!-- <a-cascader
              :options="options"
              placeholder="选择省市区"
              style="width: 240px"
              size="small"
            /> -->
            <a-button type="primary" icon="search" size="small">
              Search
            </a-button>
          </div>
          <div class="data-nub flex-x">
            <div class="data-nub-box flex-v">
              <p>新增订货</p>
              <p><i class="i-money">￥</i>525555</p>
            </div>
            <div class="data-nub-box flex-v">
              <p>新增报单</p>
              <p>525</p>
            </div>
            <div class="data-nub-box flex-v">
              <p>新增店铺</p>
              <p>525</p>
            </div>
          </div>
          <MapChart></MapChart>
        </a-col>
        <!-- top-right -->
        <a-col :span="7">
          <div class="top-box">
            <!-- 报单排行榜 -->
            <div class="margin-b-10 border-light">
              <ListBoxSorder></ListBoxSorder>
            </div>
            <!-- 复销排行榜 -->
            <div class="right-box-bottom border-light">
              <ListBoxStore></ListBoxStore>
            </div>
            <!-- <div id="c1"></div>
            <div id="c2"></div> -->
          </div>
        </a-col>
      </a-row>
      <!-- 下部分 -->
      <a-row>
        <a-col :span="12">
          <div class="border-light bottom-box padding-r-2 ">
            <a-col :span="14">
              <StackedBarChart></StackedBarChart>
            </a-col>
            <a-col :span="10"></a-col>
          </div>
        </a-col>
        <a-col :span="12">
          <a-row>
            <a-col :span="12">
              <StoreStatistics></StoreStatistics>
            </a-col>
            <a-col :span="12">
              <BrokenLine></BrokenLine>
            </a-col>
          </a-row>
        </a-col>
      </a-row>
    </div>
  </a-config-provider>
</template>

<script>
import Hello from './components/Hello'
import ChartOne from './components/ChartOne'
import StackedBarChart from './components/StackedBarChart'
import StoreStatistics from './components/StoreStatistics'
import BrokenLine from './components/BrokenLine'
import MapChart from './components/MapChart'
import PieChart from './components/PieChart'
import Instrument from './components/Instrument'
import BarChartx from './components/BarChartx'
import ListBox from './components/ListBox'
import ListBoxProduct from './components/ListBoxProduct'
import ListBoxSorder from './components/ListBoxSorder'
import ListBoxStore from './components/ListBoxStore'

import zhCN from 'ant-design-vue/lib/locale-provider/zh_CN'
import moment from 'moment'
import 'moment/locale/zh-cn'
// 两种引用方法
import * as G2 from '@antv/g2'
import { Chart } from '@antv/g2'

moment.locale('zh-cn')
export default {
  name: 'app',
  components: {
    Hello,
    ChartOne,
    MapChart,
    PieChart,
    Instrument,
    BarChartx,
    ListBox,
    ListBoxProduct,
    ListBoxSorder,
    ListBoxStore,
    StackedBarChart,
    StoreStatistics,
    BrokenLine
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
      ],
      ops: {
        vuescroll: {},
        scrollPanel: {},
        rail: {
          keepShow: true
        },
        bar: {
          hoverStyle: true,
          onlyShowBarOnScroll: false,
          background: '#F5F5F5',
          opacity: 0.5,
          'overflow-x': 'hidden'
        }
      }
    }
  },
  // 生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  // 生命周期 - 载入后, Vue 实例挂载到实际的 DOM 操作完成，一般在该过程进行 Ajax 交互
  mounted() {
    // this.initComponent()
    // this.tryfirst()
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
::-webkit-scrollbar {
  /*滚动条整体样式*/
  width: 2px; /*高宽分别对应横竖滚动条的尺寸*/
  height: 1px;
}
::-webkit-scrollbar-thumb {
  /*滚动条里面小方块*/
  border-radius: 10px;
  box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.1);
  background: rgba(255, 255, 255, 0.2);
}
::-webkit-scrollbar-track {
  /*滚动条里面轨道*/
  box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  background: rgba(255, 255, 255, 0);
}
.__bar-is-vertical {
  right: -1px !important;
}
.__bar-is-horizontal {
  display: none !important;
}
h1 {
  color: #fff;
}
.margin-b-10 {
  margin-bottom: 10px;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  padding: 10px;
  padding: 10px 20px;
  background: #000;
  /* height: 100%; */
  color: #fff;
}
.bottom-box {
  height: 340px;
}
.top-box {
  height: 570px;
  margin-bottom: 10px;
}
.padding-r-2 {
  padding-right: 2px !important;
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
.flex-x {
  display: -webkit-flex;
  display: flex;
  justify-content: space-around;
}
.overflowy {
  overflow: hidden;
  overflow-y: auto;
}
.i-money {
  color: #fc0;
  font-style: normal;
}
.search {
  margin-bottom: 10px;
}
.data-nub {
  width: 70%;
  text-align: center;
  margin: 20px 0;
}
.data-nub-box {
  width: 120px;
  height: 80px;
  border: rgba(255, 255, 255, 0.6) solid 1px;
  border-radius: 10px;
  box-shadow: 0 0 8px #ddd;
  -moz-box-shadow: 0 0 8px #ddd;
  -webkit-box-shadow: 0 0 8px #ddd;
  justify-content: space-around;
}
.data-nub-box p {
  line-height: 1em;
}
.data-nub-box p:nth-child(1) {
  margin-top: 20px;
  margin-bottom: 10px;
}
.data-nub-box p:nth-child(2) {
  font-size: 20px;
  font-weight: 700;
}
.list-box-top {
  width: 100%;
  height: 48%;
}
.list-box-bottom {
  width: 100%;
  height: 52%;
}
.left-box-right {
  height: 100%;
}
</style>
