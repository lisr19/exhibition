<template>
	<div class="health">
		<!--<router-link to="/index" class="health-title">健康体检中心</router-link>-->
		<a class="health-title" @click="goBack('健康体检')">
			<img src="@/assets/img/jktj.png" alt="" style="height: 0.8rem">
		</a>
		<div class="health-body">
			<div class="health-card">
				<div class="card-title" style="float: left">{{chartOneTitle}}</div>
				<div class="card-number" style="float: right">{{total}}</div>
				<div ref="chart1" style="width: 7.3rem;height: 3rem;float: left;margin-top: 0.5rem"></div>
			</div>
			<div class="health-card" style="margin-left: 0.74rem;position: relative">
				<div class="card-legend" style="float: left">
					<div class="card-legend-item" :style="index===0?'':'margin-top: 0.48rem'"
					     v-for="(item,index) in chartTwoData">
						<div class="card-legend-icon" :style="'background-color:'+ color[index]"></div>
						<div class="card-legend-text">{{item.name}}</div>
						<div class="card-legend-number">{{item.value}}</div>
					</div>
				</div>
				<div class="card-title" style="float: right;margin-top: 0.09rem;">{{chartTwoTitle}}</div>
				<div ref="chart2" style="width: 4.3rem;height: 3.6rem;float: right;margin-top: 0.1rem"></div>
				<img src="@/assets/img/icon11.png" alt="" style="position: absolute;top: 43%;right: 20%;width: 1.8rem">
			</div>
			<div class="health-card">
				<div class="card-title" style="margin-top: -0.4rem">301军区总医院资源</div>
				<my-radar :titleArray="titleArray" style="width: 3.8rem;height: 3.8rem;margin-top: 0.2rem"></my-radar>
			</div>
			<div class="health-card" style="margin-left: 0.74rem;padding: 0.1rem;background-color: #000000">
				<div style="width: 100%;height: 100%" class="health-video">
					<video controls autoplay="autoplay" :src="resData.url"></video>
				</div>
			</div>
		</div>
	</div>

</template>

