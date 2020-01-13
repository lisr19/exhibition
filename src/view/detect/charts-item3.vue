<template>
	<div class="card-chart">
		<div class="chart-title">{{chartData.yTitle}}</div>
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
							data: this.chartData.xData,
							boundaryGap: false,
							name: '类型',
							nameTextStyle:{
								color:"#fff",
								fontSize:16,
								fontWeight:500,
								padding:15
							},
							axisLine: {
								lineStyle:{
									color:'#fff'
								},
								show:true,
							},
							axisLabel: {
								show: true,
								textStyle: {
									color: '#fff',
									fontSize: '16',
									fontWeight:500,
								},
							},
						}
					],
					yAxis: [
						{
							type: 'value',
							name: '件数',
							nameTextStyle:{
								color:"#fff",
								fontSize:16,
								fontWeight:500,
								padding:18
							},
							splitLine: {
								show:false,
							},
							axisLine: {
								show: true,
								lineStyle:{
									color:'#fff'
								},
							},
							axisLabel: {
								show: true,
								textStyle: {
									color: '#fff',
									fontSize: '16',
									fontWeight:500,
								},
							},
						}
					],
					grid: {
						left: '2%',
						right: '10%',
						bottom: '0',
						top: '12%',
						containLabel: true
					},
					series: [
						{
							type: 'line',
							name: '件数',
							data: this.chartData.data,
							symbolSize: 14, //拐点大小
							symbol: "circle",//实心点
							smooth:0.3,
							label:{
								show:true
							},
							areaStyle: {
								normal: {
									color: {
										type: 'linear',//设置线性渐变
										x: 0,
										y: 0,
										x2: 0,
										y2: 1,
										colorStops: [{
											offset: 0, color: '#77FFB2' // 0% 处的颜色
										}, {
											offset: 1, color: '#2DE4FA' // 100% 处的颜色
										}],
										globalCoord: false // 缺省为 false
									},
								}
							},
							itemStyle: {
								emphasis: {
								},
								normal: {
									color: '#2DE4FA',
									// borderColor:'#2B3648',//拐点边颜色
									// borderWidth:1,//拐点边宽度
									lineStyle:{
										width:2,
										color:'#FDF169'
									}
								}
							}
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
		width:12.29rem;
		height:8.19rem;
		background:rgba(167,186,255,0.3);
		box-shadow:0px 0px 5px 2px rgba(0,0,0,0.03);
		border-radius: 5px;
		padding: 0.15rem;
		.chat-body {
			width: 12.0rem;
			height: 6.60rem;
		}
		.chart-title {
			width: 100%;
			font-size: 0.45rem;
			font-weight: 400;
			color:#ffffff;
		}
		.chart-number {
			width: 30%;
			text-align: right;
			font-size: 0.4rem;
			font-weight: 400;
			color: rgba(175, 189, 209, 1);
			line-height: 0.44rem;
		}
	}
</style>
