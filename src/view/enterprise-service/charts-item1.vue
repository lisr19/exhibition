<template>
  <div class="card-chart">
    <div class="chart-title">{{chartData.yTitle}}</div>
    <!--<div class="chart-number" style="float: right">{{chartData.sum}}</div>-->
    <div ref="myChart" class="chat-body"></div>
  </div>
</template>

<script>
  export default {
    name: "charts-item1",
    props: ['chartData'],
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
              data: this.chartData.xData,
              axisLine: {
                lineStyle: {
                  type: 'solid',
                  color: '#fff',//左边线的颜色
                  width: '0.5'//坐标线的宽度
                }
              },
              axisLabel: {
                show: true,
                textStyle: {
                  color: '#fff',
                  fontSize: '12'
                },
              },
            }
          ],
          yAxis: [
            {
              type: 'value',
              splitNumber: 4,
              splitLine: {
	              show: false,
                lineStyle: {
                  type: 'solid',
                  color: '#fff',//左边线的颜色
                  width: '0.5'//坐标线的宽度
                }
              },
              axisLine: {
                show: true,
	              lineStyle: {
		              type: 'solid',
		              color: '#fff',//左边线的颜色
		              width: '0.5'//坐标线的宽度
	              }
              },
              axisLabel: {
                show: true,
                textStyle: {
                  color: '#fff',
                  fontSize: '12'
                }
              },
            }
          ],
          grid: {
            left: '0',
            right: '0',
            bottom: '0',
            top: '18%',
            containLabel: true
          },
          series: {
            type: 'bar',
            // highlightPolicy: 'ancestor',
            data: this.chartData.data,
            barWidth: '30%',
            label:{
              show:true,
              position:'top',
              color:'#AFBDD1'
            },
            itemStyle: {
              emphasis: {
                barBorderRadius: 10
              },
              normal: {
                color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                  offset: 0,
                  color: '#2DE4FA'
                }, {
                  offset: 1,
                  color: '#77FFB2'
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
    width: 4.22rem;
    height: 2.58rem;
	  background:rgba(167,186,255,0.2);
	  box-shadow:0px 0px 5px 2px rgba(0,0,0,0.03);
    border-radius: 0.05rem;
    padding: 0.36rem 0.26rem 0.13rem 0.36rem;
    margin-top: 0.14rem;
    .chat-body {
      width: 3.5rem;
      height: 1.6rem;
      float: left;
      margin-top: 0.25rem;
    }
    .chart-title {
      width: 100%;
      text-align: left;
      font-size: 0.2rem;
      font-weight: 400;
      color: #ffffff;
      line-height: 0.24rem;
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
