<template>
  <div id="instrument"></div>
</template>

<script>
import { Chart, registerShape } from '@antv/g2'

export default {
  name: 'instrument',
  data() {
    return {}
  },
  created() {},
  mounted() {
    this.makeShape()
  },
  methods: {
    makeShape() {
      registerShape('point', 'pointer', {
        draw(cfg, group) {
          const point = cfg.points[0]
          const center = this.parsePoint({ x: 0, y: 0 })
          const target = this.parsePoint({ x: point.x, y: 0.9 })
          const dirVec = { x: center.x - target.x, y: center.y - target.y }
          // normalize
          const length = Math.sqrt(
            dirVec.x * dirVec.x + dirVec.y * dirVec.y
          )
          dirVec.x *= 1 / length
          dirVec.y *= 1 / length
          // rotate dirVector by -90 and scale
          const angle1 = -Math.PI / 2
          const xx =
            Math.cos(angle1) * dirVec.x - Math.sin(angle1) * dirVec.y
          const yy =
            Math.sin(angle1) * dirVec.x + Math.cos(angle1) * dirVec.y
          // rotate dirVector by 90 and scale
          const angle2 = Math.PI / 2
          const xy =
            Math.cos(angle2) * dirVec.x - Math.sin(angle2) * dirVec.y
          const yx =
            Math.sin(angle2) * dirVec.x + Math.cos(angle2) * dirVec.y
          // polygon vertex
          const path = [
            ['M', target.x + xx * 1, target.y + yy * 1],
            ['L', center.x + xx * 3, center.y + yy * 3],
            ['L', center.x + xy * 3, center.y + yx * 3],
            ['L', target.x + xy * 1, target.y + yx * 1],
            ['Z']
          ]
          const tick = group.addShape('path', {
            attrs: {
              path,
              fill: cfg.color
            }
          })
          return tick
        }
      })

      const data = [
        { type: '新注册', value: 0.42 },
        { type: '老用户', value: 0.68 },
        { type: '新订单用户', value: 0.21 }
      ]
      const chart = new Chart({
        container: 'instrument',
        autoFit: true,
        height: 400
      })
      chart.data(data)
      chart.coordinate('polar', {
        startAngle: (-10 / 8) * Math.PI,
        endAngle: (2 / 8) * Math.PI,
        radius: 0.75
      })
      chart.scale('value', {
        min: 0,
        max: 1,
        tickInterval: 1
      })
      chart.axis(false)
      chart.facet('rect', {
        fields: ['type'],
        showTitle: false,
        eachView: function eachView(view, facet) {
          const data = facet.data[0]
          // 指针
          view
            .point()
            .position('value*1')
            .shape('pointer')
            .color('#d8d8d8')
            .animate({
              appear: {
                animation: 'fade-in'
              }
            })
          // 仪表盘背景
          view.annotation().arc({
            top: false,
            start: [0, 1],
            end: [1, 1],
            style: {
              stroke: '#ebedf0',
              lineWidth: 10
            }
          })
          // 仪表盘前景
          view.annotation().arc({
            start: [0, 1],
            end: [data.value, 1],
            style: {
              stroke: '#1890ff',
              lineWidth: 10
            }
          })
          // 仪表盘信息
          const percent = parseInt(data.value * 100, 10)

          view.annotation().text({
            position: ['50%', '70%'],
            content: data.type,
            style: {
              fontSize: 14,
              fill: '#8c8c8c',
              fontWeight: 300,
              textAlign: 'center'
            },
            offsetX: 0
          })
          view.annotation().text({
            position: ['50%', '75%'],
            content: `${percent}%`,
            style: {
              fontSize: 34,
              fill: '#000',
              fontWeight: 500,
              textAlign: 'center'
            },
            offsetX: 0,
            offsetY: 10
          })
        }
      })
      chart.render()
    }
  }
}
</script>
