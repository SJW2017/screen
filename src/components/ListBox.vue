<template>
  <div>
    <a-row class="list-header">
      {{ title }}
    </a-row>
    <a-row :gutter="16">
      <a-col :span="4">排名</a-col>
      <a-col :span="4">省份</a-col>
      <a-col :span="4">数量</a-col>
      <a-col :span="8">占比</a-col>
      <a-col :span="4"></a-col>
    </a-row>
    <a-list>
      <RecycleScroller
        v-infinite-scroll="handleInfiniteOnLoad"
        style="height: 210px"
        :items="dataList"
        :item-size="30"
        key-field="id"
        :infinite-scroll-disabled="busy"
        :infinite-scroll-distance="10"
      >
        <a-list-item slot-scope="{ item }">
          <a-col>
            <i class="list-sort">{{ item.sort }}</i>
          </a-col>
          <a-col>{{ item.province }}</a-col>
          <a-col>{{ item.nub }}</a-col>
          <a-col :span="8">
            <a-progress
              v-if="item.index == 0"
              :percent="item.percent"
              strokeColor="#ff3a30"
              status="active"
            />
            <a-progress
              v-if="item.index == 1"
              :percent="item.percent"
              strokeColor="#ff9502"
              status="active"
            />
            <a-progress
              v-if="item.index == 2"
              :percent="item.percent"
              strokeColor="#00bb7a"
              status="active"
            />
            <a-progress
              v-if="item.index > 2"
              :percent="item.percent"
              status="active"
            />
          </a-col>
          <slot name="more">
            <a-col>
              <!-- <a-button type="dashed" size="small"> 详情 </a-button> -->
              <a-button type="link" @click="showModal">
                详情
              </a-button>
            </a-col>
          </slot>
        </a-list-item>
      </RecycleScroller>
      <a-spin v-if="loading" class="demo-loading" />
      <!-- <a-modal
        :title="title"
        :visible="visible"
        :confirm-loading="confirmLoading"
        @cancel="handleCancel"
        :footer="null"
      >
        <p>{{ title }}</p>
      </a-modal> -->
      <order-dialog :visible="orderVisible" @cancel="handleCancel" />
      <declaration-dialog
        :visible="declarationVisible"
        @cancel="handleCancel"
      />
      <store-dialog :visible="storeVisible" @cancel="handleCancel" />
    </a-list>
  </div>
</template>

<script>
import infiniteScroll from 'vue-infinite-scroll'
import { RecycleScroller } from 'vue-virtual-scroller'
import 'vue-virtual-scroller/dist/vue-virtual-scroller.css'
export default {
  name: 'ListBox',
  directives: { infiniteScroll },
  components: {
    RecycleScroller
  },
  props: ['title', 'listdata', 'type'],
  data() {
    return {
      data: [],
      loading: false,
      busy: false,
      orderVisible: false,
      declarationVisible: false,
      storeVisible: false,
      confirmLoading: false
    }
  },
  beforeMount() {
    // 改为list
    this.dataList = this.listdata.map((item, index) => ({ ...item, index }))
  },
  methods: {
    handleInfiniteOnLoad() {
      const data = this.data
      this.loading = false
      if (data.length > 100) {
        this.$message.warning('Infinite List loaded all')
        this.busy = true
        this.loading = false
      }
    },
    showModal() {
      if (this.type === 'order') {
        this.orderVisible = true
      } else if (this.type === 'declaration') {
        this.declarationVisible = true
      } else if (this.type === 'store') {
        this.storeVisible = true
      }
    },
    handleCancel() {
      if (this.type === 'order') {
        this.orderVisible = false
        console.log('orderVisible')
      } else if (this.type === 'declaration') {
        this.declarationVisible = false
        console.log('declarationVisible')
      } else if (this.type === 'store') {
        this.storeVisible = false
        console.log('storeVisible')
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
  white-space: nowrap;
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