<script>
	import {findExhibitionData,findExhibitionResourcesData} from "@/libs/API/exhibition";
	import radar from '@/components/radar/radar'

	export default {
		name: "health",
		components: {
			'my-radar': radar
		},
		data() {
			return {
				total: 0,//检测总人数
				park: [],
				// color: ['#c23531', '#2f4554', '#61a0a8'],
				color: ['#7CA8FF', '#77FFB2', '#2DE4FA'],
				titleArray: [
					{
						name: '教学校验'
					},
					{
						name: '科学数据'
					},
					{
						name: '医疗保健'
					},
					{
						name: '中央重要保育基地'
					},
					{
						name: '外科临床部'
					},
					{
						name: '内科临床部'
					},
					{
						name: '医技部'
					},
					{
						name: '研究实验基地'
					},
					{
						name: '健康管理部门'
					},
				],
				resData:{},//资源数据
				monthData: [],//实体数据
				chartOneData: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],//图表一数据
				chartTwoData: [],//图表二数据
				chartOneTitle: '',
				chartTwoTitle: ''
			}
		},
		methods: {
			fontSize(res){
				let docEl = document.documentElement,
					clientWidth = window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth;
				if (!clientWidth) return;
				let fontSize = 100 * (clientWidth / 2304);
				return res*fontSize;
			},
			//获取展厅数据
			async findExhibitionData() {
				let year = 2019
				let data = {
					year: year,
					center: 5
				}
				let res = await findExhibitionData(data)
				if (res.code === 200) {
					if (res.data.length > 0) {
						res.data.forEach(v => {
							if (v.typeId === 51) {//图表一数据
								if (this.chartOneTitle === '') this.chartOneTitle = year + '年'+ v.typeName
								this.chartOneData.splice(v.month - 1,1,parseInt(v.data))
								this.total = this.total + parseInt(v.data)
							}else if(v.typeId === 52){
								if (this.chartTwoTitle === '') this.chartTwoTitle = year + '年'+ v.typeName
								this.chartTwoData.push({
									value:v.data,
									name:v.parkName
								})
							}
						})
					}
					// console.log(this.chartOneData)
				} else {
					console.log(res.message)
				}
			},
			//获取展厅资源
			async findExhibitionResourcesData(){
				let data={
					moduleId:5
				}
				let res = await findExhibitionResourcesData(data)
				if(res.code === 200){
					if(res.data.list.length>0){
						this.resData = res.data.list[0]
					}
					// console.log(res.data.list)
				}else{
					console.log(res.message)
				}
			},

			chartOneShow() {
				let myChart = this.$echarts.init(this.$refs.chart1)
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
							name: '月份',
							nameTextStyle: {
								color: '#fff',
								fontSize:this.fontSize(0.18),
							},
							data: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
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
									fontSize:this.fontSize(0.18),
								},
							},
						}
					],
					yAxis: [
						{
							axisTick: { //x轴刻度
								show:false,  //是否显示刻度
							},
							type: 'value',
							splitNumber: 4,
							splitLine: {
								lineStyle: {
									type: 'solid',
									color: '#fff',//左边线的颜色
									width: '1'//坐标线的宽度
								}
							},
							axisLine: {
								show: false,
							},

							axisLabel: {
								show: true,
								textStyle: {
									color: '#fff',
									fontSize:this.fontSize(0.20),
								}
							},
						}
					],
					grid: {
						left: '0',
						right: '10%',
						bottom: '0',
						top: '16%',
						containLabel: true
					},
					series:[ {
						type: 'bar',
						// highlightPolicy: 'ancestor',
						data: this.chartOneData,
						barWidth: '50%',
						label: {
							show: true,
							position: 'top',
							color: '#AFBDD1',
							fontSize:this.fontSize(0.16),
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
					},
					{
							type: 'line',
							// highlightPolicy: 'ancestor',
							data: this.chartOneData,
							itemStyle: {
								emphasis: {
									barBorderRadius: 10
								},
								normal : {
									color:'#AA9DFF', //改变折线点的颜色
									lineStyle:{
										color:'#FFF29D' //改变折线颜色
									}
								}
							}
						},]

				})
			},
			chartTwoShow() {
				let myChart = this.$echarts.init(this.$refs.chart2)
				// 绘制图表
				myChart.setOption({
					tooltip: {
						trigger: 'item',
						formatter: "{a} <br/>{b}: {c} ({d}%)"
					},
					color: ['#7CA8FF', '#77FFB2', '#2DE4FA'],
					// color: ['#c23531', '#2f4554', '#61a0a8'],
					series: [
						{
							name: this.chartTwoTitle,
							type: 'pie',
							radius: ['55%','75%'],
							// center:['50%','50%'],
							// roseType: 'radius',
							// avoidLabelOverlap: false,
							label: {
								normal: {
									textStyle: {
										// color: 'rgba(255, 255, 255, 0.3)',
										fontSize:this.fontSize(0.22),
									}
								},
							},
							// labelLine: {
							// 	normal: {
							// 		lineStyle: {
							// 			color: 'rgba(255, 255, 255, 0.3)'
							// 		},
							// 		smooth: 0.5,
							// 		length: 10,
							// 		length2: 20
							// 	}
							// },
							// itemStyle: {
							// 	normal: {
							// 		// color: '#c23531',""
							// 		shadowBlur: 50,
							// 		shadowColor: 'rgba(0, 0, 0, 0.6)'
							// 	}
							// },
							data: this.chartTwoData,
							animationType: 'scale',
							animationEasing: 'elasticOut',
							animationDelay: function (idx) {
								return Math.random() * 200;
							}
						},

					]
				})
			},
			//图表自适应
			init() {
				const self = this;//因为箭头函数会改变this指向，指向windows。所以先把this保存
				setTimeout(() => {
					window.onresize = function() {
						self.$echarts.init(self.$refs.chart1).resize();
						self.$echarts.init(self.$refs.chart2).resize();
					}
				},100)
			},
			goBack(type){
				this.$router.push({path: '/index', query: {type:type }})
			}
		},
		created() {
			// this.findHealthData()
			this.findExhibitionData()
			this.findExhibitionResourcesData()
		},
		mounted() {
			this.init()
		},
		updated() {
			this.chartOneShow()
			this.chartTwoShow()
		}
	}
</script>

<style lang="less" scoped>
	@import "health.less";
</style>
