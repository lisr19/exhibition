<template>
  <div class="card-chart">
    <div class="card-legend" style="float: left">
      <div class="card-legend-item" v-for="(item,index) in data" :style="'marginTop:'+((172-data.length*48)/3-1)/100+'rem'">
        <div class="card-legend-icon" :style="'background-color:'+ color[index]"></div>
        <div class="card-legend-text">{{item.name}}</div>
        <div class="card-legend-number">{{item.value}}</div>
      </div>
    </div>
    <div class="chart-title" style="float: right;">{{title}}</div>
    <div ref="myChart" class="chat-body" style="float: right"></div>
  </div>
</template>

<script>
  export default {
    name: "charts-item2",
    props: ['title','data'],
    data() {
      return {
        color:['#7CA8FF','#77FFB2','#2DE4FA']
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
	        color:['#7CA8FF','#77FFB2','#2DE4FA'],
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
              radius: ['55%', '80%'],
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
    width: 4.22rem;
    height: 2.58rem;
	  background:rgba(167,186,255,0.2);
	  box-shadow:0px 0px 5px 2px rgba(0,0,0,0.03);
    border-radius: 0.05rem;
    padding: 0.36rem 0.26rem 0.13rem 0.36rem;
    margin-top: 0.14rem;
    .chat-body {
      width: 1.85rem;
      height: 1.85rem;
      float: right;
      margin-top: 0.1rem;
    }
    .chart-title {
      width: 2rem;
      height: 0.24rem;
      font-size: 0.18rem;
      font-weight: 400;
      color: #ffffff;
      line-height: 0.24rem;
      overflow: hidden;
    }
    .chart-number {
      font-size: 0.36rem;
      font-weight: 400;
      color: rgba(175, 189, 209, 1);
      line-height: 0.44rem;
    }
    .card-legend {
      width: 1.5rem;
      height: 100%;
      text-align: left;
      overflow: hidden;
      .card-legend-item {
        width: 100%;
        float: left;
        .card-legend-icon {
          width: 0.13rem;
          height: 0.13rem;
          border-radius: 0.02rem;
          float: left;
          margin-top: 0.05rem;
        }
        .card-legend-text {
          width: 80%;
          font-size: 0.16rem;
          font-weight: 600;
          color: #cccccc;
          line-height: 0.2rem;
          float: left;
          margin-left: 0.06rem;
        }
        .card-legend-number {
          font-size: 0.32rem;
          font-weight: 400;
          color:#fff;
          line-height: 0.28rem;
          float: left;
          margin-left: 0.18rem;
          margin-top: 0.10rem;
        }
      }

    }
  }
</style>
