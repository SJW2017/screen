<template>
  <!-- 用emit方法触发父级方法，自己本身不需要处理方法
  表单校验的时候，可以表单校验成功了之后再去触发父元素方法  -->
  <a-modal
    :visible="visible"
    title="店铺详情"
    :footer="null"
    width="65%"
    @cancel="
      () => {
        $emit('cancel')
      }
    "
  >
    <div class="search">
      <a-range-picker size="small" style="width: 240px" />
      <a-cascader
        :options="options"
        placeholder="选择省市区"
        style="width: 240px"
        size="small"
      />
      <a-button type="primary" icon="search" size="small">
        Search
      </a-button>
    </div>
    <a-row :gutter="16">
      <a-col :span="12">
        <broken-line-year
          title="2020年河北省订货量折线图"
          blid="bl2"
          :linedata="lineData"
        ></broken-line-year>
      </a-col>
      <a-col :span="12">
        <list-box title="河北省各市订货总量排行榜" :listdata="declarationData">
          <div slot="more"></div>
        </list-box>
      </a-col>
    </a-row>
    <a-row :gutter="16">
      <a-col :span="12">
        <list-box
          title="河北省各单品订货总量排行榜"
          :listdata="declarationData"
        >
          <div slot="more"></div>
        </list-box>
      </a-col>
      <a-col :span="12">
        <list-box title="河北省各店铺订货量排行榜" :listdata="declarationData">
          <div slot="more"></div>
        </list-box>
      </a-col>
    </a-row>
    <!-- <a-form layout="vertical" :form="form">
      <a-form-item label="Title">
        <a-input v-decorator="['title']" />
      </a-form-item>
      <a-form-item label="Description">
        <a-input type="textarea" v-decorator="['description']" />
      </a-form-item>
      <a-form-item class="collection-create-form_last-form-item">
        <a-radio-group v-decorator="['modifier', { initialValue: 'private' }]">
          <a-radio value="public">Public</a-radio>
          <a-radio value="private">Private</a-radio>
        </a-radio-group>
      </a-form-item>
    </a-form> -->
  </a-modal>
</template>

<script>
export default {
  name: 'StoreDialog',
  props: ['visible'],
  data() {
    return {
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
      declarationData: [
        { id: 1, sort: 1, province: '河北省', nub: '10000', percent: 100 },
        { id: 2, sort: 2, province: '河北省', nub: '9999', percent: 80 },
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
        { id: 13, sort: 13, province: '河北省', nub: '9960', percent: 20 },
        { id: 14, sort: 14, province: '河北省', nub: '9960', percent: 20 },
        { id: 15, sort: 15, province: '河北省', nub: '9960', percent: 20 },
        { id: 100, sort: 1000, province: '河北省', nub: '9960', percent: 10 },
        { id: 1000, sort: 1000, province: '河北省', nub: '9960', percent: 10 }
      ],
      lineData: [
        { month: '一月', thisyear: 18.9, lastyear: 28.6 },
        { month: '二月', thisyear: 28.8, lastyear: 28.6 },
        { month: '三月', thisyear: 39.3, lastyear: 28.6 },
        { month: '四月', thisyear: 81.4, lastyear: 28.6 },
        { month: '五月', thisyear: 47, lastyear: 28.6 },
        { month: '六月', thisyear: 20.3, lastyear: 28.6 },
        { month: '七月', thisyear: 24, lastyear: 28.6 },
        { month: '八月', thisyear: 35.6, lastyear: 27.6 },
        { month: '九月', thisyear: 35.6, lastyear: 28.6 },
        { month: '十月', thisyear: 35.6, lastyear: 28.6 },
        { month: '十一月', thisyear: 35.6, lastyear: 28.6 },
        { month: '十二月', thisyear: 35.6, lastyear: 28.6 }
      ]
    }
  }
}
</script>
<style>
.bottom-list-box {
  margin-bottom: 20px;
}
.ant-modal-body .ant-list {
  color: rgba(0, 0, 0, 0.8);
}
.ant-modal-body .ant-btn-link {
  color: rgba(0, 0, 0, 0.6);
}
.ant-modal-body .ant-progress-text {
  color: rgba(0, 0, 0, 0.6);
}
</style>
