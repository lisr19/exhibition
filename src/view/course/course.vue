<template>
  <div class="course">
    <!--<router-link to="/index" class="course-title">企业培训中心</router-link>-->
    <a class="course-title" @click="goBack('企业培训')">
	    <img src="@/assets/img/qypx.png" alt="" style="height: 0.8rem">
    </a>
    <div class="course-body">
      <!--左边部分-->
      <div class="course-left">
        <my-chart ref="chart1" :title="chartData_1.title" :data="chartData_1.data" style="margin-top: 0"></my-chart>
        <my-chart ref="chart2" :title="chartData_2.title" :data="chartData_2.data"></my-chart>
        <my-chart ref="chart3" :title="chartData_3.title" :data="chartData_3.data"></my-chart>
        <my-chart ref="chart4" :title="chartData_4.title" :data="chartData_4.data"></my-chart>
      </div>
      <!--中间部分-->
      <div class="course-middle">
        <video controls autoplay="autoplay" :src="currentVideo.url"></video>
        <div>
          <span>{{currentVideo.name}}</span>
          <div>{{currentVideo.shortDesc}}</div>
          <div style="margin-top: 0.2rem;height: 0.7rem;">
            <v-page :total="videoList.length" :current-page="currentPage"
                    :display="1" @pagechange="pageChange"></v-page>
          </div>
        </div>
      </div>
      <!--右边部分-->
      <div class="course-right">
        <!--线上培训-->
        <div class="course-card">
          <div class="card-title">线上培训</div>
          <div style="float: right">
            <Select v-model="courseOne" style="width: 1.3rem;">
              <Option value="1" style="background: #2B3648">管理培训</Option>
            </Select>
          </div>
          <div class="course-list" style="float: left">
            <div class="course-scroll-body" ref="courseOne">
              <div ref="courseOne1">
                <div class="course-item" v-for="(item,index) in courseOneList">
                  <img :src="item.logoUrl" />
                  <div class="item-title">{{item.name}}</div>
                  <div class="item-desc">{{item.shortDesc}}</div>
                </div>
              </div>
              <div ref="courseOne2">
                <div class="course-item" v-for="(item,index) in courseOneList">
                  <img :src="item.logoUrl" />
                  <div class="item-title">{{item.name}}</div>
                  <div class="item-desc">{{item.shortDesc}}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!--线下讲座-->
        <div class="course-card" style="margin-top: 0.11rem">
          <div class="card-title">线下讲座</div>
          <div style="float: right;">
            <Select v-model="courseOne" style="width: 1.3rem;">
              <Option value="1" style="background: #2B3648">军民融合</Option>
            </Select>
          </div>
          <div class="course-list" style="float: left">
            <div class="course-scroll-body" ref="courseTwo">
              <div ref="courseTwo1">
                <div class="course-item" v-for="(item,index) in courseTwoList">
                  <img :src="item.logoUrl" />
                  <div class="item-title">{{item.name}}</div>
                  <div class="item-desc">{{item.shortDesc}}</div>
                </div>
              </div>
              <div ref="courseTwo2">
                <div class="course-item" v-for="(item,index) in courseTwoList">
                  <img :src="item.logoUrl" />
                  <div class="item-title">{{item.name}}</div>
                  <div class="item-desc">{{item.shortDesc}}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {findExhibitionData,findExhibitionResourcesData} from "@/libs/API/exhibition";
  import {findCourseData} from "@/libs/API/course";
  import page from './pagination'
  import myChart from './charts-item'

  export default {
    name: "course",
    components:{
      'v-page':page,
      myChart
    },
    data() {
      return {
        courseOneList:[],//线上课程
        courseTwoList:[],//线下课程
        videoList: [
          {
            name: '',
            shortDesc: '',
            url: ''
          },
        ],
        currentVideo:{
          name:'',
          shortDesc:'',
          url:'',
        },
        currentPage:1,
        courseOne:'1',
        courseTwo:'1',
        chartData_1: {
          title: '',//图表标题
          //实体数据
          data: [],
        },
        chartData_2: {
          title: '',//图表标题
          //实体数据
          data: [],
        },
        chartData_3: {
          title: '',//图表标题
          //实体数据
          data: [],
        },
        chartData_4: {
          title: '',//图表标题
          //实体数据
          data: [],
        },
      }
    },
    methods: {
      // 获取课程数据
      async findCourseData (params) {
        let res = await findCourseData(params)
        if (res.code === 200) {
          res.data.list.forEach(v => {
            if(v.trainingType===0){
              this.courseOneList.push(v)
            }else {
              this.courseTwoList.push(v)
            }
          })
        } else {
          this.$Message.error(res.message)
        }
      },
      //获取展厅数据
      async findExhibitionData() {
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
                if (this.chartData_1.title === '') this.chartData_1.title = year + '年'+ '课程占比'
                this.chartData_1.data.push({
                  value:v.data,
                  name:v.typeName
                })
              }else if(v.typeId === 23 || v.typeId === 24 || v.typeId === 25){//图表二
                if (this.chartData_2.title === '') this.chartData_2.title = year + '年'+ '热门课程占比'
                this.chartData_2.data.push({
                  value:v.data,
                  name:v.typeName
                })
              }else if(v.typeId === 26 || v.typeId === 27){//图表三
                if (this.chartData_3.title === '') this.chartData_3.title = year + '年'+ '线上情况（人次）'
                this.chartData_3.data.push({
                  value:v.data,
                  name:v.typeName
                })
              }else if(v.typeId === 28 || v.typeId === 29){//图表四
                if (this.chartData_4.title === '') this.chartData_4.title = year + '年'+ '线下情况（人次）'
                this.chartData_4.data.push({
                  value:v.data,
                  name:v.typeName
                })
              }
            })
          }
        }else{
          console.log(res.message)
        }
      },
      //获取展厅资源
      async findExhibitionResourcesData(){
        let data={
          moduleId:6
        }
        let res = await findExhibitionResourcesData(data)
        if(res.code === 200){
          if(res.data.list.length>0){
            this.videoList = res.data.list
            this.currentVideo = this.videoList[this.currentPage-1]
          }
          // console.log(res.data.list)
        }else{
          console.log(res.message)
        }
      },
      pageChange(index) {
        this.currentVideo = this.videoList[index-1]
      },
      // 线上培训无缝滚动
      scrollUIByCourseOne (){
        let speed=50
        let demo= this.$refs.courseOne;
        let demo1=this.$refs.courseOne1;
        let demo2=this.$refs.courseOne2;
        // demo2.innerHTML = demo1.innerHTML
        function Marquee(){
          if(demo2.offsetTop-demo.scrollTop<=demo.offsetTop)
            demo.scrollTop-=demo1.offsetHeight
          else{
            demo.scrollTop++
          }
        }
        let MyMar=setInterval(Marquee,speed)
        demo.onmouseover=function() {clearInterval(MyMar)}
        demo.onmouseout=function() {MyMar=setInterval(Marquee,speed)}
      },
      // 线下讲座无缝滚动
      scrollUIByCourseTwo (){
        let speed=50
        let demo= this.$refs.courseTwo;
        let demo1=this.$refs.courseTwo1;
        let demo2=this.$refs.courseTwo2;
        // demo2.innerHTML = demo1.innerHTML
        function Marquee(){
          if(demo2.offsetTop-demo.scrollTop<=demo.offsetTop)
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
            self.$echarts.init(self.$refs.chart1.$refs.myChart).resize();
            self.$echarts.init(self.$refs.chart2.$refs.myChart).resize();
            self.$echarts.init(self.$refs.chart3.$refs.myChart).resize();
            self.$echarts.init(self.$refs.chart4.$refs.myChart).resize();
          }
        },100)
      },
      goBack(type){
        this.$router.push({path: '/index', query: {type:type }})
      },
    },
    created(){
      this.findCourseData({size:25})
      this.findExhibitionData()
      this.findExhibitionResourcesData()
    },
    mounted(){
      this.scrollUIByCourseOne()
      this.scrollUIByCourseTwo()
      this.init()
    },
  }
