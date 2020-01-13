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
			fontSize(res){
				let docEl = document.documentElement,
					clientWidth = window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth;
				if (!clientWidth) return;
				let fontSize = 100 * (clientWidth / 2304);
				return res*fontSize;
			},
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
							name: '年',
							nameTextStyle:{
								color:"#fff",
								fontSize:this.fontSize(0.14),
								fontWeight:600,
								padding:-4
							},
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
									fontSize:this.fontSize(0.14),
								},
							},
						}
					],
					yAxis: [
						{
							type: 'value',
							splitNumber: 4,
							splitLine: {
								show:false,
								lineStyle: {
									type: 'solid',
									color: '#fff',//左边线的颜色
									width: '0.5'//坐标线的宽度
								}
							},
							axisTick: { //x轴刻度
								show:false,  //是否显示刻度
							},
							axisLine: {
								show: false,
							},
							axisLabel: {
								show: true,
								textStyle: {
									color: '#fff',
									fontSize:this.fontSize(0.14),
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
					series: [
						// {
						//    type: 'bar',
						//    // highlightPolicy: 'ancestor',
						//    data: this.chartData.data,
						//    barWidth: '35%',
						//    label:{
						//        show:true,
						//        position:'top',
						//        color:'#fff'
						//    },
						//    itemStyle: {
						//        emphasis: {
						//           barBorderRadius: 10
						//        },
						//
						//        normal: {
						//           color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [{
						// 	          offset: 0,
						// 	          color: '#2DE4FA'
						//           }, {
						// 	          offset: 1,
						// 	          color: '#77FFB2'
						//           }]),
						//           barBorderRadius: 10
						//        }
						//    }
						// },
						{
							type: 'line',
							data: this.chartData.data,
							symbolSize: 10, //拐点大小
							symbol: "circle",//实心点
							// smooth:0.3,
							itemStyle: {
								emphasis: {
									barBorderRadius: 10
								},
								normal : {
									color:'#77FFB2', //改变折线点的颜色
									lineStyle:{
										color:'#FFF29D' //改变折线颜色
									}
								}
							}
						},
						{
							name: 'dotted',
							type: 'pictorialBar',
							symbol: 'rect',
							label:{
								show:true,
								position:'top',
								color:'#fff'
							},
							itemStyle: {
								normal: {
									color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [{
										offset: 0,
										color: '#7CA8FF'
									}, {
										offset: 1,
										color: '#2DE4FA'
									}]),
									barBorderRadius: 10
								}
							},
							symbolRepeat: true,
							symbolSize: [16, 5],
							symbolMargin: 1,
							z: -10,
							data: this.chartData.data,
						}
					]
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
		background:rgba(167,186,255,0.3);
		box-shadow:0px 0px 5px 2px rgba(0,0,0,0.03);
		border-radius: 0.05rem;
		padding:0.20rem;
		margin-top: 0.15rem;
		.chat-body {
			width: 3.90rem;
			height: 1.98rem;
			float: left;
		}
		.chart-title {
			width: 100%;
			text-align: left;
			font-size: 0.20rem;
			font-weight: 400;
			color: #fff;
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
