<template>
	<div class="index">
		<div class="head">
			<img src="@/assets/images/title.png" alt="">
			<!--<div class="l-box">-->
				<!--<p class="time">-->
					<!--<span>{{currDate}}</span>-->
					<!--&lt;!&ndash;<span>19:30</span>&ndash;&gt;-->
					<!--<span>天气：晴</span>-->
				<!--</p>-->
			<!--</div>-->
			<!--<div class="r-box">-->
				<!--<img src="@/assets/images/right.png" alt="">-->
			<!--</div>-->
		</div>
		<div class="number">
			<div class="n-card" @click="openType('企业管理')">
				<p class="name">园区企业</p>
				<div class="items">
					<div class="item" >
						<span class="tip">产值</span>
						<div>
							<span id="count-number" class="timer" data-to=" 52516" data-speed="20" data-from="51728">51728</span>
							<!--<span>5241</span>-->
							<strong>万元</strong>
						</div>
					</div>
					<div class="item" >
						<span class="tip">利税贡献</span>
						<div>
							<span>320</span>
							<strong>万元</strong>
						</div>
					</div>
					<div class="item" >
						<span class="tip">人才引进</span>
						<div>
							<span>861</span>
							<strong>人</strong>
						</div>
					</div>
					<div class="item" >
						<span class="tip">就业带动</span>
						<div>
							<span>7235</span>
							<strong>人</strong>
						</div>
					</div>
				</div>
			</div>
			<div class="n-card"  @click="openType('成果转化')">
				<p class="name">成果转化</p>
				<div class="items">
					<div class="item" >
						<span class="tip">军需对接</span>
						<div>
							<span>324</span>
							<strong>件</strong>
						</div>
					</div>
					<div class="item" >
						<span class="tip">科研对接</span>
						<div>
							<span>578</span>
							<strong>件</strong>
						</div>
					</div>
					<div class="item" >
						<span class="tip">合作对接</span>
						<div>
							<span>852</span>
							<strong>件</strong>
						</div>
					</div>
					<div class="item" >
						<span class="tip">专利信息</span>
						<div>
							<span>284</span>
							<strong>件</strong>
						</div>
					</div>
				</div>
			</div>
			<div class="n-card"   @click="openType('科研配套')">
				<p class="name">科研配套</p>
				<div class="items">
					<div class="item" >
						<span class="tip">专业技术资格</span>
						<div>
							<span>628</span>
							<strong>件</strong>
						</div>
					</div>
					<div class="item" >
						<span class="tip">保密审查</span>
						<div>
							<span>314</span>
							<strong>件</strong>
						</div>
					</div>
					<div class="item" >
						<span class="tip">信用审查</span>
						<div>
							<span id="count-number" class="timer" data-to=" 675" data-speed="3000" data-from="672">672</span>
							<!--<span>675</span>-->
							<strong>件</strong>
						</div>
					</div>
					<div class="item" >
						<span class="tip">质量审查</span>
						<div>
							<span id="count-number" class="timer" data-to=" 2342" data-speed="30000" data-from="2336">2336</span>
							<!--<span>2342</span>-->
							<strong>件</strong>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="content">
			<div class="left-box">
				<div class="card card1">
					<span class="btn"  @click="openType('企业服务')">企业服务</span>
					<p class="line"></p>
					<div class="name">2019年企业政策申请数</div>
					<div class="chart1" ref="chart1"></div>
				</div>
				<div class="card card2">
					<span class="btn"  @click="openType('园区培训')">园区培训</span>
					<p class="line"></p>
					<div>
						<div class="name" style="margin-right: 0.5rem">2019年企业培训课程</div>
						<chartThree :chartData="yqData" ></chartThree>
					</div>
					<div class="yq-chart">
						<div style="color: #fff;font-size: 0.14rem">2019年企业培训参与数据</div>
						<div class="chart-health" ref="chart2"></div>
					</div>
				</div>
				<div class="card card3">
					<span class="btn"  @click="openType('健康体检')">健康体检</span>
					<p class="line"></p>
					<div class="health-box">
						<div class="name">2019年总检测人数</div>
						<div class="chart-health" ref="chart3"></div>
					</div>
					<div class="radar">
						<my-radar :titleArray="titleArray"></my-radar>
					</div>
				</div>
			</div>
			<div class="center-box">
				<div class="gis">
					<span class="gis-btn"  @click="openType('gis')"></span>
					<!--<img  src="@/assets/img/gis-map.png" alt="" style="width: 100%;height: 100%">-->
					<!--<iframe  id="ifra" src="http://192.168.4.109:8080/" class="gis" frameborder="0" style="width:140%;height:102%;"></iframe>-->
					<!--<iframe  src="http://llz.halohealth.cn:13011" class="gis" frameborder="0" style="width:140%;height:102%;"></iframe>-->
					<gis></gis>
				</div>
				<div class="card card5">
					<span class="btn"  @click="openType('质检认证')">质检认证</span>
					<p class="line" style="width:7.83rem"></p>
					<div class="name">军品质检申请数</div>
					<div class="chart5" ref="chart5"></div>
				</div>
			</div>
			<div class="right-box">
				<div class="card card6">
					<span class="btn"  @click="openType('绿色发展')">园区企业能耗监控</span>
					<p class="line"></p>
					<div class="title">
						<span><img src="@/assets/images/Color label Copy 13.png" alt="">达标</span>
						<span><img src="@/assets/images/Color label Copy 14.png" alt="">警示</span>
						<span><img src="@/assets/images/Color label Copy 15.png" alt="">超标</span>
					</div>
					<div id="text">
						<ul id="text1" >
							<li class="pro_ent_list" v-for="(item,index) in entList" :key="index">
								<span v-if="item.goodNum == 4" class="name good_ent">{{item.entName}}<img src="@/assets/images/hook.svg" alt=""></span>
								<span v-else class="name">{{item.entName}}</span>
								<img v-else src="#" alt="">
								<img v-if="item.water == 1" src="@/assets/images/water (1).png" alt="">
								<img v-if="item.water == 2" src="@/assets/images/water (2).png" alt="">
								<img v-if="item.water == 3" src="@/assets/images/water (3).svg" alt="">
								<img v-if="item.electricity == 1" src="@/assets/images/electricity (1).png" alt="">
								<img v-if="item.electricity == 2" src="@/assets/images/electricity (2).png" alt="">
								<img v-if="item.electricity == 3" src="@/assets/images/electricity (3).png" alt="">
								<img v-if="item.dispose == 1" src="@/assets/images/dispose (1).png" alt="">
								<img v-if="item.dispose == 2" src="@/assets/images/dispose (2).png" alt="">
								<img v-if="item.dispose == 3" src="@/assets/images/dispose (3).png" alt="">
								<img v-if="item.sewage == 1" src="@/assets/images/sewage (1).png" alt="">
								<img v-if="item.sewage == 2" src="@/assets/images/sewage (2).png" alt="">
								<img v-if="item.sewage == 3" src="@/assets/images/sewage (3).png" alt="">
							</li>
						</ul>
						<ul id="text2">
							<li class="pro_ent_list" v-for="(item,index) in entList" :key="index">
								<span v-if="item.goodNum == 4" class="name good_ent">{{item.entName}}<img src="@/assets/images/hook.svg" alt=""></span>
								<span v-else class="name">{{item.entName}}</span>
								<img v-else src="#" alt="">
								<img v-if="item.water == 1" src="@/assets/images/water (1).png" alt="">
								<img v-if="item.water == 2" src="@/assets/images/water (2).png" alt="">
								<img v-if="item.water == 3" src="@/assets/images/water (3).svg" alt="">
								<img v-if="item.electricity == 1" src="@/assets/images/electricity (1).png" alt="">
								<img v-if="item.electricity == 2" src="@/assets/images/electricity (2).png" alt="">
								<img v-if="item.electricity == 3" src="@/assets/images/electricity (3).png" alt="">
								<img v-if="item.dispose == 1" src="@/assets/images/dispose (1).png" alt="">
								<img v-if="item.dispose == 2" src="@/assets/images/dispose (2).png" alt="">
								<img v-if="item.dispose == 3" src="@/assets/images/dispose (3).png" alt="">
								<img v-if="item.sewage == 1" src="@/assets/images/sewage (1).png" alt="">
								<img v-if="item.sewage == 2" src="@/assets/images/sewage (2).png" alt="">
								<img v-if="item.sewage == 3" src="@/assets/images/sewage (3).png" alt="">
							</li>
						</ul>
					</div>
				</div>
				<div class="card card7">
					<span class="btn"  @click="openType('成果转化')">成果转化</span>
					<p class="line"></p>
					<div class="img-list" id="demo">
						<div id="demo1" class="waterfall">
							<div class="item" v-for="item in resData">
								<img :src="item.url" class="icon"/>
								<!--<p>{{item.shortDesc}}</p>-->
							</div>
						</div>
						<div id="demo2" class="waterfall">
							<div class="item" v-for="item in resData">
								<img :src="item.url" class="icon"/>
								<!--<p>{{item.shortDesc}}</p>-->
							</div>
						</div>
					</div>
				</div>
				<div class="card card8">
					<span class="btn"  @click="openType('科研配套')">科研配套</span>
					<p class="line"></p>
					<div class="chart8" ref="chart8"></div>
				</div>
			</div>
		</div>
	</div>
