<template>
  <div class="enterprise-service">
    <!--<router-link to="/index" class="enterprise-title">科研配套中心</router-link>-->
    <a class="enterprise-title" @click="goBack('科研配套')">
	    <img src="@/assets/img/kypt.png" alt="" style="height: 0.8rem">
    </a>
    <div class="main">
      <!--左边部分-->
      <div style="width: 4.22rem;float: left">
        <c-one ref="chartOne" :chartData="chartOne" style="margin-top: 0"></c-one>
        <c-one ref="chartTwo" :chartData="chartTwo"></c-one>
        <c-one ref="chartThree" :chartData="chartThree"></c-one>
        <c-one ref="chartFour" :chartData="chartFour"></c-one>
      </div>
      <!--中间部分-->
      <div style="width: 8.57rem;margin:0 0.62rem;float: left">
        <div style="width: 100%;height:5.3rem;border-radius:0.08rem;padding:0.08rem;background-color: #000000" class="video-box">
          <video id="video" controls autoplay="autoplay" :src="currentVideo"  style="width: 100%;height: 100%"></video>
        </div>
        <c-one ref="chartFive" :chartData="chartFive" style="float: left"></c-one>
        <c-two ref="chartSix" :title="chartSix.title" :data="chartSix.data" :legend="chartSix.legend" style="float: left;margin-left
        : 0.10rem"></c-two>
        <c-two ref="chartSeven" :title="chartSeven.title" :data="chartSeven.data" :legend="chartSeven.legend" style="float: left;"></c-two>
        <c-two ref="chartEight" :title="chartEight.title" :data="chartEight.data" :legend="chartEight.legend" style="float: left;margin-left: 0.10rem"></c-two>
      </div>
      <!--右边部分-->
      <div style="width: 4.22rem;float: left">
        <div class="support-box">
          <p class="title">国防科工局通知公告</p>
          <div id="text">
            <div id="text1">
              <ul>
                <li> 关于调整乏燃料后处理科研项目申报时限的通知</li>
                <li> 国防科工局印发一批新材料研制与应用研究项目指南</li>
                <li> 关于2019年第一季度网站抽查情况的报告</li>
                <li> 关于征集2019年“中国航天日”宣传海报的通知</li>
                <li> 国防科工局局管行业协会会费标准公告</li>
                <li> 国防科工局网站监管年度报表(2018年度)</li>
                <li> 国防科工局网站工作年度报表(2018年度)</li>
                <li> 工业和信息化部 交通运输部 国防科工局关于印发《智能船舶发展行动计划（2019-2021年）》的通知</li>
                <li> 关于发布2018年度国防科技工业企业管理创新获奖成果的通知</li>
                <li> 关于2018年第四季度网站抽查情况的报告</li>
                <li> 国防科工局关于印发《国防科技重点实验室稳定支持科研管理暂行办法》的通知</li>
                <li>工业和信息化部办公厅 国防科工局综合司关于印发《军用技术转民用推广目录(2018年度)》的通知</li>
                <li> 关于改革开放杰出贡献表彰推荐人选的公示</li>
                <li> 关于2018年军工技术推广专项奖励性后补助项目的公示</li>
                <li> 关于民用航天“十三五”技术预先研究第二批指南B类项目评估结果的公示</li>
                <!--<li><a href="http://www.sastind.gov.cn/n157/c6805766/content.html"> 关于调整乏燃料后处理科研项目申报时限的通知</a></li>-->
                <!--<li><a href="http://www.sastind.gov.cn/n157/c6805736/content.html"> 国防科工局印发一批新材料研制与应用研究项目指南</a></li>-->
                <!--<li><a href="http://www.sastind.gov.cn/n157/c6805709/content.html"> 关于2019年第一季度网站抽查情况的报告</a></li>-->
                <!--<li><a href="http://www.sastind.gov.cn/n157/c6805607/content.html"> 关于征集2019年“中国航天日”宣传海报的通知</a></li>-->
                <!--<li><a href="http://www.sastind.gov.cn/n157/c6805610/content.html"> 国防科工局局管行业协会会费标准公告</a></li>-->
                <!--<li><a href="http://www.sastind.gov.cn/n157/c6805337/content.html"> 国防科工局网站监管年度报表(2018年度)</a></li>-->
                <!--<li><a href="http://www.sastind.gov.cn/n157/c6805336/content.html"> 国防科工局网站工作年度报表(2018年度)</a></li>-->
                <!--<li><a href="http://www.sastind.gov.cn/n157/c6804989/content.html"> 工业和信息化部 交通运输部 国防科工局关于印发《智能船舶发展行动计划（2019-2021年）》的通知</a></li>-->
                <!--<li><a href="http://www.sastind.gov.cn/n157/c6804963/content.html"> 关于发布2018年度国防科技工业企业管理创新获奖成果的通知</a></li>-->
                <!--<li><a href="http://www.sastind.gov.cn/n157/c6804851/content.html"> 关于2018年第四季度网站抽查情况的报告</a></li>-->
                <!--<li><a href="http://www.sastind.gov.cn/n157/c6804066/content.html"> 国防科工局关于印发《国防科技重点实验室稳定支持科研管理暂行办法》的通知</a></li>-->
                <!--<li><a href="http://www.sastind.gov.cn/n157/c6804641/content.html">工业和信息化部办公厅 国防科工局综合司关于印发《军用技术转民用推广目录(2018年度)》的通知</a></li>-->
                <!--<li><a href="http://www.sastind.gov.cn/n157/c6803812/content.html"> 关于改革开放杰出贡献表彰推荐人选的公示</a></li>-->
                <!--<li><a href="http://www.sastind.gov.cn/n157/c6803624/content.html"> 关于2018年军工技术推广专项奖励性后补助项目的公示</a></li>-->
                <!--<li><a href="http://www.sastind.gov.cn/n157/c6803473/content.html"> 关于民用航天“十三五”技术预先研究第二批指南B类项目评估结果的公示</a></li>-->
              </ul>
            </div>
            <div id="text2"></div>
          </div>
        </div>
        <c-two ref="chartNight" :title="chartNight.title" :data="chartNight.data" :legend="chartNight.legend"></c-two>
        <c-two ref="chartTen" :title="chartTen.title" :data="chartTen.data" :legend="chartTen.legend"></c-two>
      </div>
    </div>
  </div>
