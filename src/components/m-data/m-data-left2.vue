<template>
  <transition name="slide-fade">
    <div class="body">
        <!--<div class="click" @click="onClick" style="font-size: 0.16rem">-->
            <!--收起/展开-->
        <!--</div>-->
        <div class="chart-one">
            <div ref="myCharts1"></div>
        </div>
        <div class="chart-two">
            <div ref="myCharts2"></div>
        </div>
        <div class="chart-three">
            <div ref="myCharts3"></div>
        </div>
    </div>
  </transition>
</template>

<script>
  export default {
    name: "m-data-left2",
    data() {
      return {
        dataOne:[
          {value:120, name:'线上课程'},
          {value:89, name:'线下课程'},
        ]
      }
    },
    mounted(){
      let self = this
      setTimeout(()=>{
        self.chartOneShow()
        self.chartTwoShow()
        self.chartThreeShow()
      },500)
      this.init()
    },
    flag: true,
    methods: {
	    fontSize(res){
		    let docEl = document.documentElement,
			    clientWidth = window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth;
		    if (!clientWidth) return;
		    let fontSize = 100 * (clientWidth / 2304);
		    return res*fontSize;
	    },
      //图表自适应
      init() {
        const self = this;//因为箭头函数会改变this指向，指向windows。所以先把this保存
        setTimeout(() => {
          window.onresize = function() {
            self.$echarts.init(self.$refs.myCharts1).resize();
            self.$echarts.init(self.$refs.myCharts2).resize();
            self.$echarts.init(self.$refs.myCharts3).resize();
          }
        },100)
      },
      onClick(){
        if(this.flag) {
          let moreBox = document.getElementsByClassName('body')[0];
          moreBox.style.height = '0.9rem';
          moreBox.style.width = '1rem';
          let click = document.getElementsByClassName('click')[0];
          click.style.width = '100%';
          click.style.height = '100%';
          click.style.margin = '0 auto';
          this.flag = false;
        }
        else {
          let moreBox = document.getElementsByClassName('body')[0];
          moreBox.style.height = '80%';
          moreBox.style.width = '4.35rem';
          let click = document.getElementsByClassName('click')[0];
          click.style.width = '30%';
          click.style.height = '0.5rem';
          click.style.margin = '10px 0 0 65%';
          // click.style.top = '10px';
          // click.style.left = '65%';
          this.flag = true;
        }
        
      },
      chartOneShow(){
        let myChart = this.$echarts.init(this.$refs.myCharts1)
        // 绘制图表
        myChart.setOption({
          tooltip: {
            trigger: 'item',
            formatter: "{b}<br/>共{c}节 ({d}%)"
          },
          color:['#FFA5A5','#88FF7A'],
          title: {
            text: "2019年课程占比",
            left: "center",
            top: "35%",
            textStyle: {
              color: "#fff",
	            fontSize: this.fontSize(0.14),
              align: "center"
            }
          },
          graphic: {
            type: "text",
            left: "center",
            top: "55%",
            style: {
              text: "209",
              textAlign: "center",
              fill: "#fff",
              fontSize: this.fontSize(0.16),
              fontWeight: 600
            }
          },
            series: [
            {
              name: '',
              type: 'pie',
              radius: ['65%', '90%'],
              avoidLabelOverlap: false,
              label: {
                normal: {
                  show: false,
                  position: 'center'
                },
              },
              labelLine: {
                normal: {
                  show: false
                }
              },
              data: this.dataOne
            },

          ]
        })
      },
      chartTwoShow(){
        let myChart = this.$echarts.init(this.$refs.myCharts2)
        // 绘制图表
        myChart.setOption({
          legend: {
            top:'10%',
            textStyle:{
              color:'#fff'
            }
          },
          tooltip: {},
          title: [{
            text: '2019年军需对接(件)',
            x: '50%', //x轴占50%，居中对齐
            textAlign: 'center',
            textStyle:{
              color:'#64FFE5',
	            fontSize: this.fontSize(0.16),
              fontWeight:'500'
            }
          }],
          grid: {
            left: '0',
            right: '2%',
            bottom: '0',
            top: '35%',
            containLabel: true
          },
          xAxis: [
            {
              type: 'category',
              axisLabel: {
                show: true,
                textStyle: {
                  color: '#fff',
	                fontSize: this.fontSize(0.14),
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
	                fontSize: this.fontSize(0.14),
                }
              },
            }
          ],
          dataset: {
            dimensions: ['year', '数量'],
            source: [
              {year: '1', '数量': 20},
              {year: '2', '数量': 30},
              {year: '3', '数量': 40},
              {year: '4', '数量': 100},
              {year: '5', '数量': 60},
              {year: '6', '数量': 30},
              {year: '7', '数量': 50},
              {year: '8', '数量': 40},
              {year: '9', '数量': 10},
              {year: '10', '数量': 5},
              {year: '11', '数量': 3},
              {year: '12', '数量': 2},
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
          ]
        })
      },
      chartThreeShow(){
        let myChart = this.$echarts.init(this.$refs.myCharts3)
        // 绘制图表
        myChart.setOption({
          legend: {
            top:'10%',
            textStyle:{
              color:'#fff'
            }
          },
          tooltip: {},
          title: [{
            text: '2019年军民案例融合成功统计',
            x: '50%',
            textAlign: 'center',
            textStyle:{
              color:'#64FFE5',
	            fontSize: this.fontSize(0.16),
              fontWeight:'500'
            }
          }],
          grid: {
            left: '0',
            right: '2%',
            bottom: '0',
            top: '35%',
            containLabel: true
          },
          xAxis: [
            {
              type: 'category',
              axisLabel: {  //x轴字体设置
                show: true,
                textStyle: {
                  color: '#fff',
	                fontSize: this.fontSize(0.14),
                },
              },
            }
          ],
          yAxis: [
            {
              type: 'value',
            //   splitNumber: 4,
              axisLabel: {
                show: true,
                textStyle: {
                  color: '#fff',
	                fontSize: this.fontSize(0.14),
                }
              },
            }
          ],
          dataset: {
           dimensions: ['year', '数量'],
            source: [
              {year: '1', '数量': 10},
              {year: '2', '数量': 8},
              {year: '3', '数量': 13},
              {year: '4', '数量': 14},
              {year: '5', '数量': 19},
              {year: '6', '数量': 34},
              {year: '7', '数量': 22},
              {year: '8', '数量': 10},
              {year: '9', '数量': 7},
              {year: '10', '数量': 2},
              {year: '11', '数量': 4},
              {year: '12', '数量': 8},
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
          ]
        })
      }
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
  .body {
	  width: 2.7rem;
	  height: 82%;
	  position: absolute;
	  top: 0.90rem;
	  left: 0.12rem;
    background: rgba(56, 127, 204, 0.6);
    box-shadow: 0 0.02rem 0.13rem 0.02rem rgba(121, 232, 255, 1), 0 0 0.3rem 0.04rem rgba(79, 227, 255, 1);
    border-radius: 0.15rem;
    border: 0.01rem solid rgba(255, 255, 255, 1);
    text-align: center;
    overflow: hidden;
    transition: all .5s;
    .chart-one {
      width: 95%;
      height: 25%;
      margin: 10px auto 0;
      > div {
        width: 100%;
        height: 100%;
      }
    }
    .chart-two{
      width: 95%;
      height: 35%;
      margin: 0 auto;
      >div{
        width: 100%;
        height: 100%;
      }
    }
    .chart-three{
      width: 95%;
      height: 35%;
      margin: 10px auto 0;
      >div{ //内部的div
        width: 100%;
        height: 100%;
      }
    }
    .click{
        width: 30%;
        height: 0.5rem;
        right: 0.3rem;
        margin-top: 10px;
        margin-left: 65%;
        text-align: center;
        transition: all .5s;
        // background-color: aquamarine;
        color: #fff;
        cursor: pointer;
    }
  }
</style>
