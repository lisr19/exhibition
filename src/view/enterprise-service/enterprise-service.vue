<template>
  <div class="enterprise-service">
    <!--<router-link to="/index" class="enterprise-title">企业服务中心</router-link>-->
    <a class="enterprise-title" @click="goBack('企业服务')">
	    <img src="@/assets/img/qyfw.png" alt="" style="height: 0.8rem">
    </a>
      <div class="enterprise-body">
        <!--左边部分-->
        <div style="width: 4.22rem;display: inline-block;vertical-align: top;margin-top: 0.32rem;">
          <c-one ref="chartOne" :chartData="chartOne"></c-one>
          <c-one ref="chartTwo" :chartData="chartTwo"></c-one>
          <c-one ref="chartThree" :chartData="chartThree"></c-one>
          <c-two ref="chartFour" :title="chartFour.title" :data="chartFour.data" ></c-two>
        </div>
        <!--中间部分-->
        <div style="width: 8.57rem;margin-left: 0.62rem;display: inline-block;vertical-align: top;margin-top: 0.32rem;">
          <div class="enterprise-select">
            <!--<input class="select-input" :placeholder="placeholder"/>-->
            <div class="select-body">
              <div class="select-scroll-body" id="select">
                <div id="select1">
                  <div v-for="(item,index) in patentData" style="display: inline-block">
                    <div class="select-item" :style="(index+1)%2===0?'marginLeft:0.82rem':'marginLeft:0'">
                      <img src="@/assets/images/patent.png"/>
                      <span class="select-item-title">{{item.name}}</span>
                      <span class="select-item-desc">{{item.shenqinghao}}</span>
                      <span class="select-item-desc" style="height: 0.42rem">{{item.desc}}</span>
                    </div>
                    <div class="select-line"></div>
                  </div>
                </div>
                <div id="select2"></div>
              </div>
            </div>
          </div>
          <c-two ref="chartFive" :title="chartFive.title" :data="chartFive.data" style="float: left"></c-two>
          <c-three ref="chartSix" :chartData="chartSix" style="float: left;margin-left: 0.13rem"></c-three>
          <c-one ref="chartSeven" :chartData="chartSeven" style="float: left"></c-one>
          <c-one ref="chartEight" :chartData="chartEight" style="float: left;margin-left: 0.13rem"></c-one>
        </div>
        <!--右边部分-->
        <div style="width: 4.22rem;margin-left: 0.62rem;display: inline-block;vertical-align: top;margin-top: 0.32rem;">
          <div class="enterprise-radar">
            <div class="radar-title">国家军民融合公共服务平台</div>
            <my-radar :titleArray="titleArray" style="margin-top: 0.8rem;width: 3rem;height: 3rem"></my-radar>
          </div>
          <c-two ref="chartNight" :title="chartNight.title" :data="chartNight.data"></c-two>
          <c-one ref="chartTen" :chartData="chartTen" style="float: left;"></c-one>
        </div>
      </div>
  </div>
</template>

