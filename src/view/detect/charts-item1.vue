<template>
  <div class="card-chart">
    <div class="chart-title">{{chartData.yTitle}}</div>
    <div ref="myChart" class="chat-body"></div>
  </div>
</template>

<script>
  export default {
    name: "charts-item1",
    props: ['chartData','percent'],
    data() {
      return {}
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
            }
          },
          xAxis: [
            {
              type: 'category',
              name: '年',
              nameTextStyle:{
                color:"#fff",
                fontSize:14,
                fontWeight:500,
                padding:-2
              },
              data: this.chartData.xData,
              axisLine: {
                lineStyle: {
                  type: 'solid',
                  color: '#fff',//左边线的颜色
                  width: '1'//坐标线的宽度
                }
              },
              axisLabel: {
                show: true,
                textStyle: {
                  color: '#fff',
                  fontSize: '13',
                  fontWeight:500,
                },
              },
            }
          ],
          yAxis: [
            {
              type: 'value',
	            axisTick: { //x轴刻度
		            show:false,  //是否显示刻度
	            },
              splitNumber: 4,
              splitLine: {
                lineStyle: {
                  type: 'solid',
                  color: '#fff',//左边线的颜色
                  width: '1'//坐标线的宽度
                }
              },
              axisLine: {
                show: false,
              },
              axisLabel: {
                show: true,
                formatter: this.percent?'{value} %':'{value}',
                textStyle: {
                  color: '#fff',
                  fontSize: '13',
                  fontWeight:500,
                }
              },
            }
          ],
          grid: {
            left: '0',
            right: '8%',
            bottom: '0',
            top: '18%',
            containLabel: true
          },
          series: {
            type: 'bar',
            // highlightPolicy: 'ancestor',
            data: this.chartData.data,
            barWidth: '25%',
            label:{
              show:true,
              position:'top',
              color:'#fff'
            },
            itemStyle: {
              emphasis: {
                barBorderRadius: 10
              },
              normal: {
                color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                  offset: 0,
                  color: '#2DE4FA',
                }, {
                  offset: 1,
                  color: '#7CA8FF',
                }]),
                barBorderRadius: 10
              }
            }
          }
        })
      },
    },
    mounted() {
      this.chartShow()
    },
    updated(){
      this.chartShow()
    },
  }
</script>

<style lang="less" scoped>
  .card-chart {
    border-radius: 0.05rem;
    padding:0.20rem;
    margin-top: 0.15rem;
    .chat-body {
      width:5.40rem;
      height:3.00rem;
      float: left;
      margin-top: 0.13rem;
    }
    .chart-title {
      width: 100%;
      text-align: left;
      font-size: 0.25rem;
      font-weight: 400;
      color:#ffffff;
      line-height: 0.36rem;
    }
    .chart-number {
      width: 30%;
      text-align: right;
      font-size: 0.36rem;
      font-weight: 400;
      color: rgba(175, 189, 209, 1);
      line-height: 0.44rem;
    }
  }
</style>