</script>

<style lang="less" scoped>
  @import "./course";
  .item-desc{
	  width:2.39rem;
	  height: 0.5rem;
	  font-size:0.12rem;
	  font-weight:400;
	  color:rgba(215,222,240,1);
	  line-height:0.17rem;
	  overflow: hidden;
	  float: left;
	  margin-left: 0.1rem;
	  margin-top: 0.1rem;
	  text-overflow: ellipsis;
	  display: -webkit-box;
	  -webkit-line-clamp: 3;
	  line-clamp: 3;
	  -webkit-box-orient: vertical!important;

  }
</style>

<style lang="less">
  .course-card .ivu-select-selection {
	  background:rgba(167,186,255,0.2);
	  box-shadow:0px 0px 5px 2px rgba(0,0,0,0.03);
    border: 0.01rem solid #5282d3;
  }
  .course-card .ivu-select-dropdown {
    background-color: #2b3648;
  }
  .course-card .ivu-select-single .ivu-select-selection .ivu-select-placeholder, .ivu-select-single .ivu-select-selection .ivu-select-selected-value,.ivu-select-item {
    font-size:0.2rem;
    font-weight:400;
    color:rgba(100,185,252,1);
    line-height:0.29rem;
  }
  .course-card .ivu-select-arrow {
    font-size:0.18rem;
    color: #64B9FC;
    margin-top: -0.1rem;
  }
</style>
