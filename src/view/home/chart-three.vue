<template>
	<div class="main">
		<!--<div class="title">{{title}}</div>-->
		<div id="chart1" ref="myChart" style=""></div>
		<img src="@/assets/img/course.png" alt="">
	</div>
</template>


<script>
	// import {getEntDate,} from "@/lib/API/entDataReport"
	export default {
		props: ['chartData','title'],
		data() {
			return {
				xData:[]
			}
		},
		created() {
			this.chartData.forEach((item)=>{
				this.xData.push(item.name)
			})
		},
		mounted(){
			this.init()
			setTimeout(()=>{
				this.chartShow()
			},1000)

		},
		updated(){
			this.chartShow()
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
				setTimeout(() => {
					window.onresize = () =>{
						this.$echarts.init(this.$refs.myChart).resize()
					}
				},100)
			},
			chartShow() {
				let myChart = this.$echarts.init(this.$refs.myChart)
				// 绘制图表
				myChart.setOption({
					tooltip: {
						trigger: 'item',
						formatter: "{a} <br/>{b}: {c} 占比({d}%)"
					},
					color : [ '#94FED4', '#7DA8FF',],
					grid: {
						left: '10%',
						right: '10%',
						bottom: '10%',
						containLabel: true
					},
					// legend: {
					// 	orient: 'vertical',
					// 	x: 'left',
					// 	data:this.xData
					// },
					series: [
						{
							name: this.title,
							type: 'pie',
							radius: ['42%', '60%'],
							label: {
								normal: {
									show: true,
									// position: 'center',
									textStyle : {
										fontWeight : 'normal',
										fontSize:this.fontSize(0.14),
										color:'#fff'
									},
									padding: [0, -10]
								},
								emphasis: {
									show: true,
									textStyle: {
										fontSize:this.fontSize(0.14),
										fontWeight: 'bold'
									}
								}
							},
							labelLine:{
								normal:{
									length:4,  // 改变标示线的长度
								},
							},
							data: this.chartData
						},
					]
				})
			},
		}
	}
</script>

<style lang="less" scoped>
	.main{
		position: relative;
		#chart1{
			width:3.0rem;
			height:2.30rem;
		}
		img{
			position: absolute;
			left: 34.5%;
			top: 39%;
			width: 0.65rem;
		}
	}
</style>