</template>


<script>
	import '@/view/achievement/jquery.js'
	import '@/view/achievement/jquery.num.js'
	import {getFactorsData,getlistByCenterData} from "@/libs/API/productionFactors"
	import {findExhibitionResourcesData,findExhibitionData,getDetectApply} from "@/libs/API/exhibition"
	import chartThree from './chart-three'
	import radar from '@/components/radar/radar2'
	import gis from './3dgis'
	export default {
		components: {
			'my-radar': radar,
			chartThree,
			gis
		},
		data() {
			return {
				viewer:'',
				isLoadMap:true,
				currDate:new Date(),
				qyxtData:[],//企业服务杏坛
				qygycData:[],//企业服务工业城
				qybjData:[],//企业服务北滘
				kyslData:[],//科研受理数量
				kypassData:[],//科研通过数量
				kynoPassData:[],//科研不通过数量
				yqData:[],
				baomingData:[],//报名
				canyuData:[],//实际参与
				detectApply:[],//质检申请数
				//企业指标监测
				entList: [],
				resData:[], //瀑布流图片
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
				chartOneData: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],//图表一数据
				xtData: [0,0,0,0,0,0,0,0,0,0,0,0],//杏坛数据
				bjData: [0,0,0,0,0,0,0,0,0,0,0,0], //北滘数据
				gycData: [0,0,0,0,0,0,0,0,0,0,0,0], //工业城数据
			}
		},
		created() {
			//用于绿色发展中心强制刷新页面
			localStorage.setItem('cesiumShow','1')
			// this.fnDate()
			this.getFactorsData()
			this.findExhibitionData()
			this.findExhibitionData2()
			this.findExhibitionData3()
			this.findExhibitionData4()
			this.findExhibitionResourcesData()
			this.getDetectApply({year:2019})


		},
		mounted () {
			this.init()
			this.imgSwiper()
			this.textSwiper()
			// setInterval(()=>{
			// 	this.fnDate()
			// },1000)
			this.timer=setInterval(()=>{
				$('.timer').each(count)
				$('.count-title').removeClass('timer');
			},100)
			clearInterval(this.timer)
		},
		updated() {
			setTimeout(()=>{
				this.healthShow()
				this.yuanquShow()
				this.zhijianShow()
				this.detectShow()
				this.entServiceShow()
			},500)
		},
		methods: {
			fontSize(res){
				let docEl = document.documentElement,
					clientWidth = window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth;
				if (!clientWidth) return;
				let fontSize = 100 * (clientWidth / 2304);
				return res*fontSize;
			},
			openType(type){
				if(type==='绿色发展'){
					this.$router.push('/proFactors')
				}else if(type==='成果转化'){
					this.$router.push('/achievement')
				}else if(type==='科研配套'){
					this.$router.push('/supService')
				}else if(type==='企业管理'){
					this.$router.push('/entAdmin')
				}else if(type==='质检认证'){
					this.$router.push('/detect')
				}else if(type==='健康体检'){
					this.$router.push('/health')
				}else if(type==='园区培训'){
					this.$router.push('/course')
				}else if(type==='企业服务'){
					this.$router.push('/entService')
				}else if(type==='gis'){
					this.$router.push('/gis')
				}
				// const { href } = this.$router.resolve({
				// 	path: '/detect'
				// })
				// window.open(href, '_blank')
			},
			//图表自适应
			init() {
				setTimeout(() => {
					window.onresize = () =>{
						this.$echarts.init(this.$refs.chart1).resize()
						this.$echarts.init(this.$refs.chart2).resize()
						this.$echarts.init(this.$refs.chart3).resize()
						this.$echarts.init(this.$refs.chart4).resize()
						this.$echarts.init(this.$refs.chart5).resize()
						this.$echarts.init(this.$refs.chart6).resize()
						this.$echarts.init(this.$refs.chart7).resize()
						this.$echarts.init(this.$refs.chart8).resize()
					}
				},100)
			},
			//获取当前时间
			fnDate(){
				let date=new Date();
				let year=date.getFullYear();//当前年份
				let month=date.getMonth();//当前月份
				let data=date.getDate();//天
				let hours=date.getHours();//小时
				let minute=date.getMinutes();//分
				let second=date.getSeconds();//秒
				this.currDate=year+"年"+this.fnW((month+1))+"月"+this.fnW(data)+"日" +' '+this.fnW(hours)+":"+this.fnW(minute)+":"+this.fnW(second)
			},
			//补位 当某个字段不是两位数时补0
			fnW(str){
				let num;
				str>9?num=str:num="0"+str;
				return num;
			},
			// 图片无缝滚动
			imgSwiper() {
				let speed=80; //数字越大速度越慢
				let tab=document.getElementById("demo");
				let tab1=document.getElementById("demo1");
				let tab2=document.getElementById("demo2");
				tab2.innerHTML=tab1.innerHTML; //克隆demo1为demo2
				function Marquee(){
					if(tab2.offsetTop-tab.scrollTop<=tab.offsetTop+200)//当滚动至demo1与demo2交界时
						tab.scrollTop-=tab1.offsetHeight //demo跳到最顶端
					else{
						tab.scrollTop++
					}
				}
				let MyMar=setInterval(Marquee,speed);
				tab.onmouseover=function() {clearInterval(MyMar)};//鼠标移上时清除定时器达到滚动停止的目的
				tab.onmouseout=function() {MyMar=setInterval(Marquee,speed)};//鼠标移开时重设定时器

			},
			// 文字无缝滚动
			textSwiper() {
				let speed=100; //数字越大速度越慢
				let tab=document.getElementById("text");
				let tab1=document.getElementById("text1");
				let tab2=document.getElementById("text2");
				tab2.innerHTML=tab1.innerHTML; //克隆demo1为demo2
				function Marquee(){
					if(tab2.offsetTop-tab.scrollTop<=tab.offsetTop){ //当滚动至demo1与demo2交界时
						tab.scrollTop-=tab1.offsetHeight //demo跳到最顶端
					} else{
						tab.scrollTop++
					}
				}
				let MyMar=setInterval(Marquee,speed);
				tab.onmouseover=function() {clearInterval(MyMar)};//鼠标移上时清除定时器达到滚动停止的目的
				tab.onmouseout=function() {MyMar=setInterval(Marquee,speed)};//鼠标移开时重设定时器

			},
			//质检申请数
			async getDetectApply(params){
				let res = await getDetectApply(params)
				if(res.code === 200){
					this.detectApply =res.data.list
					this.detectApply.forEach((v)=>{
						if(v.parkName==='杏坛'){
							this.xtData.splice(v.month - 1,1,parseInt(v.total))
						}else if(v.parkName==='北滘'){
							this.bjData.splice(v.month - 1,1,parseInt(v.total))
						}else {
							this.gycData.splice(v.month - 1,1,parseInt(v.total))
						}
					})
				}
			},
			//获取展厅资源
			async findExhibitionResourcesData(){
				let data={
					moduleId:2,
					size:200
				}
				let res = await findExhibitionResourcesData(data)
				if(res.code === 200){
					if(res.data.list.length>0){
						this.resData = res.data.list
					}else{
						console.log(res.message)
					}
				}},
			//获取生产要素数据
			async getFactorsData() {
				let res = await getlistByCenterData();
				// console.log(res)
				if (res.code === 200) {
					let list = res.data;
					for (let i = 0; i < list.length; i++) {
						let parkName = list[i].parkName;
						if (list[i].enterpriseId) { //判断是否是企业监测数据
							let imgUrl;
							let entGoodTarget = 0;
							if (list[i].typeId === 9) {
								if (list[i].data == 1) {
									entGoodTarget = 1;
									imgUrl = 1;
								}
								if (list[i].data == 2) {
									imgUrl = 2;
								}
								if (list[i].data == 3) {
									imgUrl = 3;
								}
							}
							if (list[i].typeId === 10) {
								if (list[i].data == 1) {
									entGoodTarget = 1;
									imgUrl = 1;
								}
								if (list[i].data == 2) {
									imgUrl = 2;
								}
								if (list[i].data == 3) {
									imgUrl = 3;
								}
							}
							if (list[i].typeId === 11) {
								if (list[i].data == 1) {
									entGoodTarget = 1;
									imgUrl = 1;
								}
								if (list[i].data == 2) {
									imgUrl = 2;
								}
								if (list[i].data == 3) {
									imgUrl = 3;
								}
							}
							if (list[i].typeId === 12) {
								if (list[i].data == 1) {
									entGoodTarget = 1;
									imgUrl = 1;
								}
								if (list[i].data == 2) {
									imgUrl = 2;
								}
								if (list[i].data == 3) {
									imgUrl = 3;
								}
							}
							if (!this.entList) {
								if (list[i].typeId === 9) {
									this.entList.push({
										goodNum: entGoodTarget,
										entId: list[i].enterpriseId,
										entName: list[i].enterpriseName,
										water: imgUrl,
									})
								}
								if (list[i].typeId === 10) {
									this.entList.push({
										goodNum: entGoodTarget,
										entId: list[i].enterpriseId,
										entName: list[i].enterpriseName,
										electricity: imgUrl,
									})
								}
								if (list[i].typeId === 11) {
									this.entList.push({
										goodNum: entGoodTarget,
										entId: list[i].enterpriseId,
										entName: list[i].enterpriseName,
										dispose: imgUrl,
									})
								}
								if (list[i].typeId === 12) {
									this.entList.push({
										goodNum: entGoodTarget,
										entId: list[i].enterpriseId,
										entName: list[i].enterpriseName,
										sewage: imgUrl,
									})
								}
							} else {
								let lock = true;
								for (let l = 0; l < this.entList.length; l++) {
									if (list[i].enterpriseId == this.entList[l].entId) {
										lock = false;
										if (list[i].typeId === 9) {
											this.entList[l].goodNum += entGoodTarget;
											this.entList[l].water = imgUrl;
										}
										if (list[i].typeId === 10) {
											this.entList[l].goodNum += entGoodTarget;
											this.entList[l].electricity = imgUrl;
										}
										if (list[i].typeId === 11) {
											this.entList[l].goodNum += entGoodTarget;
											this.entList[l].dispose = imgUrl;
										}
										if (list[i].typeId === 12) {
											this.entList[l].goodNum += entGoodTarget;
											this.entList[l].sewage = imgUrl;
										}
									}
								}
								if (lock) {
									if (list[i].typeId === 9) {
										this.entList.push({
											goodNum: entGoodTarget,
											entId: list[i].enterpriseId,
											entName: list[i].enterpriseName,
											water: imgUrl,
										})
									}
									if (list[i].typeId === 10) {
										this.entList.push({
											goodNum: entGoodTarget,
											entId: list[i].enterpriseId,
											entName: list[i].enterpriseName,
											electricity: imgUrl,
										})
									}
									if (list[i].typeId === 11) {
										this.entList.push({
											goodNum: entGoodTarget,
											entId: list[i].enterpriseId,
											entName: list[i].enterpriseName,
											dispose: imgUrl,
										})
									}
									if (list[i].typeId === 12) {
										this.entList.push({
											goodNum: entGoodTarget,
											entId: list[i].enterpriseId,
											entName: list[i].enterpriseName,
											sewage: imgUrl,
										})
									}
								}
							}
						} else {

						}
					}
				}
				// this.entAutoPlay();
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
								this.chartOneData.splice(v.month - 1,1,parseInt(v.data))
								this.total = this.total + parseInt(v.data)
							}
						})
					}
				} else {
					console.log(res.message)
				}
			},
			//获取展厅数据2
			async findExhibitionData2() {
				let year = 2019
				let data = {
					year: year,
					center: 6
				}
				let res = await findExhibitionData(data)
				if (res.code === 200) {
					// console.log(res.data)
					if (res.data.length > 0) {
						res.data.forEach(v=>{
							if(v.typeId === 21 || v.typeId === 22){//图表一
								this.yqData.push({
									value:v.data,
									name:v.typeName
								})
							}else if(v.typeId === 26 || v.typeId === 28){//图表三
								this.baomingData.push(v.data)
							}else if(v.typeId === 27 || v.typeId === 29){//图表四
								this.canyuData.push(v.data)
							}
						})
					}
				}else{
					console.log(res.message)
				}
			},
			//获取展厅数据3(科研配套)
			async findExhibitionData3() {
				let year = 2019
				let data = {
					year: year,
					center: 3
				}
				let res = await findExhibitionData(data)
				if (res.code === 200) {
					if (res.data.length > 0) {
						res.data.forEach(v => {
							//法人（121.122.123），专业技术资格登记情况（124-126），本年质量管理审查(127-129).本年履约信用审查(130-132),本年保密管理审查(133-135)
							 if(v.typeId === 121|| v.typeId === 124 || v.typeId === 127|| v.typeId === 130|| v.typeId === 133){//受理
								this.kyslData.push(v.data)
							 } else if(v.typeId === 122|| v.typeId === 125 || v.typeId === 128 || v.typeId === 131 || v.typeId === 134){
								 this.kypassData.push(v.data)
							} else if(v.typeId === 123|| v.typeId === 126 || v.typeId === 129|| v.typeId === 132|| v.typeId === 135){
								 this.kynoPassData.push(v.data)
							}
						})
					}
				} else {
					console.log(res.message)
				}
			},
			//获取展厅数据4(企业服务)
			async findExhibitionData4(){
				let year = 2019
				let data = {
					year:year,
					center:7
				}
				let res= await findExhibitionData(data)
				if(res.code === 200){
					if(res.data.length>0){
						res.data.forEach(v=>{
							if(v.typeId === 54){
								if(v.parkName==='杏坛'){
									this.qyxtData.splice(v.month - 1,1,parseInt(v.data))
									this.total = this.total + parseInt(v.data)
								}else if(v.parkName==='工业城'){
									this.qygycData.splice(v.month - 1,1,parseInt(v.data))
									this.total = this.total + parseInt(v.data)
								}else if(v.parkName==='北滘'){
									this.qybjData.splice(v.month - 1,1,parseInt(v.data))
									this.total = this.total + parseInt(v.data)
								}
							}
						})
					}
					// console.log(res.data)
				}else{
					console.log(res.message)
				}
			},
			//健康体检
			healthShow() {
				let myChart = this.$echarts.init(this.$refs.chart3)
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
							name: '月',
							nameTextStyle: {
								color: '#fff',
								fontSize:this.fontSize(0.14)
							},
							// data: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
							data: ['1', '2', '3', '4', '5', '6'],
							axisLine: {
								lineStyle: {
									type: 'solid',
									color: '#FFFFFF',//左边线的颜色
									width: '1'//坐标线的宽度
								}
							},
							axisLabel: {
								show: true,
								textStyle: {
									color: '#fff',
									fontSize:this.fontSize(0.14)
								},
							},
						}
					],
					yAxis: [
						{
							type: 'value',
							splitLine:{show: false},//去除网格线
							// splitNumber: 4,
							// splitLine: {
							// 	lineStyle: {
							// 		type: 'solid',
							// 		color: '#3E495B',//左边线的颜色
							// 		width: '3'//坐标线的宽度
							// 	}
							// },
							axisLine: {
								// show: false,
								lineStyle: {
									type: 'solid',
									color: '#FFFFFF',//左边线的颜色
									width: '2'//坐标线的宽度
								}
							},
							axisLabel: {
								show: true,
								textStyle: {
									fontSize:this.fontSize(0.14)
								}
							},
						}
					],
					grid: {
						left: '0',
						right: '15%',
						bottom: '0',
						top: '12%',
						containLabel: true
					},
					series: [
						{
							type: 'bar',
							// highlightPolicy: 'ancestor',
							data: this.chartOneData.slice(0,6),
							barWidth: '70%',
							// label: {
							// 	show: true,
							// 	position: 'top',
							// 	color: '#AFBDD1',
							// 	fontSize: '12'
							// },
							itemStyle: {
								emphasis: {
									barBorderRadius: 10
								},
								normal: {
									color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [{
										offset: 0,
										color: '#D1FFF0'
									}, {
										offset: 1,
										color: '#A5FDDD'
									}]),
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
						},
					]
				})
			},
			//园区培训
			yuanquShow() {
				let myChart = this.$echarts.init(this.$refs.chart2)
				// 绘制图表
				myChart.setOption({
					tooltip: {
						trigger: 'axis',
						axisPointer: {
							type: 'shadow'
						}
					},
					legend: {
						data: ['实际参与人数', '报名人数'],
						itemWidth:10,//图例的宽度
						itemHeight:15,//图例的高度
						left:'20%',
						top:'-2.2%',
						textStyle:{//图例文字的样式
							color:'#fff',
							fontSize:this.fontSize(0.14)
						}
					},
					grid: {
						left: this.fontSize(0.9),
						top:this.fontSize(0.85),
					},
					xAxis: {
						type: 'value',
						// name: 'Days',
						axisLabel: {
							formatter: '{value}'
						},
						splitLine:{show: false},//去除网格线
						nameTextStyle: {
							color: '#fff',
							fontSize:this.fontSize(0.14)
						},
						axisLine: {
							lineStyle: {
								type: 'solid',
								color: '#FFFFFF',//左边线的颜色
								width: '1'//坐标线的宽度
							}
						},
					},
					yAxis: {
						type: 'category',
						// inverse: true,
						data: ['线上课', '线下课'],
						axisLabel: {
							margin: 20,
							textStyle: {
								color: '#fff',
								fontSize:this.fontSize(0.14)
							},
						},
						axisLine: {
							lineStyle: {
								type: 'solid',
								color: '#FFFFFF',//左边线的颜色
								width: '1'//坐标线的宽度
							}
						},
					},
					series: [
						{
							type: 'bar',
							name: '实际参与人数',
							data: this.canyuData,
							barWidth : this.fontSize(0.25),//柱图宽度
							markPoint: {
								symbolSize: 1,
								symbolOffset: [0, '50%'],
							},
							itemStyle: {
								emphasis: {
									barBorderRadius: 10
								},
								normal: {
									color:'#CCFECD'
								},
							},
						},
						{
							type: 'bar',
							name: '报名人数',
							data: this.baomingData,
							barWidth : this.fontSize(0.25),//柱图宽度
							itemStyle: {
								emphasis: {
									barBorderRadius: 10
								},
								normal: {
									color:'#8EEBF6'
								}
							},
						},

					]
				})
			},
			//质检认证
			zhijianShow() {
				let myChart = this.$echarts.init(this.$refs.chart5)
				// 绘制图表
				myChart.setOption({
					tooltip : {
						trigger: 'axis',
						axisPointer: {
							type: 'cross',
							label: {
								backgroundColor: '#6a7985'
							}
						}
					},

					legend: {
						data:['杏坛','北滘','工业城'],
						right:'5%',
						top:'0%',
						// itemWidth:10,//图例的宽度
						// itemHeight:18,//图例的高度
						textStyle:{//图例文字的样式
							color:'#fff',
							fontSize:this.fontSize(0.14)
						}
					},

					grid: {
						left: '3%',
						right: '2%',
						bottom: '2%',
						containLabel: true
					},
					xAxis : [
						{
							type : 'category',
							axisLine: {
								lineStyle: {
									type: 'solid',
									color: '#FFFFFF',//左边线的颜色
									width: '1'//坐标线的宽度
								}
							},
							boundaryGap : false,
							// data : ['周一','周二','周三','周四','周五','周六','周日']
							data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],//图表一数据
						}
					],
					yAxis : [
						{
							type : 'value',
							splitLine:{
								show:false
							},
							axisLine: {
								lineStyle: {
									type: 'solid',
									color: '#FFFFFF',//左边线的颜色
									width: '1'//坐标线的宽度
								}
							},
						}
					],
					series : [
						{
							name:'杏坛',
							type:'line',
							stack: '总量',
							smooth:0.3,
							areaStyle: {},
							data:this.xtData,
							itemStyle: {
								emphasis: {
									barBorderRadius: 10
								},
								normal : {
									color:'#98B4FF', //改变折线点的颜色
									lineStyle:{
										color:'#98B4FF' //改变折线颜色
									}
								}
							}
						},
						{
							name:'北滘',
							type:'line',
							stack: '总量',
							areaStyle: {},
							smooth:0.3,
							data:this.bjData,
							itemStyle: {
								emphasis: {
									barBorderRadius: 10
								},
								normal : {
									color:'#ADFFDB', //改变折线点的颜色
									lineStyle:{
										color:'#ADFFDB' //改变折线颜色
									}
								}
							}
						},
						{
							name:'工业城',
							type:'line',
							stack: '总量',
							areaStyle: {},
							data:this.gycData,
							smooth:0.3,
							itemStyle: {
								emphasis: {
									barBorderRadius: 10
								},
								normal : {
									color:'#7BCEFF', //改变折线点的颜色
									lineStyle:{
										color:'#7BCEFF' //改变折线颜色
									},
								}
							}
						},
					]
				})
			},
			//科研配套
			detectShow() {
				let myChart = this.$echarts.init(this.$refs.chart8)
				// 绘制图表
				myChart.setOption({
					tooltip: {},
					radar: {
						shape: 'circle',
						radius: this.fontSize(0.75),
						name: {
							textStyle: {
								color: '#fff',
								borderRadius: 10,
								fontSize: this.fontSize(0.16),
								padding: [2, 3]
							}
						},
						indicator: [
							{ name: '法人资格', max: 150},
							{ name: '专业技术资格登记', max: 150},
							{ name: '履约信用审查', max: 150},
							{ name: '保密管理审查', max: 150},
							{ name: '质量管理审查', max: 150},
						]
					},
					series: [{
						type: 'radar',
						areaStyle: {
							normal: {
								color:  ['rgba(255, 229, 174, 0.6)',
								], // 选择区域颜色
							},
							color: ['rgba(114, 172, 209, 0.1)'], //圆环颜色
							shadowColor: 'aqua', // 圆颜色
							shadowBlur: 50
							},
						data : [
							{
								value : this.kyslData,
								name : '受理',
								// label: {
								// 	normal: {
								// 		show: true,
								// 		color:'#fff'
								// 	},
								// },
							},
							{
								value : this.kypassData,
								name : '通过'
							},
							{
								value : this.kynoPassData,
								name : '未通过'
							}
						]
					}]
				})
			},
			//企业服务
			entServiceShow() {
				let myChart = this.$echarts.init(this.$refs.chart1)
				// 绘制图表
				myChart.setOption({
					legend: {
						data:['杏坛','工业城','北滘'],
						right:'5%',
						top:'0%',
						itemWidth:10,//图例的宽度
						itemHeight:18,//图例的高度
						textStyle:{//图例文字的样式
							color:'#fff',
							fontSize:this.fontSize(0.14)
						}
					},
					tooltip: {},
					grid: {
						left: '3%',
						right: '10%',
						bottom: '10%',
						top:'32%',
						containLabel: true
					},
					xAxis: [
						{
							type: 'category',
							name: '月',
							nameTextStyle: {
								color: '#fff',
								fontSize:this.fontSize(0.14)
							},
							// data: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
							data: ['1', '2', '3', '4', '5', '6'],
							axisLine: {
								lineStyle: {
									type: 'solid',
									color: '#FFFFFF',//左边线的颜色
									width: '1'//坐标线的宽度
								}
							},
							axisLabel: {
								show: true,
								textStyle: {
									color: '#fff',
									fontSize:this.fontSize(0.14)
								},
							},
						}
					],
					yAxis: [
						{
							type: 'value',
							splitNumber: 4,
							splitLine: {
								show: false,//去除网格线
								lineStyle: {
									type: 'solid',
									color: '#3E495B',//左边线的颜色
									width: '1'//坐标线的宽度
								}
							},
							axisLine: {
								// show: false,
								lineStyle: {
									type: 'solid',
									color: '#FFFFFF',//左边线的颜色
									width: '2'//坐标线的宽度
								}
							},
							axisLabel: {
								show: true,
								// textStyle: {
								// 	color: '#626F86',
								// 	fontSize: '28'
								// }
							},
						}
					],
					series: [
						{
							type: 'bar',
							name: '杏坛',
							data: this.qyxtData.slice(0,6),
							label: {
								show: true,
								position: 'top',
								color: '#AFBDD1',
								fontSize: this.fontSize(0.12)
							},
							itemStyle: {
								normal: {
									color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [{
										offset: 0,
										color: '#9AF2FD'
									}, {
										offset: 1,
										color: '#61E1FB'
									}]),
								}
							}
						},
						{
							type: 'bar',
							name: '工业城',
							data: this.qygycData.slice(0,6),
							label: {
								show: true,
								position: 'top',
								color: '#AFBDD1',
								fontSize: this.fontSize(0.12)
							},
							itemStyle: {
								normal: {
									color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [{
										offset: 0,
										color: '#99DEFC'
									}, {
										offset: 1,
										color: '#5CBEFF'
									}]),
								}
							}
						},
						{
							type: 'bar',
							name: '北滘',
							data: this.qybjData.slice(0,6),
							label: {
								show: true,
								position: 'top',
								color: '#AFBDD1',
								fontSize: this.fontSize(0.12)
							},
							itemStyle: {
								normal: {
									color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [{
										offset: 0,
										color: '#00C3FF'
									}, {
										offset: 1,
										color: '#2AE0FF'
									}]),
								}
							}
						},
					]
				})
			},
		}
	}
