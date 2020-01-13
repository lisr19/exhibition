<template>
  <transition name="slide-fade">
    <div class="data-body">
      <div class="chart-two">
        <div ref="myCharts2"></div>
      </div>
    </div>
  </transition>
</template>

<script>
  export default {
    name: "m-menu-child2",
    data() {
      return {
      }
    },
    mounted(){
      let self = this
      setTimeout(()=>{
        
        self.chartTwoShow()
       
      },500)
      this.init()
    },
    methods: {
      //图表自适应
      init() {
        const self = this;//因为箭头函数会改变this指向，指向windows。所以先把this保存
        setTimeout(() => {
          window.onresize = function() {
            
            self.$echarts.init(self.$refs.myCharts2).resize();
            
          }
        },100)
      },
      chartTwoShow(){
        let myChart = this.$echarts.init(this.$refs.myCharts2)
        // 绘制图表
        myChart.setOption({
          legend: {
            top:'12%',
            textStyle:{
              color:'#fff'
            }
          },
          tooltip: {},
          title: [{
            text: '污水处理统计(吨)',
            x: '50%', //x轴占50%，居中对齐
            textAlign: 'center',
            textStyle:{
              color:'#64FFE5',
              fontSize:'16',
              fontWeight:'500'
            }
          }],
          grid: {
            left: '0',
            right: '2%',
            bottom: '0',
            top: '25%',
            containLabel: true
          },
          xAxis: [
            {
              type: 'category',
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
              axisLabel: {
                show: true,
                textStyle: {
                  color: '#fff',
                  fontSize: '14'
                }
              },
            }
          ],
          dataset: {
            dimensions: ['year', '污水点1', '污水点2', '污水点3'],
            source: [
              {year: '2017', '污水点1': 43.3, '污水点2': 85.8, '污水点3': 93.7},
              {year: '2018', '污水点1': 83.1, '污水点2': 73.4, '污水点3': 55.1},
              {year: '2019', '污水点1': 86.4, '污水点2': 65.2, '污水点3': 82.5},
            ]
          },
          // Declare several bar series, each will be mapped
          // to a column of dataset.source by default.
          series: [
            {
              type: 'bar',
              itemStyle: {
                normal: {
                  color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: '#FF3BD5'
                  }, {
                    offset: 1,
                    color: 'rgba(255,253,255,0.02)'
                  }]),
                },
              }
            },
            {
              type: 'bar',
              itemStyle: {
                normal: {
                  color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: '#48E2FF'
                  }, {
                    offset: 1,
                    color: 'rgba(240,254,255,0.14)'
                  }]),
                }
              }
            },
            {
              type: 'bar',
              itemStyle: {
                normal: {
                  color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: '#9DA3FF'
                  }, {
                    offset: 1,
                    color: 'rgba(204,208,255,0.28)'
                  }]),
                }
              }
            },
          ]
        })
      },
    }
  }
</script>

<style lang="less" scoped>
  .slide-fade-enter-active {
    transition: all .3s ease;
  }

  .slide-fade-leave-active {
    transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }

  .slide-fade-enter, .slide-fade-leave-to
    /* .slide-fade-leave-active for below version 2.1.8 */ {
    transform: translateX(10px);
    opacity: 0;
  }
  .data-body {
    width: 4.35rem;
    // height: 8.73rem;
    height: 5.0rem;
    position: absolute;
    top: 3.3rem;
    right: -40%;
    background: rgba(56, 127, 204, 0.6);
    box-shadow: 0 0.02rem 0.13rem 0.02rem rgba(121, 232, 255, 1), 0 0 0.3rem 0.04rem rgba(79, 227, 255, 1);
    border-radius: 0.15rem;
    border: 0.01rem solid rgba(255, 255, 255, 1);
    text-align: center;
    overflow: hidden;
    transition: all .5s;
    .chart-two{
      width: 4.35rem;
      height: 5.0rem;
      // margin: 0 auto;
      margin-top: 10%;
      >div{
        width: 4.0rem;
        height: 4.0rem;
      }
    }
  }
</style>
