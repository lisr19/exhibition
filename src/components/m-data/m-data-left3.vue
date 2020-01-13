<template>
  <transition name="slide-fade">
    <div class="body">
        <!--<div class="click" @click="onClick">-->
            <!--收起/展开-->
        <!--</div>-->
        <div class="chart-one">
            <div ref="myCharts1"></div>
        </div>
        <div class="chart-two">
            <div ref="myCharts2"></div>
        </div>
    </div>
  </transition>
</template>

<script>
  export default {
    name: "m-data-left3",
    data() {
      return {
        dataOne:[
          {value:120, name:'国营企业'},
          {value:89, name:'私营企业'},
          {value:130, name:'外资企业'},
        ],
        dataTwo:[
          {value:300, name:'国营企业'},
          {value:200, name:'私营企业'},
          {value:150, name:'外资企业'},
        ]
      }
    },
    mounted(){
      let self = this
      setTimeout(()=>{
        self.chartOneShow()
        self.chartTwoShow()
        
      },500)
      this.init()
    },
    flag: true,
    methods: {
      //图表自适应
      init() {
        const self = this;//因为箭头函数会改变this指向，指向windows。所以先把this保存
        setTimeout(() => {
          window.onresize = function() {
            self.$echarts.init(self.$refs.myCharts1).resize();
            self.$echarts.init(self.$refs.myCharts2).resize();
            
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
          moreBox.style.height = '50%';
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
            formatter: "{b}<br/>共{c}吨 ({d}%)"
          },
          color:['#07A6FF','#FFAB00','#FFFC7A'],
          title: {
            text: "企业用水量",
            left: "center",
            top: "35%",
            textStyle: {
              color: "#fff",
              fontSize: 12,
              align: "center"
            }
          },
          graphic: {
            type: "text",
            left: "center",
            top: "55%",
            style: {
              text: "339",
              textAlign: "center",
              fill: "#fff",
              fontSize: 20,
              fontWeight: 700
            }
          },
            series: [
            {
              name: '',
              type: 'pie',
              radius: ['55%', '80%'],
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
          tooltip: {
            trigger: 'item',
            formatter: "{b}<br/>共{c}千瓦 ({d}%)"
          },
          color:['#08CD32','#CCD890','#AABD57'],
          title: {
            text: "企业用电量",
            left: "center",
            top: "35%",
            textStyle: {
              color: "#fff",
              fontSize: 12,
              align: "center"
            }
          },
          graphic: {
            type: "text",
            left: "center",
            top: "55%",
            style: {
              text: "339",
              textAlign: "center",
              fill: "#fff",
              fontSize: 20,
              fontWeight: 700
            }
          },
            series: [
            {
              name: '',
              type: 'pie',
              radius: ['55%', '80%'],
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
              data: this.dataTwo
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
  .body {
	  width: 2.7rem;
	  height: 52%;
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
      height: 40%;
	    margin: 10px auto;
      > div {
        width: 100%;
        height: 100%;
      }
    }
    .chart-two{
      width: 95%;
      height: 40%;
      margin: 10px auto;
      >div{
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
