<template>
    <div class="page">
      <!--<router-link to="/index" class="title">成果转换中心</router-link>-->
      <div class="title" @click="goBack('成果转化')">
	      <img src="@/assets/img/cgzh.png" alt="" style="height: 0.8rem">
      </div>
      <div class="main">
        <div class="group-item">
          <div class="item-wrap">
            <c-one ref="chartOne" :chartData="chartOne"></c-one>
            <c-one ref="chartTwo" :chartData="chartTwo"></c-one>
            <c-one ref="chartThree" :chartData="chartThree"></c-one>
            <c-one ref="chartFour" :chartData="chartFour"></c-one>
          </div>
        </div>
        <div class="img-list" id="demo">
          <div id="demo1" class="waterfall">
            <div class="item" v-for="item in resData">
              <img :src="item.url" class="icon"/>
              <p>{{item.shortDesc}}</p>
            </div>
          </div>
          <div id="demo2" class="waterfall"></div>
        </div>
        <div class="radars" style="margin-right: 0">
          <div class="item">
            <div class="title">国家军民融合公共服务平台</div>
            <div id="text">
              <div id="text1">
                <ul>
                  <li> 关于《国防科工局稳定支持科研项目》申报通知</li>
                  <li> 关于征集2019年“中国航天日”宣传海报通知</li>
                  <li> 关于调整乏燃料后处理科研项目申报时限的通知</li>
                  <li> 国防科工局印发一批新材料研制与应用研究项目指南</li>
                  <li> 关于开展第四届中国创新挑战赛暨中关村 第三届科技军民融合专题赛需求 征集工作的通知</li>
                  <li> 关于更新军工涉密业务咨询服务条件备案单位查询系统信息的通知</li>
                  <li> 关于发布《关于编报“十三五”核能开发科研项目（第五批）建议书的通知》通知</li>
                  <li> 关于发布相关机床和电子仪器设备清单的通知</li>
                  <li> 关于编报“十三五”核能开发科研项目（第五批）建议书的通知</li>
                  <li> 关于进一步优化国家重点研发计划项目和资金管理的通知</li>
                  <li> 财政部 科技部关于印发《中央级新购大型科研仪器设备查重评议管理办法》的通知</li>
                  <li> 关于《国防科工局稳定支持科研项目》申报通知</li>
                  <li> 关于征集2019年“中国航天日”宣传海报通知</li>
                  <li> 关于调整乏燃料后处理科研项目申报时限的通知</li>
                  <li> 国防科工局印发一批新材料研制与应用研究项目指南</li>
                  <li> 关于开展第四届中国创新挑战赛暨中关村 第三届科技军民融合专题赛需求 征集工作的通知</li>
                  <li> 关于更新军工涉密业务咨询服务条件备案单位查询系统信息的通知</li>
                  <li> 关于发布《关于编报“十三五”核能开发科研项目（第五批）建议书的通知》通知</li>
                  <li> 关于发布相关机床和电子仪器设备清单的通知</li>
                  <li> 关于编报“十三五”核能开发科研项目（第五批）建议书的通知</li>
                  <li> 关于进一步优化国家重点研发计划项目和资金管理的通知</li>
                  <li> 财政部 科技部关于印发《中央级新购大型科研仪器设备查重评议管理办法》的通知</li>
                  <!--<li><a href="http://jmjh.miit.gov.cn/newsInfoWebMessage.action?newsId=12873753&moduleId=1066"> 关于《国防科工局稳定支持科研项目》申报通知</a></li>-->
                  <!--<li><a href="http://jmjh.miit.gov.cn/newsInfoWebMessage.action?newsId=12871487&moduleId=1066"> 关于征集2019年“中国航天日”宣传海报通知</a></li>-->
                  <!--<li><a href="http://jmjh.miit.gov.cn/newsInfoWebMessage.action?newsId=12878523&moduleId=1066"> 关于调整乏燃料后处理科研项目申报时限的通知</a></li>-->
                  <!--<li><a href="http://jmjh.miit.gov.cn/newsInfoWebMessage.action?newsId=12875810&moduleId=1066"> 国防科工局印发一批新材料研制与应用研究项目指南</a></li>-->
                  <!--<li><a href="http://jmjh.miit.gov.cn/newsInfoWebMessage.action?newsId=12874544&moduleId=1066"> 关于开展第四届中国创新挑战赛暨中关村 第三届科技军民融合专题赛需求 征集工作的通知</a></li>-->
                  <!--<li><a href="http://jmjh.miit.gov.cn/newsInfoWebMessage.action?newsId=12871219&moduleId=1066"> 关于更新军工涉密业务咨询服务条件备案单位查询系统信息的通知</a></li>-->
                  <!--<li><a href="http://jmjh.miit.gov.cn/newsInfoWebMessage.action?newsId=12870799&moduleId=1066"> 关于发布《关于编报“十三五”核能开发科研项目（第五批）建议书的通知》通知</a></li>-->
                  <!--<li><a href="http://jmjh.miit.gov.cn/newsInfoWebMessage.action?newsId=12870759&moduleId=1066"> 关于发布相关机床和电子仪器设备清单的通知</a></li>-->
                  <!--<li><a href="http://jmjh.miit.gov.cn/newsInfoWebMessage.action?newsId=12865184&moduleId=1066"> 关于编报“十三五”核能开发科研项目（第五批）建议书的通知</a></li>-->
                  <!--<li><a href="http://jmjh.miit.gov.cn/newsInfoWebMessage.action?newsId=12864842&moduleId=1066"> 关于进一步优化国家重点研发计划项目和资金管理的通知</a></li>-->
                  <!--<li><a href="http://jmjh.miit.gov.cn/newsInfoWebMessage.action?newsId=12862767&moduleId=1066"> 财政部 科技部关于印发《中央级新购大型科研仪器设备查重评议管理办法》的通知</a></li>-->
                  <!--<li><a href="http://jmjh.miit.gov.cn/newsInfoWebMessage.action?newsId=12873753&moduleId=1066"> 关于《国防科工局稳定支持科研项目》申报通知</a></li>-->
                  <!--<li><a href="http://jmjh.miit.gov.cn/newsInfoWebMessage.action?newsId=12871487&moduleId=1066"> 关于征集2019年“中国航天日”宣传海报通知</a></li>-->
                  <!--<li><a href="http://jmjh.miit.gov.cn/newsInfoWebMessage.action?newsId=12878523&moduleId=1066"> 关于调整乏燃料后处理科研项目申报时限的通知</a></li>-->
                  <!--<li><a href="http://jmjh.miit.gov.cn/newsInfoWebMessage.action?newsId=12875810&moduleId=1066"> 国防科工局印发一批新材料研制与应用研究项目指南</a></li>-->
                  <!--<li><a href="http://jmjh.miit.gov.cn/newsInfoWebMessage.action?newsId=12874544&moduleId=1066"> 关于开展第四届中国创新挑战赛暨中关村 第三届科技军民融合专题赛需求 征集工作的通知</a></li>-->
                  <!--<li><a href="http://jmjh.miit.gov.cn/newsInfoWebMessage.action?newsId=12871219&moduleId=1066"> 关于更新军工涉密业务咨询服务条件备案单位查询系统信息的通知</a></li>-->
                  <!--<li><a href="http://jmjh.miit.gov.cn/newsInfoWebMessage.action?newsId=12870799&moduleId=1066"> 关于发布《关于编报“十三五”核能开发科研项目（第五批）建议书的通知》通知</a></li>-->
                  <!--<li><a href="http://jmjh.miit.gov.cn/newsInfoWebMessage.action?newsId=12870759&moduleId=1066"> 关于发布相关机床和电子仪器设备清单的通知</a></li>-->
                  <!--<li><a href="http://jmjh.miit.gov.cn/newsInfoWebMessage.action?newsId=12865184&moduleId=1066"> 关于编报“十三五”核能开发科研项目（第五批）建议书的通知</a></li>-->
                  <!--<li><a href="http://jmjh.miit.gov.cn/newsInfoWebMessage.action?newsId=12864842&moduleId=1066"> 关于进一步优化国家重点研发计划项目和资金管理的通知</a></li>-->
                  <!--<li><a href="http://jmjh.miit.gov.cn/newsInfoWebMessage.action?newsId=12862767&moduleId=1066"> 财政部 科技部关于印发《中央级新购大型科研仪器设备查重评议管理办法》的通知</a></li>-->
                </ul>
              </div>
              <div id="text2"></div>
            </div>
          </div>
          <div class="item" style="margin-top: 11px">
            <div class="title">广东省科技资源共享服务平台</div>
            <div class="content">
              <p style="font-size: 0.14rem;line-height: 0.25rem">汇聚全省8000多台（套）科学仪器、600多家仪器供方和173例共享制度建设情况</p>
              <ul class="mes-list">
                <li>
                  <img src="@/assets/images/shijian.png"/>
                  <div>
                    <p>年服务机时</p>
                    <p>
                      <span id="count-number" class="timer" data-to=" 462255.51" data-speed="120">462256</span>
                      <span >小时</span>
                    </p>
                  </div>
                </li>
                <li>
                  <img src="@/assets/images/xianweijing.png" style="width: auto"/>
                  <div>
                    <p>科学仪器</p>
                    <p>
                      <span id="count-number" class="timer" data-to="8354" data-speed="120">8354</span>
                      <span >台</span>
                    </p>
                  </div>
                </li>
                <li>
                  <img src="@/assets/images/danwei.png"/>
                  <div>
                    <p>管理单位</p>
                    <p>
                      <span id="count-number" class="timer" data-to=" 602" data-speed="120">602</span>
                      <span >家</span>
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>
<script>
  import {findExhibitionData,findExhibitionResourcesData} from "@/libs/API/exhibition";
  import myChartOne from './charts-item1'
  import '@/assets/iconfont/iconfont.css'
  import '@/view/achievement/jquery.js'
  import '@/view/achievement/jquery.num.js'
  export default {
    name: "achievement",
    components:{
      'c-one': myChartOne,
    },
    data (){
      return {
        resData:[], //瀑布流图片
        chartOne: {
          yTitle: '',//图表Y轴标题
          xData:[1,2,3,4,5,6,7,8,9,10,11,12],
          data: [0,0,0,0,0,0,0,0,0,0,0,0],//实体数据
        },
        chartTwo: {
          yTitle: '',//图表Y轴标题
          xData:[1,2,3,4,5,6,7,8,9,10,11,12],
          data: [0,0,0,0,0,0,0,0,0,0,0,0],//实体数据
        },
        chartThree: {
          yTitle: '',//图表Y轴标题
          xData:[1,2,3,4,5,6,7,8,9,10,11,12],
          data: [0,0,0,0,0,0,0,0,0,0,0,0],//实体数据
        },
        chartFour: {
          yTitle: '',//图表Y轴标题
          xData:[1,2,3,4,5,6,7,8,9,10,11,12],
          data: [0,0,0,0,0,0,0,0,0,0,0,0],//实体数据
        },
      }
    },
    created() {
      this.findExhibitionData()
      this.findExhibitionResourcesData()
    },
    mounted () {
      this.timer=setInterval(()=>{
        console.log(111);
        $('.timer').each(count);
        $('.count-title').removeClass('timer');
      },30)
      clearInterval(this.timer);
      this.imgSwiper()
      this.textSwiper()
    },
    updated() {

    },
    methods: {
      //获取展厅数据
      async findExhibitionData() {
        let year = 2019
        let data = {
          year: year,
          center: 2
        }
        let res = await findExhibitionData(data)
        if (res.code === 200) {
          if (res.data.length > 0) {
            res.data.forEach(v => {
              if (v.typeId === 13) {//图表一数据(军需)
                if (this.chartOne.yTitle === '') this.chartOne.yTitle = year + '年'+ v.typeName
                this.chartOne.data.splice(v.month - 1,1,parseInt(v.data))
              }else if(v.typeId === 14){//图表2数据(科研)
                if (this.chartTwo.yTitle === '') this.chartTwo.yTitle = year + '年'+ v.typeName
                this.chartTwo.data.splice(v.month - 1,1,parseInt(v.data))
              }else if(v.typeId === 15){//图表3数据(合作)
                if (this.chartThree.yTitle === '') this.chartThree.yTitle = year + '年'+ v.typeName
                this.chartThree.data.splice(v.month - 1,1,parseInt(v.data))
              }else if(v.typeId === 16){//图表4数据(专利)
                if (this.chartFour.yTitle === '') this.chartFour.yTitle = year + '年'+ v.typeName
                this.chartFour.data.splice(v.month - 1,1,parseInt(v.data))
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
      // 图片无缝滚动
      imgSwiper() {
        let speed=50; //数字越大速度越慢
        let tab=document.getElementById("demo");
        let tab1=document.getElementById("demo1");
        let tab2=document.getElementById("demo2");
        tab2.innerHTML=tab1.innerHTML; //克隆demo1为demo2
        function Marquee(){
          if(tab2.offsetTop-tab.scrollTop<=1180)//当滚动至demo1与demo2交界时
            tab.scrollTop-=tab1.offsetHeight //demo跳到最顶端
          else{
            tab.scrollTop++
          }
        }
        let MyMar=setInterval(Marquee,speed);
        tab.onmouseover=function() {clearInterval(MyMar)};//鼠标移上时清除定时器达到滚动停止的目的
        tab.onmouseout=function() {MyMar=setInterval(Marquee,speed)};//鼠标移开时重设定时器

      },
      // 图片无缝滚动
      textSwiper() {
        let speed=100; //数字越大速度越慢
        let tab=document.getElementById("text");
        let tab1=document.getElementById("text1");
        let tab2=document.getElementById("text2");
        tab2.innerHTML=tab1.innerHTML; //克隆demo1为demo2
        function Marquee(){
          if(tab2.offsetTop-tab.scrollTop<=480)//当滚动至demo1与demo2交界时
            tab.scrollTop-=tab1.offsetHeight //demo跳到最顶端
          else{
            tab.scrollTop++
          }
        }
        let MyMar=setInterval(Marquee,speed);
        tab.onmouseover=function() {clearInterval(MyMar)};//鼠标移上时清除定时器达到滚动停止的目的
        tab.onmouseout=function() {MyMar=setInterval(Marquee,speed)};//鼠标移开时重设定时器

      },
      goBack(type){
        this.$router.push({path: '/index', query: {type:type }})
      }
    },
  }
</script>
<style lang="less" scoped>
  @import "achievement.less";
</style>
<style scoped>
  #text{
    height: 4.50rem;
    overflow: hidden;
  }
  #text a{
    color:rgba(135,150,176,1);
  }
  #text a:hover{
    color: #a5170d;
  }
  #text1,#text2{
    font-size:0.14rem;
    font-family:PingFangSC-Regular;
    font-weight:400;
	  color:rgba(215,222,240,1);
    line-height:0.25rem;
    text-align: left;
  }
  #text li{
    padding: 0.14rem 0 0.15rem;
    list-style: none;
    border-bottom: solid #55709D 0.02rem;
  }
  .page {
    width: 100%;
    height: 100%;
    padding-top: 0.42rem;
  }
  .page .title{
    height:0.73rem;
    font-size:0.52rem;
    font-family:PingFangSC-Semibold;
    font-weight:600;
    color:rgba(183,189,201,1);
    line-height:0.73rem;
    cursor: pointer;
  }
  .page .main{
    padding: 0.23rem 0 0.32rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .page .main>div{
    margin-right: 0.12rem;
  }
  .page .main .img-list{
    width:9.22rem;
    height:11.04rem;
	  background:rgba(167,186,255,0.2);
	  box-shadow:0px 0px 5px 2px rgba(0,0,0,0.03);
    border-radius:0.06rem;
    overflow: hidden;
    padding: 0.36rem;
  }
  .page .main .img-list .waterfall{
    -moz-column-count:3; /* Firefox */
    -webkit-column-count:3; /* Safari 和 Chrome */
    column-count:3; /* 用整数值来定义列数。不允许负值 */
    margin-bottom: 0.11rem;
  }
  /*一个内容层*/
  .page .main .img-list .waterfall .item{
    width:2.74rem;
    -moz-page-break-inside: avoid;
    -webkit-column-break-inside: avoid;
    break-inside: avoid;
    border-radius:0.06rem;
    overflow: hidden;
    margin-bottom: 0.18rem;
    background-color: #ffffff;
  }
  .page .main .img-list .waterfall .item img{
    width:2.74rem;
    vertical-align: middle;
  }
  .page .main .img-list .waterfall .item p{
    font-size:0.20rem;
    font-weight:600;
    color:rgba(37,142,232,1);
    line-height:0.30rem;
    text-align: center;
    padding: 0.10rem 0.15rem;
    margin: 0 auto;
    background:rgba(243,242,242,1);
    border-radius:0 0 0.06rem 0.06rem;
  }
  .page .main .radars .item{
    width:4.36rem;
    height:5.45rem;
    padding: 0 0.34rem;
	  background:rgba(167,186,255,0.2);
	  box-shadow:0px 0px 5px 2px rgba(0,0,0,0.03);
    border-radius:0.06rem;
    overflow: hidden;
    text-align: left;
  }
  .page .main .radars .item .title{
    height: 0.28rem;
    font-size: 0.23rem;
    font-weight: 400;
    color: #ffffff;
    line-height: 0.28rem;
    margin: 0.32rem 0 0.20rem;
  }
  .page .main .radars .item .content{
    font-weight:400;
    font-size: 0.12rem;
	  color: #ffffff;
  }
  .page .main .radars .item .content .mes-list{
    margin-top: 0.15rem;
  }
  .page .main .radars .item .content .mes-list li{
    list-style: none;
    border-top:solid #55709D 0.02rem;
    display: flex;
    align-items: center;
    padding:0.30rem 0;
  }
  .page .main .radars .item .content  .mes-list li img{
    /*width: 0.50rem;*/
    height: 0.50rem;
    margin-right: 0.43rem;
    margin-top: 0.05rem;
  }
  .page .main .radars .item .content  .mes-list li p:first-child{
    height:0.20rem;
    font-size:0.14rem;
    color:rgba(175,189,209,1);
    font-family:PingFangSC-Regular;
    font-weight:400;
    margin-bottom: 0.10rem;
    line-height:0.20rem;
  }
  .page .main .radars .item .content  .mes-list li p:last-child{
    font-size:0.30rem;
    font-weight:500;
    height:0.40rem;
    font-family:PingFangSC-Medium;
	  color:rgba(215,222,240,1);
    line-height:0.40rem;
  }
  .page .main .radars .item .content  .mes-list li p span{
    font-size:0.36rem;
	  font-family:LCDUltra;
	  color:rgba(173,255,219,1);
	  line-height:46px;
    font-weight:500;
  }
  .page .main .cart-tip .text em{
    width:0.27rem;
    height:0.27rem;
    background:rgba(255,109,64,1);
    border-radius:0.07rem;
    margin-right: 0.31rem;
    display: inline-block;
  }
  .page .main .group-item .item-wrap{
    width:4.35rem;
    box-shadow:0 0 0.04rem 0.02rem rgba(0,0,0,0.03);
    border-radius:0.05rem;
    position: relative;
    margin-bottom: 0.10rem;
  }
  .page .main .group-item .item{
    width:4.35rem;
    height:2.66rem;
  }
</style>
