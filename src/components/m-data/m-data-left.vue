<template>
	<transition name="slide-fade">
		<div class="data-body">
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
		name: "m-data-left",
		data() {
			return {
				dataOne:[
					{value:120, name:'信息技术'},
					{value:89, name:'冶金化工'},
					{value:14, name:'建筑公司'},
					{value:5, name:'医药公司'},
					{value:6, name:'广告服装'},
					{value:150, name:'其它'}
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
			chartOneShow(){
				let myChart = this.$echarts.init(this.$refs.myCharts1)
				// 绘制图表
				myChart.setOption({
					tooltip: {
						trigger: 'item',
						formatter: "{b}<br/>共{c}间 ({d}%)"
					},
					color:['#525252','#FFAB00','#FFA5A5','#07A6FF','#FFFC7A','#88FF7A'],
					title: {
						text: "企业总数",
						left: "center",
						top: "35%",
						textStyle: {
							color: "#fff",
							fontSize:this.fontSize(0.16),
							align: "center"
						}
					},
					graphic: {
						type: "text",
						left: "center",
						top: "55%",
						style: {
							text: "356",
							textAlign: "center",
							fill: "#fff",
							fontSize: this.fontSize(0.20),
							fontWeight: 600
						}
					},
					series: [
						{
							name: '',
							type: 'pie',
							radius: ['55%', '85%'],
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
						top:'12%',
						textStyle:{
							color:'#fff'
						}
					},
					tooltip: {},
					title: [{
						text: '全区企业年度统计',
						x: '50%', //x轴占50%，居中对齐
						textAlign: 'center',
						textStyle:{
							color:'#64FFE5',
							fontSize: this.fontSize(0.18),
							fontWeight:'500'
						}
					}],
					grid: {
						left: '0',
						right: '2%',
						bottom: '0',
						top: '50%',
						containLabel: true
					},
					xAxis: [
						{
							type: 'category',
							axisLine: {
								show:false,
							},
							axisTick:{
								show:false,
							},
							axisLabel: {
								show: true,
								textStyle: {
									color: '#fff',
									fontSize:this.fontSize(0.18),
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
							},
							axisTick:{
								show:false,
							},
							axisLine: {
								show: false,
							},
							axisLabel: {
								show: true,
								textStyle: {
									color: '#fff',
									fontSize:this.fontSize(0.18),
								}
							},
						}
					],
					dataset: {
						dimensions: ['year', '总产值', '利润', '纳税额'],
						source: [
							{year: '2017', '总产值': 43.3, '利润': 85.8, '纳税额': 93.7},
							{year: '2018', '总产值': 83.1, '利润': 73.4, '纳税额': 55.1},
							{year: '2019', '总产值': 86.4, '利润': 65.2, '纳税额': 82.5},
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
			chartThreeShow(){
				let myChart = this.$echarts.init(this.$refs.myCharts3)
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
						text: '招商引资成果--新增企业统计',
						x: '50%',
						textAlign: 'center',
						textStyle:{
							color:'#64FFE5',
							fontSize: this.fontSize(0.24),
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
							axisLine: { //x轴的那条线
								show:false,
							},
							axisTick:{  //x轴的标尺
								show:false,
							},
							axisLabel: {  //x轴字体设置
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
							splitLine: {
								show:false,
							},
							axisTick:{
								show:false,
							},
							axisLine: {
								show: false,
							},
							axisLabel: {
								show: true,
								textStyle: {
									color: '#fff',
									fontSize:this.fontSize(0.18),
								}
							},
						}
					],
					dataset: {
						dimensions: ['year', '信息技术', '机械电子', '冶金化工', '建筑公司', '医药公司','其他'],
						source: [
							{year: '2017', '信息技术': 10, '机械电子': 5, '冶金化工': 1,'建筑公司':20,'医药公司':30, '其他':20},
							{year: '2018', '信息技术': 5, '机械电子': 20, '冶金化工': 3,'建筑公司':10,'医药公司':10, '其他':10},
							{year: '2019', '信息技术': 8, '机械电子': 13, '冶金化工': 5,'建筑公司':30,'医药公司':2, '其他':30},
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
						{
							type: 'bar',
							itemStyle: {
								normal: {
									color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [{
										offset: 0,
										color: '#FFA5A5'
									}, {
										offset: 1,
										color: 'rgba(204,208,255,0.28)'
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
										color: '#07A6FF'
									}, {
										offset: 1,
										color: 'rgba(204,208,200,0.28)'
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
										color: '#FFFC7A'
									}, {
										offset: 1,
										color: 'rgba(204,208,255,0.28)'
									}]),
								}
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
	.data-body::-webkit-scrollbar { width: 0 !important }
	.data-body {
		overflow-y: scroll;
		overflow-x: hidden;
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
		padding-bottom: 0.5rem;
		.chart-one {
			width: 1.8rem;
			height: 1.8rem;
			background: rgba(152, 241, 255, 0.4);
			border: 0.01rem solid rgba(255, 255, 255, 1);
			margin: 0.2rem auto;
			border-radius: 50%;
			padding: 0.15rem;
			> div {
				width: 100%;
				height: 100%;
				box-shadow: 0 0 0.12rem 0.04rem rgba(168, 239, 253, 1);
				border: 0.03rem solid rgba(100, 255, 229, 1);
				border-radius: 50%;
			}
		}
		.chart-two{
			width: 95%;
			height: 55%;
			margin: 0.3rem auto;
			>div{
				width: 100%;
				height: 100%;
			}
		}
		.chart-three{
			width: 95%;
			height: 65%;
			margin: 0.1rem auto;
			>div{ //内部的div
				width: 100%;
				height: 100%;
			}
		}
	}
</style>
