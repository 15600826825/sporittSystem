
export default {
  data () {
    return {

    }
  },
  methods: {
    init:function(){
      this.drawLine();
    },
    drawLine:function(){
      // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(document.getElementById('myChart'),'light');
      // 绘制图表
      myChart.setOption({
          title: { text: '在Vue中使用echarts' },
          tooltip: {},
          xAxis: {
              data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
          },
          yAxis: {},
          series: [{
              name: '销量',
              type: 'bar',
              data: [5, 20, 36, 10, 10, 20]
          }]
      });
    }
  },
  mounted(){
    this.init();
  }
}
