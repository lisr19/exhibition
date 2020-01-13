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
			<template>
				<img src="@/assets/img/icon1.png" alt="" v-if="title==='2019年法人资格登记'">
				<img src="@/assets/img/icon10.png" alt="" v-if="title==='2019年履约信用审查'">
				<img src="@/assets/img/icon4.png" alt="" v-if="title==='2019年专业技术资格登记'" style="top:49%">
				<img src="@/assets/img/icon9.png" alt="" v-if="title==='2019年质量管理审查'">
				<img src="@/assets/img/icon2.png" alt="" v-if="title==='2019年保密管理审查'" style="top:50%">
			</template>
		</div>
	</div>
</template>

<script>
	export default {
		name: "charts-item2",
		props: ['title','data'],
		data() {
			return {
				color: ['#FDF169', '#7CA8FF', '#2DE4FA'],
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
					color: ['#FDF169', '#7CA8FF', '#2DE4FA'],
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
		},
	}
</script>

<style lang="less" scoped>
	.card-chart {
		z-index: 9;
		width: 4.22rem;
		height: 2.58rem;
		background:rgba(167,186,255,0.3);
		box-shadow:0px 0px 5px 2px rgba(0,0,0,0.03);
		border-radius: 0.05rem;
		padding:0.25rem 0.30rem 0.2rem;
		margin-top: 0.15rem;
		display: flex;
		.chat-body {
			width: 1.87rem;
			height: 1.87rem;
			float: right;
			margin-top: 0.15rem;
		}
		.chart-title {
			font-size: 0.20rem;
			font-weight: 400;
			color: #fff;
			line-height: 0.24rem;
		}
		.card-legend {
			width: 1.30rem;
			height: 100%;
			text-align: left;
			overflow: hidden;
			margin-top: 0.05rem;
			.card-legend-item {
				display: flex;
				align-items: center;
				width: 100%;
				margin-top: 0.55rem;
				position: relative;
				.card-legend-icon {
					width: 0.13rem;
					height: 0.13rem;
					border-radius: 0.02rem;
				}
				.card-legend-text {
					font-size: 0.16rem;
					font-weight: 600;
					color: #cccccc;
					line-height: 0.2rem;
					margin-left: 0.2rem;
				}
				.card-legend-number {
					position: absolute;
					left: 0.2rem;
					top: 0.24rem;
					font-size: 0.26rem;
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
			position: relative;
			img{
				position: absolute;
				top: 47%;
				right: 30%;
				width: 0.45rem;
			}
		}
	}
</style>
