<template>
  <div>
    <a-row class="list-header">
      库存预警
    </a-row>
    <a-row>
      <a-col :span="8">排名</a-col>
      <a-col :span="8">产品</a-col>
      <a-col :span="8">存库</a-col>
    </a-row>
    <a-list>
      <RecycleScroller
        v-infinite-scroll="handleInfiniteOnLoad"
        style="height: 240px"
        :items="dataList"
        :item-size="30"
        key-field="id"
        :infinite-scroll-disabled="busy"
        :infinite-scroll-distance="10"
      >
        <a-list-item slot-scope="{ item }">
          <a-col :span="8">
            <i class="list-sort">{{ item.sort }}</i>
          </a-col>
          <a-col :span="8">{{ item.province }}</a-col>
          <a-col :span="8">{{ item.nub }}</a-col>
        </a-list-item>
      </RecycleScroller>
      <a-spin v-if="loading" class="demo-loading" />
    </a-list>
  </div>
</template>

<script>
import reqwest from 'reqwest'
import infiniteScroll from 'vue-infinite-scroll'
import { RecycleScroller } from 'vue-virtual-scroller'
import 'vue-virtual-scroller/dist/vue-virtual-scroller.css'
const fakeDataUrl =
  'https://randomuser.me/api/?results=10&inc=name,gender,email,nat&noinfo'
export default {
  name: 'listboxproduct',
  directives: { infiniteScroll },
  components: {
    RecycleScroller
  },
  data() {
    return {
      data: [],
      loading: false,
      busy: false,
      dataList: [
        { id: 1, sort: 1, province: '河北省', nub: '9960', percent: 95 },
        { id: 2, sort: 2, province: '河北省', nub: '9960', percent: 80 },
        { id: 3, sort: 3, province: '河北省', nub: '9960', percent: 65 },
        { id: 4, sort: 4, province: '河北省', nub: '9960', percent: 62 },
        { id: 5, sort: 5, province: '河北省', nub: '9960', percent: 58 },
        { id: 6, sort: 6, province: '河北省', nub: '9960', percent: 50 },
        { id: 7, sort: 7, province: '河北省', nub: '9960', percent: 48 },
        { id: 8, sort: 8, province: '河北省', nub: '9960', percent: 40 },
        { id: 9, sort: 9, province: '河北省', nub: '9960', percent: 38 },
        { id: 10, sort: 10, province: '河北省', nub: '9960', percent: 30 },
        { id: 11, sort: 11, province: '河北省', nub: '9960', percent: 28 },
        { id: 12, sort: 12, province: '河北省', nub: '9960', percent: 20 },
        { id: 1000, sort: 1000, province: '河北省', nub: '9960', percent: 10 }
      ]
    }
  },
  beforeMount() {
    // 改为list
    this.dataList = this.dataList.map((item, index) => ({ ...item, index }))
    // this.fetchData((res) => {
    //   this.data = res.results.map((item, index) => ({ ...item, index }))
    // })
  },
  methods: {
    fetchData(callback) {
      reqwest({
        url: fakeDataUrl,
        type: 'json',
        method: 'get',
        contentType: 'application/json',
        success: (res) => {
          callback(res)
        }
      })
    },
    handleInfiniteOnLoad() {
      const data = this.data
      this.loading = false
      if (data.length > 100) {
        this.$message.warning('Infinite List loaded all')
        this.busy = true
        this.loading = false
      }
    }
  }
}
</script>
<style>
.demo-loading {
  position: absolute;
  bottom: 40px;
  width: 100%;
  text-align: center;
}
.ant-list {
  color: #fff;
}
.list-header {
  font-size: 14px;
  font-weight: 700;
  line-height: 1.8em;
  border-bottom: #fff solid 1px;
}
.list-sort {
  display: inline-block;
  width: 15px;
  height: 15px;
  border-radius: 50%;
  font-size: 12px;
  padding: 1px 0;
  line-height: 15px;
  text-align: center;
}
.vue-recycle-scroller__item-wrapper
  .vue-recycle-scroller__item-view:nth-of-type(1)
  .list-sort {
  background-color: #ff3a30;
}
.vue-recycle-scroller__item-wrapper
  .vue-recycle-scroller__item-view:nth-of-type(2)
  .list-sort {
  background-color: #ff9502;
}
.vue-recycle-scroller__item-wrapper
  .vue-recycle-scroller__item-view:nth-of-type(3)
  .list-sort {
  background-color: #00bb7a;
}
.ant-progress-text {
  color: #fff;
}
.ant-btn-link {
  color: rgba(255, 255, 255, 0.5);
}
</style>