<script>
  import {findExhibitionData,findPatentData} from "@/libs/API/exhibition";
  import myChartOne from './charts-item1'
  import myChartTwo from './charts-item2'
  import myChartThree from './charts-item3'
  import radar from '@/components/radar/radar'
  import '@/assets/iconfont/iconfont.css'

  export default {
    name: "enterprise-service",
    components: {
      'c-one': myChartOne,
      'c-two': myChartTwo,
      'c-three': myChartThree,
      'my-radar': radar
    },
    data() {
      return {
	      xtYear:0,
	      bjYear:0,
	      gycYear:0,
        placeholder: '\ue606 请输入关键词进行搜索', //输入框提示内容
        titleArray: [
          {
            name: '中科院成果'
          },
          {
            name: '军工大型科研仪器'
          },
          {
            name: '国防专利'
          },
          {
            name: '军工试验设施'
          },
          {
            name: '政策法规'
          },
          {
            name: '科技服务机构'
          },
          {
            name: '军民共享资源'
          },
          {
            name: '技术产品大厅'
          },
        ],
        //专利数据
        patentData: [
          // {
          //   name: '人工智能翻译的表示',
          //   desc: '本发明提供的图形表示转换技术领域知识。在一个实施例中，一种...',
          // },
          // {
          //   name: '智能数据提取',
          //   desc: '以电子方式基于接收到的数据被确认数字数据从纸质文档扫描图…',
          // },
          // {
          //   name: '双板致动系统，用于喷气发动机',
          //   desc: '飞机发动机推力反向器的可变面积风扇喷嘴结构设置在车尾...',
          // },
          // {
          //   name: '动态持续性的搜索引擎',
          //   desc: '本实用新型涉及一种用于促进动态持续性搜索的系统和/或方...',
          // },
          // {
          //   name: '蜂窝板生产线',
          //   desc: '技术领域 本项目涉及蜂窝板生产线，属于蜂窝板生产技术领域...',
          // },
          // {
          //   name: '数控直角切割机的切割头连接节',
          //   desc: '技术领域 本项目涉及数控直角切割机的切割头连接节，属于数...',
          // },
          // {
          //   name: '双板致动系统，用于喷气发动机',
          //   desc: '飞机发动机推力反向器的可变面积风扇喷嘴结构设置在车尾...',
          // },
          // {
          //   name: '动态持续性的搜索引擎',
          //   desc: '本实用新型涉及一种用于促进动态持续性搜索的系统和/或方...',
          // },
        ],
        chartOne: {
          yTitle: '',//图表Y轴标题
          xData: [],//x坐标轴
          data: [],//实体数据
        },
        chartTwo: {
          yTitle: '',//图表Y轴标题
          xData:[1,2,3,4,5,6,7,8,9,10,11,12],
          data: [0,0,0,0,0,0,0,0,0,0,0,0],//实体数据
        },
        chartThree: {
          yTitle: '',//图表Y轴标题
          xData: [],//x坐标轴
          data: [],//实体数据
        },
        chartFour: {
          title: '',//图表标题
          //实体数据
          data: [],
        },
        chartFive: {
          title: '',//图表标题
          //实体数据
          data: [],
        },
        chartSix: {
          yTitle: '',//图表Y轴标题
          xData:[],
          // sum: 30,//总数
          data: [],//实体数据
        },
        chartSeven: {
          yTitle: '',//图表Y轴标题
          xData: [],//x坐标轴
          data: [],//实体数据
        },
        chartEight: {
          yTitle: '',//图表Y轴标题
          xData: [],//x坐标轴
          data: [],//实体数据
        },
        chartNight: {
          title: '',//图表标题
          //实体数据
          data: [],
        },
        chartTen: {
          yTitle: '',//图表Y轴标题
          // sum: '总数',//总数
          xData: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],//x坐标轴
          data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],//实体数据
        },
      }
    },
    methods: {
      //获取展厅数据
      async findExhibitionData(){
        let year = 2019
        let data = {
          year:year,
          center:7
        }
        let res= await findExhibitionData(data)
        if(res.code === 200){
	        let xtyearData = []
	        let bjyearData = []
	        let gycyearData = []
          if(res.data.length>0){
            res.data.forEach(v=>{
              if(v.typeId === 54){//图表一
                if(this.chartOne.yTitle === '') this.chartOne.yTitle = year + '年'+v.typeName
	              if(v.parkName==='杏坛'){
		              xtyearData.push(parseInt(v.data))
		              xtyearData.forEach((i)=>{
		              	this.xtYear += i
		              })
	              }else if(v.parkName==='工业城'){
		              gycyearData.push(parseInt(v.data))
		              gycyearData.forEach((i)=>{
			              this.gycYear += i
		              })
	              }else if(v.parkName==='北滘'){
		              bjyearData.push(parseInt(v.data))
		              bjyearData.forEach((i)=>{
			              this.bjYear += i
		              })
	              }
              }else if(v.typeId === 55){// 图表二
                if (this.chartTwo.yTitle === '') this.chartTwo.yTitle = year + '年'+ v.typeName
                this.chartTwo.data.splice(v.month - 1,1,parseInt(v.data))
              }else if(v.typeId === 53){//图表三
                if(this.chartThree.yTitle === '') this.chartThree.yTitle = year + '年'+v.typeName
                this.chartThree.xData.push(v.parkName)
                this.chartThree.data.push(parseInt(v.data))
              }else if(v.typeId === 85 || v.typeId === 86 || v.typeId === 87){//图表四
                if (this.chartFour.title === '') this.chartFour.title = year + '年'+ '热门申请政策类型'
                this.chartFour.data.push({
                  value:v.data,
                  name:v.typeName
                })
              } else if(v.typeId === 88 || v.typeId === 89 || v.typeId === 90){//图表五
                if (this.chartFive.title === '') this.chartFive.title = year + '年'+ '法律状态跟踪'
                this.chartFive.data.push({
                  value:v.data,
                  name:v.typeName
                })
              }else if(v.typeId === 58){//图表六
                if (this.chartSix.yTitle === '') this.chartSix.yTitle = v.typeName
                this.chartSix.xData.unshift(v.year)
                this.chartSix.data.unshift(parseInt(v.data))
              } else if(v.typeId === 59){//图表七
                if(this.chartSeven.yTitle === '') this.chartSeven.yTitle = year + '年'+v.typeName
                let str = v.provinceName.replace(/省|市|自治区|特别行政区|壮族|回族|维吾尔/g,"");
                this.chartSeven.xData.push(str)
                this.chartSeven.data.push(parseInt(v.data))
              }else if(v.typeId === 60){//图表八
                if(this.chartEight.yTitle === '') this.chartEight.yTitle = year + '年'+v.typeName
                let str = v.provinceName.replace(/省|市|自治区|特别行政区|壮族|回族|维吾尔/g,"");
                this.chartEight.xData.push(str)
                this.chartEight.data.push(parseInt(v.data))
              }else if(v.typeId === 91 || v.typeId === 92 || v.typeId === 93){//图表九
                if (this.chartNight.title === '') this.chartNight.title = year + '年'+ '保密等级申请数'
                this.chartNight.data.push({
                  value:v.data,
                  name:v.typeName
                })
              }else if(v.typeId === 62){//图表十
                if (this.chartTen.yTitle === '') this.chartTen.yTitle = year + '年'+ v.typeName
                this.chartTen.data.splice(v.month - 1,1,parseInt(v.data))
              }
            })
          }
	        this.chartOne.xData.push('杏坛','工业城','北滘')
	        this.chartOne.data.push(this.xtYear, this.gycYear,this.bjYear)
          // console.log(res.data)
        }else{
          console.log(res.message)
        }
      },
      //获取专利信息
      async findPatentData(){
        let res = await findPatentData({size:20})
        if(res.code === 200){
          if(res.data.list.length>0){
            res.data.list.forEach(v=>{
              // let name = ''
              // let desc = ''
              // v.famingren.length>12? name = v.famingren.substring(0,12)+"...": name = v.famingren
	            // if( v.zhaiyao){
		         //    v.zhaiyao.length>30?desc = v.zhaiyao.substring(0,30)+'...':desc=v.zhaiyao
	            // }
              this.patentData.push({
                name:v.mingcheng,
                desc:v.zhaiyao,
	            shenqinghao:v.shenqinghao
              })
            })
          }
          // console.log(res.data)
        }else{
          console.log(res.message)
        }
      },
      // 无缝滚动
      scrollUI (){
        let speed=50
        let demo=document.getElementById("select");
        let demo1=document.getElementById("select1");
        let demo2=document.getElementById("select2");
        demo2.innerHTML = demo1.innerHTML
        function Marquee(){
	        if(demo2.offsetTop-demo.scrollTop<=450)
            demo.scrollTop-=demo1.offsetHeight
          else{
            demo.scrollTop++
          }
        }
        let MyMar=setInterval(Marquee,speed)
        demo.onmouseover=function() {clearInterval(MyMar)}
        demo.onmouseout=function() {MyMar=setInterval(Marquee,speed)}
      },
      //图表自适应
      init() {
        const self = this;//因为箭头函数会改变this指向，指向windows。所以先把this保存
        setTimeout(() => {
          window.onresize = function() {
            self.$echarts.init(self.$refs.chartOne.$refs.myChart).resize();
            self.$echarts.init(self.$refs.chartTwo.$refs.myChart).resize();
            self.$echarts.init(self.$refs.chartThree.$refs.myChart).resize();
            self.$echarts.init(self.$refs.chartFour.$refs.myChart).resize();
            self.$echarts.init(self.$refs.chartFive.$refs.myChart).resize();
            self.$echarts.init(self.$refs.chartSix.$refs.myChart).resize();
            self.$echarts.init(self.$refs.chartSeven.$refs.myChart).resize();
            self.$echarts.init(self.$refs.chartEight.$refs.myChart).resize();
            self.$echarts.init(self.$refs.chartNight.$refs.myChart).resize();
            self.$echarts.init(self.$refs.chartTen.$refs.myChart).resize();
          }
        },100)
      },
      goBack(type){
        this.$router.push({path: '/index', query: {type:type }})
      }
    },
    created(){
      this.findExhibitionData()
      this.findPatentData()
    },
    mounted() {
      this.scrollUI()
      this.init()
    }
  }
</script>

<style lang="less" scoped>
  @import "enterprise-service";
  .select-item-desc{
	  width: 2.51rem;
	  overflow: hidden;
	  font-size:0.14rem;
	  font-weight:400;
	  color:#ccc;
	  float: left;
	  margin-left: 0.12rem;
	  text-overflow: ellipsis;
	  display: -webkit-box;
	  text-overflow: ellipsis;
	  display: -webkit-box;
	  -webkit-line-clamp: 2;
	  line-clamp: 2;
	  -webkit-box-orient: vertical;
  }
</style>
