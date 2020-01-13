<template>
  <div class="card-chart">
    <div class="card-legend">
      <div class="card-legend-item" v-for="(item,index) in data">
        <div class="card-legend-icon" :style="'background-color:'+ color[index]"></div>
        <div class="card-legend-text">{{item.name}}</div>
        <div class="card-legend-number">{{item.value}}</div>
      </div>
    </div>
    <div class="chart-box">
      <div class="chart-title">{{title}}</div>
      <div ref="myChart" class="chat-body"></div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "charts-item2",
    props: ['title','data'],
    data() {
      return {
	      color: ['#2DE4FA', '#77FFB2', '#7CA8FF'],
      }
    },
    methods: {
      chartShow() {
        let myChart = this.$echarts.init(this.$refs.myChart)
        // 绘制图表
        myChart.setOption({
          tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b}: {c} ({d}%)"
          },
          color: ['#2DE4FA', '#77FFB2', '#7CA8FF'],
          grid: {
            left: '0',
            right: '0',
            bottom: '0',
            containLabel: true
          },
          series: [
            {
              name: this.title,
              type: 'pie',
              radius: ['55%', '85%'],
              avoidLabelOverlap: false,
              label: {
                normal: {
                  show: false,
                  position: 'center'
                },
                emphasis: {
                  show: true,
                  textStyle: {
                    fontSize: '14',
                    fontWeight: 'bold'
                  }
                }
              },
              labelLine: {
                normal: {
                  show: false
                }
              },
              data: this.data
            },

          ]
        })
      },
    },
    mounted() {
      this.chartShow()
    },
    updated(){
      this.chartShow()
    }
  }
</script>

<style lang="less" scoped>
  .card-chart {
    width: 4.46rem;
	  background:rgba(167,186,255,0.3);
	  box-shadow:0px 0px 5px 2px rgba(0,0,0,0.03);
    border-radius: 0.05rem;
    display: flex;
    padding: 0.18rem;
    margin-top: 0.13rem;
    .chat-body {
      width: 1.87rem;
      height: 1.87rem;
      margin-top: 0.15rem;
    }
    .chart-title {
      height:0.30rem;
      font-size: 0.22rem;
      font-weight: 400;
      color:#ffffff;
      line-height: 0.3rem;
      overflow: hidden;
    }
    .card-legend {
      width: 1.50rem;
      height: 100%;
      text-align: left;
      overflow: hidden;
      margin-top: 0.08rem;
      .card-legend-item {
        display: flex;
        align-items: center;
        width: 100%;
        margin-top: 0.6rem;
        position: relative;
        .card-legend-icon {
          width: 0.13rem;
          height: 0.13rem;
          border-radius: 0.02rem;
        }
        .card-legend-text {
          font-size: 0.16rem;
          font-weight: 600;
          line-height: 0.2rem;
          margin-left: 0.2rem;
          color: #cccccc;
        }
        .card-legend-number {
          position: absolute;
          left: 0.2rem;
          top: 0.24rem;
          font-size: 0.28rem;
          font-weight: 400;
          color: #ffffff;
          line-height: 0.26rem;
          margin-left: 0.18rem;
          margin-top: 0.02rem;
        }
      }
      .card-legend-item:first-child{
        margin-top: 0;
      }

    }
    .chart-box{
      text-align: right;
      flex: 2;
      display: flex;
      align-items: flex-end;
      justify-content: normal;
      flex-direction: column;
    }
  }
</style>