</script>
<style>
	@font-face {
		font-family: LCDUltra;
		src: url('../../assets/fonts/lcd.ttf');
	}
</style>
<style lang="less" scoped>
	.index{
		background:url("../../assets/images/bg3.png") no-repeat;
		background-size: 100% 100%;
		padding-bottom: 0.15rem;
		.head{
			position: revert;
			padding: 0.30rem 0 0.25rem;
			img{
				height: 0.90rem;
			}
			.l-box{
				position: absolute;
				left: 0.50rem;
				top: 0.80rem;
				font-size: 0.22rem;
				font-family:PingFangSC-Regular,PingFang SC;
				font-weight:400;
				color:rgba(255,255,255,1);
				letter-spacing:0.02rem;
				span{
					margin-right: 0.20rem ;
				}
			}
			.r-box{
				position: absolute;
				right: 0.34rem;
				top: 0.80rem;
				img{
					width: 5.73rem;
				}
			}
		}
		.number{
			display: flex;
			align-items: center;
			justify-content: space-between;
			padding: 0 0.27rem 0 0.31rem;
			.n-card{
				width:7.07rem;
				height:1.75rem;
				background-image: url('../../assets/images/border3.png');
				background-size: 100% 100%;
				cursor:pointer;
				.name{
					font-size:0.22rem;
					font-family:PingFangSC-Regular,PingFang SC;
					font-weight:400;
					color:rgba(255,255,255,1);
					line-height:0.48rem;
					text-shadow:0px 0px 0px rgba(0,96,156,1);
					margin-top: 0.05rem;
				}
				.items{
					display: flex;
					align-items: center;
					justify-content: space-between;
					margin-top: 0.20rem;
					padding-left: 0.28rem;
					padding-right: 0.1rem;
					width: 100%;
					.item{
						font-size:0.50rem;
						font-family:LCDUltra;
						color:rgba(72,250,255,1);
						text-shadow:1px 2px 3px rgb(2, 177, 181);
						text-align: left;
						display: flex;
						flex-direction: column;
						justify-content: space-between;
						margin-right:0.20rem;
						.tip{
							font-size:0.17rem;
							font-family:PingFangSC-Regular,PingFang SC;
							font-weight:400;
							color:rgba(255,255,255,1);
						}
						strong{
							font-size: 0.13rem;
							font-weight: 400;
							margin-left: -0.12rem;
						}
					}
					.item:last-child{
						margin-right:0;
					}
				}
			}
		}
		.content{
			padding: 0 0.27rem 0 0.31rem;
			display: flex;
			justify-content: space-between;
			.card{
				width:7.08rem;
				height:3.06rem;
				background:rgba(43,54,72,1);
				border-radius:0.05rem;
				margin-top: 0.12rem;
				background-size: 100% 100%;
				overflow: hidden;
				cursor:pointer;
				position: relative;
				.btn{
					position: absolute;
					height: 0.5rem;
					line-height: 0.55rem;
					width: 4.8rem;
					top: 0;
					left: 0;
					display: inline-block;
					z-index: 9;
					font-size:0.22rem;
					font-family:PingFangSC-Medium,PingFang SC;
					font-weight:500;
					color:rgba(255,255,255,1);
					text-align: left;
					padding-left: 0.16rem;
				}
				.line{
					position: absolute;
					top: 0.53rem;
					left: 0;
					width:7.08rem;
					height:0.01rem;
					background-image: linear-gradient(to right, rgba(173, 218, 255, 1),rgba(214, 239, 255, 0));

				}
			}
			.card1{
				/*background-image: url('../../assets/img/card1.png');*/
				position: relative;
				padding-left: 0.1rem;
				.chart1{
					width:7.02rem;
					height:3.16rem;
					margin-top: 0.15rem;
				}
				.name{
					position: absolute;
					top: 0.65rem;
					left: 0.1rem;
					color: #ffffff;
					font-size: 0.16rem;
				}

			}
			.card2{
				/*background-image: url('../../assets/img/card2.png');*/
				display: flex;
				padding-left: 0.1rem;
				>div{
					margin-top: 0.65rem;
					flex: 1;
					.name{
						font-size:0.14rem;
						font-family:PingFangSC-Regular,PingFang SC;
						font-weight:400;
						color:rgba(255,255,255,1);
						margin-top: 0.05rem;
					}
				}
				.chart-health{
					/*width:4.0rem;*/
					height:3.10rem;
					margin-top: -0.65rem;
				}
			}
			.card3{
				/*background-image: url('../../assets/img/card3.png');*/
				display: flex;
				align-items: center;
				justify-content: space-between;
				text-align: left;
				padding-left: 0.25rem;
				padding-top: 0.2rem;
				>div{
					flex: 2;
				}
				.health-box{
					.chart-health{
						width:3.06rem;height:2.05rem;
						margin-top: 0.10rem;
					}
					.name{
						font-size:0.13rem;
						font-family:PingFangSC-Regular,PingFang SC;
						font-weight:400;
						color:rgba(255,255,255,1);
						margin-top: 0.4rem;
					}
				}
				.radar{
					flex: 1.5;
					margin-top: 0.12rem;
				}
			}
			.card5{
				/*background-image: url('../../assets/img/card5.png');*/
				position: relative;
				.chart5{
					width:7.35rem;
					height:2.90rem;
					margin-top: 0.12rem;
				}
				.name{
					position: absolute;
					top: 22%;
					left: 0.6rem;
					color: #ffffff;
					font-size: 0.16rem;
				}
			}
			.card6{
				/*background-image: url('../../assets/img/card6.png');*/
			}
			.card7{
				/*background-image: url('../../assets/img/card7.png');*/
			}
			.card8{
				/*background-image: url('../../assets/img/card8.png');*/
				.chart8{
					min-height:2.80rem;
					margin-top: 0.5rem;
				}
			}
			.left-box{
				display: flex;
				flex-direction: column;
				.card{
					.title{
						height:0.43rem;
						line-height: 0.43rem;
						text-align: left;
						font-size:0.18rem;
						font-weight:500;
						color:rgba(255,255,255,1);
						border-bottom: 0.01rem solid #ADDAFF;
						span{
							width:2.07rem;
							height:0.43rem;
							padding-left:0.2rem;
							background:rgba(255,255,255,0.2);
							box-shadow:0rem 0.02rem 0.04rem 0rem rgba(0,120,174,1);
							border:0.01rem solid;
							display: inline-block;
							border-image:linear-gradient(270deg, rgba(155,210,254,1), rgba(255,255,255,1)) 0.01 0.01;
							font-size:0.18rem;
							font-family:PingFangSC-Medium,PingFang SC;
							font-weight:500;
							color:rgba(255,255,255,1);
							/*text-shadow:0px 0px 0px rgba(0,143,178,1);*/
							background:linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(161,209,247,1) 100%);
							-webkit-background-clip:text;
							-webkit-text-fill-color:transparent;
						}
					}
				}
			}
			.center-box{
				padding: 0 0.14rem;
				width:7.94rem;
				box-sizing: content-box;
				margin-top: 0.12rem;
				.showImg{
					z-index: 99;
				}
				.gis{
					width:7.94rem;
					height:6.24rem;
					background:linear-gradient(225deg,rgba(210,231,244,0.46) 0%,rgba(167,203,229,0.46) 100%);
					/*box-shadow:0 0 0.3rem 0.05rem rgba(72,250,255,1);*/
					border-radius:0.05rem;
					overflow: hidden;
					position: relative;
					.gis-btn{
						position: absolute;
						height: 0.6rem;
						width: 2.8rem;
						top: 0;
						left: 0;
						display: inline-block;
						z-index: 9;
						cursor: pointer;
					}
					img{
						height: 100%;
						position: absolute;
						left: 0;
						top: 0;
					}
				}
				.card{
					width:7.94rem;
					height:3.06rem;
				}
			}
			.right-box{
				display: flex;
				flex-direction: column;
				.card6{
					padding: 0 0.2rem;
					.title{
						display: flex;
						align-items: center;
						justify-content: flex-end;
						font-size:0.16rem;
						line-height: 0.42rem;
						font-family:PingFangSC-Regular,PingFang SC;
						font-weight:400;
						color:rgba(255,255,255,1);
						span{
							margin-right: 0.1rem;
							img{
								margin-right: 0.05rem;
							}
						}
					}
					ul{
						list-style: none;
						li{
							display: flex;
							justify-content: space-between;
							text-align: left;
							align-items: center;
							height: 0.47rem;
							line-height: 0.47rem;
							border-top: solid 0.01rem rgba(231, 240, 255, 0.23);
							font-size:0.19rem;
							font-family:PingFangSC-Regular,PingFang SC;
							font-weight:400;
							color:rgba(175,189,209,1);
							.name{
								flex: 1;
							}
							.good_ent{
								color: #7EFF40;
								display: flex;
								align-items: center;
								img{
									margin-left: 0.10rem;
								}
							}
							img{
								margin-right: 0.46rem;
							}
							img:last-child{
								margin-right: 0.2rem;
							}
						}
					}
				}
				.card7{
					.img-list{
						padding:0 0.24rem 0 0.14rem;
						margin-top: 0.60rem;
						height:2.40rem;
						overflow: hidden;
						.waterfall{
							-moz-column-count:4; /* Firefox */
							-webkit-column-count:4; /* Safari 和 Chrome */
							column-count:4; /* 用整数值来定义列数。不允许负值 */
							margin-bottom: 0.08rem;
						}
						.item{
							width:1.63rem;
							-moz-page-break-inside: avoid;
							-webkit-column-break-inside: avoid;
							break-inside: avoid;
							border-radius:0.08rem;
							overflow: hidden;
							margin-bottom: 0.12rem;
							background-color: #ffffff;
							img{
								width:1.63rem;
								vertical-align: middle;
							}
						}
					}
				}
			}
		}
		#text{
			height: 2.46rem;
			overflow: hidden;
			margin-top: 0.18rem;
		}
	}
</style>
