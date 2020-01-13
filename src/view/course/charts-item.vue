<template>
	<div class="card-chart">
		<div class="card-legend" style="float: left">
			<div class="card-legend-item" v-for="(item,index) in data" :style="'marginTop:'+((172-data.length*48)/3-1)+'px'">
				<div class="card-legend-icon" :style="'background-color:'+ color[index]"></div>
				<div class="card-legend-text">{{item.name}}</div>
				<div class="card-legend-number">{{item.value}}</div>
			</div>
		</div>
		<div class="chart-title">{{title}}</div>
		<div ref="myChart" class="chat-body" style="float: right" ></div>
		<template>
			<img src="@/assets/img/course.png" alt="" v-if="title==='2019年课程占比'">
			<img src="@/assets/img/icon5.png" alt="" v-if="title==='2019年热门课程占比'" style="top:47%">
			<img src="@/assets/img/icon12.png" alt="" v-if="title==='2019年线上情况（人次）'" style="top:47%">
			<img src="@/assets/img/icon13.png" alt="" v-if="title==='2019年线下情况（人次）'">
		</template>
	</div>
</template>

<script>
	export default {
		name: "charts-item",
		props: ['title', 'data','chartNum'],
		data() {
			return {
				color: [ '#7CA8FF','#2DE4FA', '#77FFB2'],
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
					color: [ '#7CA8FF','#2DE4FA', '#77FFB2'],
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
							radius: ['65%', '90%'],
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
		width: 4.02rem;
		height: 2.46rem;
		background:rgba(167,186,255,0.3);
		box-shadow:0px 0px 5px 2px rgba(0,0,0,0.03);
		border-radius:0.05rem;
		padding: 0.18rem 0.28rem 0.08rem 0.18rem;
		margin-top: 0.12rem;
		position: relative;
		img{
			position: absolute;
			top: 50%;
			right: 22.5%;
			width: 0.55rem;
		}
		.chat-body {
			width: 1.8rem;
			height:  1.8rem;
			float: right;
			margin-top: 0.1rem;
		}
		.chart-title {
			width: 2rem;
			height: 0.28rem;
			overflow: hidden;
			font-size: 0.17rem;
			font-weight: 400;
			color:#ffffff;
			line-height: 0.24rem;
			text-align: center;
			float: right;
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
					width: 0.12rem;
					height: 0.12rem;
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
					font-size: 0.30rem;
					font-weight: 400;
					color:#ffffff;
					line-height: 0.26rem;
					float: left;
					margin-left: 0.18rem;
					margin-top: 0.08rem;
				}
			}
		}
	}
</style>
