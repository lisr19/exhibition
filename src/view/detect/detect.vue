<template>
    <div class="page">
      <!--<router-link to="/index" class="title">质检认证中心</router-link>-->
      <div class="title" @click="goBack('质检认证')">
	      <img src="@/assets/img/zjrz.png" alt="" style="height: 0.8rem">
      </div>
      <div class="main">
        <div style="display: flex;justify-content: space-between">
          <!--按产品类型统计30日内申请数-->
          <div class="content">
            <c-three ref="applyByPro" :chartData="applyByPro"></c-three>
          </div>
          <div class="group-item">
            <!--历年军品质检（件）-->
            <div class="item-wrap" style="margin-bottom: 0.14rem">
              <c-one ref="chartOne" :chartData="chartOne" style="margin-top: 0"></c-one>
            </div>
            <!--历年军品质通过率-->
            <div class="item-wrap">
              <c-one ref="chartTwo" :chartData="chartTwo" :percent="true"></c-one>
            </div>
          </div>
        </div>
        <div class="group-item2">
          <c-two ref="parkOne" :title="parkOne.title" :data="parkOne.data" :legend="parkOne.legend"></c-two>
          <c-two ref="parkTwo" :title="parkTwo.title" :data="parkTwo.data" :legend="parkTwo.legend"></c-two>
          <c-two ref="parkThree" :title="parkThree.title" :data="parkThree.data" :legend="parkThree.legend"></c-two>
          <c-two ref="parkFour" :title="parkFour.title" :data="parkFour.data" :legend="parkFour.legend"></c-two>
        </div>
      </div>
    </div>
</template>
<script>
  import myChartOne from './charts-item1'
  import myChartTwo from './charts-item2'
  import myChartThree from './charts-item3'
  import {findExhibitionData} from "@/libs/API/exhibition";
  import {
    countPassByYear,
    countUnPassByYear,
    countByYear,
    countByYearAndPark,
    countPassRateByYear,
    countByProductTypeIn30Days,
	  getDetectApply
  } from '@/libs/API/detect'
    export default {
    name: "detect",
    components: {
      'c-one': myChartOne,
      'c-two': myChartTwo,
      'c-three': myChartThree,
    },
    data (){
      return {
        chartOne: {
          yTitle: '',//图表Y轴标题
          xData:[],
          data: [],//实体数据
        },
        chartTwo: {
          yTitle: '',//图表Y轴标题
          xData:[],
          data: [],//实体数据
        },
        applyByPro: {
          yTitle: '',//图表Y轴标题
          xData:[],
          data: [],//实体数据
        },
        parkOne: {
          title: '2019年军品质检情况',//图表标题
          //实体数据
          data: [],
        },
        parkTwo: {
          title: '2019年杏坛军品质检情况',//图表标题
          //实体数据
          data: [],
        },
        parkThree: {
          title: '2019年北滘军品质检情况',//图表标题
          //实体数据
          data: [],
        },
        parkFour: {
          title: '2019年工业城军品质检情况',
          //实体数据
          data: [],
        },
      }
    },
    created() {
      this.findExhibitionData()
      this.getDetectApply()
    },
    methods: {
	    //质检申请数
	    async getDetectApply(params){
		    let res = await getDetectApply({year:2019})
		    if(res.code === 200){
			    // this.detectApply =res.data.list
		    }
	    },
      //获取展厅数据
      async findExhibitionData() {
        let year = 2019
        let data = {
          year: year,
          center: 4,
        }
        let res = await findExhibitionData(data)
        if (res.code === 200) {
          if (res.data.length > 0) {
            res.data.forEach(v => {
              if (v.typeId === 64) {//柱状图表一（历年质检情况）
                if(this.chartOne.yTitle === '') this.chartOne.yTitle = v.typeName
                this.chartOne.xData.unshift(v.year)
                this.chartOne.data.unshift(parseInt(v.data))
                console.log(this.chartOne);
              }else if(v.typeId === 65){//柱状图表2（历年通过率）
                if(this.chartTwo.yTitle === '') this.chartTwo.yTitle = v.typeName
                this.chartTwo.xData.unshift(v.year)
                this.chartTwo.data.unshift(parseInt(v.data))
              }else if(v.typeId === 73 || v.typeId === 74 || v.typeId === 75){//图表1
                this.parkOne.data.push({ //园区本年度质检情况
                  value:v.data,
                  name:v.typeName
                })
              }else if(v.typeId === 76 || v.typeId === 77 || v.typeId === 78){//图表2
                this.parkTwo.data.push({ //杏坛本年度质检情况
                  value:v.data,
                  name:v.typeName
                })
              }else if(v.typeId === 79 || v.typeId === 80 || v.typeId === 81){//图表3
                this.parkThree.data.push({ //北滘本年度质检情况
                  value:v.data,
                  name:v.typeName
                })
              }else if(v.typeId === 82 || v.typeId === 83 || v.typeId === 84){//图表4
                this.parkFour.data.push({ //工业城本年度质检情况
                  value:v.data,
                  name:v.typeName
                })
              }else if(v.typeId === 94 || v.typeId === 95 || v.typeId === 96 ||  v.typeId === 97 || v.typeId === 98|| v.typeId === 99|| v.typeId === 100){
                this.applyByPro.yTitle = "按军品类型统计30日内申请数（件）"
                this.applyByPro.xData.push(v.typeName)
                this.applyByPro.data.push(parseInt(v.data))
                console.log(this.applyByPro);
              }
            })
          }
        } else {
          console.log(res.message)
        }
      },
      goBack(type){
	    	this.$router.back()
        // this.$router.push({path: '/index', query: {type:type }})
      }
    }
  }
</script>

<style scoped>
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
    padding: 0.38rem  2.28rem 0.43rem;
  }
  .page .main .content{
    width:12.29rem;
    height:8.19rem;
    border-radius:14px;
    display: flex;
    position: relative;
  }
  .page .main .content>p{
    height:66px;
    font-size:47px;
    font-weight:400;
    color:rgba(135,150,176,1);
    line-height:66px;
    text-align: right;
  }
  .page .main .group-item .item-wrap{
    width:5.86rem;
    height:4.02rem;
    border-radius:0.06rem;
    position: relative;
	  background:rgba(167,186,255,0.3);
	  box-shadow:0px 0px 5px 2px rgba(0,0,0,0.03);
  }
  .page .main .group-item .item{
    width:5.86rem;
    height:4.02rem;
  }
  .page .main .group-item .tips{
    display: block;
    position: absolute;
    top: 30px;
    right: 20px;
    font-size:48px;
    font-weight:400;
    color:rgba(175,189,209,1);
  }
  .page .main .group-item2{
    display: flex;
    justify-content: space-between;
  }
</style>