</template>

<script>
  import myChartOne from './charts-item1'
  import myChartTwo from './charts-item2'
  import myChartThree from './charts-item3'
  import {findExhibitionData,findExhibitionResourcesData} from "@/libs/API/exhibition";

  export default {
    name: "support-service",
    components: {
      'c-one': myChartOne,
      'c-two': myChartTwo,
      'c-three': myChartThree,
    },
    data() {
      return {
        currentVideo:'',//当前播放视频
        videoList:[], //视频列表
        chartOne: {
          yTitle: '',//图表Y轴标题
          xData:[],
          data: [],//实体数据
        },
        chartTwo: {
          yTitle: '',//图表Y轴标题
          xData: [],//x坐标轴
          data: [],//实体数据
        },
        chartThree: {
          yTitle: '',//图表Y轴标题
          xData: [],//x坐标轴
          data: [],//实体数据
        },
        chartFour: {
          yTitle: '',//图表Y轴标题
          xData: [],//x坐标轴
          data: [],//实体数据
        },
        chartFive: {
          yTitle: '',//图表Y轴标题
          xData: [],//x坐标轴
          data: [],//实体数据
        },
        chartSix: {
          title: '2019年法人资格登记',//图表标题
          //实体数据
          data: [],
        },
        chartSeven: {
          title: '2019年专业技术资格登记',//图表标题
          data: [],
        },
        chartEight: {
          title: '2019年质量管理审查',//图表标题
          data: [],
        },
        chartNight: {
          title: '2019年履约信用审查',//图表标题
          data: [],
        },
        chartTen: {
          title: '2019年保密管理审查',//图表标题
          data: [],
        },
      }
    },
    created() {
      this.findExhibitionData()
      this.findExhibitionResourcesData()

    },
    mounted() {
      this.scrollUI()
      this.autoPlay()
    },
    methods: {
      //获取展厅数据
      async findExhibitionData() {
        let year = 2019
        let data = {
          year: year,
          center: 3
        }
        let res = await findExhibitionData(data)
        if (res.code === 200) {
          if (res.data.length > 0) {
            res.data.forEach(v => {
              if (v.typeId === 106) {//图表一数据(历年法人资格登记)
                if(this.chartOne.yTitle === '') this.chartOne.yTitle = v.typeName
                this.chartOne.xData.unshift(v.year)
                this.chartOne.data.unshift(parseInt(v.data))
              }else if(v.typeId === 107){//图表2数据(历年专业技术资格登记)
                if (this.chartTwo.yTitle === '') this.chartTwo.yTitle = v.typeName
                this.chartTwo.xData.unshift(v.year)
                this.chartTwo.data.unshift(parseInt(v.data))
              }else if(v.typeId === 108){//图表3数据(历年质量管理审查)
                if (this.chartThree.yTitle === '') this.chartThree.yTitle = v.typeName
                this.chartThree.xData.unshift(v.year)
                this.chartThree.data.unshift(parseInt(v.data))
              }else if(v.typeId === 109){//图表4数据(历年履约信用审查)
                if (this.chartFour.yTitle === '') this.chartFour.yTitle = v.typeName
                this.chartFour.xData.unshift(v.year)
                this.chartFour.data.unshift(parseInt(v.data))
              }else if(v.typeId === 110){//图表5数据(历年保密管理审查)
                if (this.chartFive.yTitle === '') this.chartFive.yTitle = v.typeName
                this.chartFive.xData.unshift(v.year)
                this.chartFive.data.unshift(parseInt(v.data))
              } else if(v.typeId === 121|| v.typeId === 122 || v.typeId === 123){//图表6数据(本年法人资格登记情况)
                this.chartSix.data.push({
                  value:v.data,
                  name:v.typeName
                })
              } else if(v.typeId === 124|| v.typeId === 125 || v.typeId === 126){//图表7数据(本年专业技术资格登记情况)
                this.chartSeven.data.push({
                  value:v.data,
                  name:v.typeName
                })
              } else if(v.typeId === 127|| v.typeId === 128 || v.typeId === 129){//图表8数据(本年质量管理审查)
                this.chartEight.data.push({
                  value:v.data,
                  name:v.typeName
                })
              } else if(v.typeId === 130|| v.typeId === 131 || v.typeId === 132){//图表9数据(本年履约信用审查)
                this.chartNight.data.push({
                  value:v.data,
                  name:v.typeName
                })
              } else if(v.typeId === 133|| v.typeId === 134 || v.typeId === 135){//图表10数据(本年保密管理审查)
                this.chartTen.data.push({
                  value:v.data,
                  name:v.typeName
                })
              }
            })
          }
        } else {
          console.log(res.message)
        }
      },
      //获取展厅资源
      async findExhibitionResourcesData(){
        let data={
          moduleId:3
        }
        let res = await findExhibitionResourcesData(data)
        if(res.code === 200){
          if(res.data.list.length>0){
            this.videoList = res.data.list.reverse()
            this.currentVideo = this.videoList[0].url
        }else{
          console.log(res.message)
        }
      }},
      // 无缝滚动
      scrollUI (){
        let speed=100
        let demo=document.getElementById("text");
        let demo1=document.getElementById("text1");
        let demo2=document.getElementById("text2");
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
      //自动切换视频
      autoPlay () {
        setTimeout(()=>{
          let videos = document.getElementById("video")
          let index = 0
          this.currentVideo = this.videoList[index].url
          videos.addEventListener("ended",()=>{
            let videoLength = this.videoList.length;
            if (index == (videoLength-1)) {
              index = 0;
            } else {
              index++;
            }
            this.currentVideo = this.videoList[index].url;
          })
        },300)
      },
      goBack(type){
        this.$router.push({path: '/index', query: {type:type }})
      }
    }
  }
</script>

<style lang="less" scoped>
  @import "support-service";
</style>
