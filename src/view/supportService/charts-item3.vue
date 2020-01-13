<template>
  <div class="card-chart">
    <div class="chart-title">{{chartData.yTitle}}</div>
    <!--<div class="chart-number" style="float: right">{{chartData.sum}}</div>-->
    <div ref="myChart" class="chat-body"></div>
  </div>
</template>

<script>
  export default {
    name: "charts-item3",
    props:['chartData'],
    data() {
      return {

      }
    },
    methods: {
      chartShow() {
        let myChart = this.$echarts.init(this.$refs.myChart)
        // 绘制图表
        myChart.setOption({
          tooltip: {
            trigger: 'axis',
            axisPointer: {            // 坐标轴指示器，坐标轴触发有效
              type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            },
          },
          xAxis: [
            {
              type: 'category',
              data: ['2012', '2013', '2014', '2015', '2016', '2017', '2018'],
              axisLine: {
                show:false,
              },
              axisLabel: {
                show: true,
                textStyle: {
                  color: '#626F86',
                  fontSize: '12'
                },
              },
            }
          ],
          yAxis: [
            {
              type: 'value',
              splitLine: {
                show:false,
              },
              axisLine: {
                show: false,
              },
              axisLabel: {
                show: false,
              },
            }
          ],
          grid: {
            left: '0',
            right: '0',
            bottom: '0',
            top: '16%',
            containLabel: true
          },
          series: {
            type: 'line',
            // highlightPolicy: 'ancestor',
            data: this.chartData.data,
            symbolSize: 8, //拐点大小
            symbol: "circle",//实心点
            label:{
              show:true
            },
            itemStyle: {
              emphasis: {
              },
              normal: {
                color: '#FF784D',
                borderColor:'#2B3648',//拐点边颜色
                borderWidth:2,//拐点边宽度
                lineStyle:{
                  width:2,
                  color:'#FFAB90'
                }
              }
            }
          }
        })
      },
    },
    mounted() {
      this.chartShow()
    }
  }
</script>

<style lang="less" scoped>
  .card-chart {
    width: 324px;
    height: 198px;
    background: rgba(43, 54, 72, 1);
    box-shadow: 0px 0px 4px 2px rgba(0, 0, 0, 0.03);
    border-radius: 5px;
    padding: 18px 18px 8px 15px;
    margin-top: 10px;
    .chat-body {
      width: 290px;
      height: 130px;
      float: left;
      margin-top: 15px;
    }
    .chart-title {
      width: 100%;
      text-align: left;
      font-size: 17px;
      font-weight: 400;
      color: rgba(135, 150, 176, 1);
      line-height: 24px;
    }
    .chart-number {
      width: 30%;
      text-align: right;
      font-size: 36px;
      font-weight: 400;
      color: rgba(175, 189, 209, 1);
      line-height: 44px;
    }
  }
</style>
