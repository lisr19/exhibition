<template>
	<div class="card-chart">
		<div class="chart-title">{{chartData.yTitle}}</div>
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
							name: '类型',
							nameTextStyle:{
								color:"#fff",
								fontSize:14,
								fontWeight:500,
								padding:9
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
									fontSize: '12'
								},
							},
						}
					],
					yAxis: [
						{
							type: 'value',
							splitNumber: 4,
							axisTick: {
								show:false,  //是否显示刻度
							},
							splitLine: {
								lineStyle: {
									type: 'solid',
									color: '#fff',//左边线的颜色
									width: '0.5'//坐标线的宽度
								}
							},
							axisLine: {
								show: false,
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
						barWidth: '45%',
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
									color: '#7CA8FF'
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
		width:4.35rem;
		height:2.66rem;
		background:rgba(167,186,255,0.3);
		box-shadow:0px 0px 5px 2px rgba(0,0,0,0.03);
		border-radius:0.05rem;
		padding: 0.18rem 0.18rem 0.08rem 0.15rem;
		margin-top: 0.13rem;
		.chat-body {
			width: 3.90rem;
			height: 1.93rem;
			float: left;
			margin-top: 0.13rem;
		}
		.chart-title {
			width: 100%;
			text-align: left;
			font-size: 0.20rem;
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
