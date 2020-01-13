<template>
  <div class="pro_body">
    <router-link to="/index" class="title">
	    <img src="@/assets/img/lsfz.png" alt="" style="height: 0.8rem">
    </router-link>
    <!-- 地图 -->
    <!-- <div v-if="ifOnline" id="container"></div> -->
    <!--<div  id="OffLine">-->
    <!--<div class="img_box">-->
    <!--<img src="@/assets/images/pack_img (1).png" alt="">-->
    <!--<img src="@/assets/images/pack_img (2).png" alt="">-->
    <!--<img src="@/assets/images/pack_img (3).png" alt="">-->
    <!--<img src="@/assets/images/pack_img (4).png" alt="">-->
    <!--<img src="@/assets/images/pack_img (5).png" alt="">-->
    <!--</div>-->
    <!--<button @click="LBut">《</button>-->
    <!--<button @click="RBut">》</button>-->
    <!--</div>-->

    <!--<cesium-show></cesium-show>-->
    <!--<iframe id="cesiumContainer" src="./cesium.html#type=pro" frameborder="0" style="width:12.13rem;height:8.07rem;"></iframe>-->
	  <iframe id="cesiumContainer" src="./cesium.html" frameborder="0" style="width:12.13rem;height:8.07rem;"></iframe>
    <!--<div id="cesiumContainer" style="width:12.13rem;height:8.07rem;"></div>-->

    <!-- 视频1 -->
    <div class="video_1">
      <video controls :src="this.palyUrl"></video>
    </div>
    <!-- 视频2 -->
    <div class="video_2" @mouseenter="mouseIng" @mouseleave="mouseOut">
      <h1>指标检测</h1>
      <img src="@/assets/images/Color label Copy 13.png" alt="">
      <img src="@/assets/images/Color label Copy 14.png" alt="">
      <img src="@/assets/images/Color label Copy 15.png" alt="">
      <p>达标</p>
      <p>警示</p>
      <p>超标</p>
      <ul>
        <li class="pro_ent_list" v-for="(item,index) in entList" :key="index">
          <p v-if="item.goodNum == 4" class="good_ent">{{item.entName}}</p>
          <p v-else>{{item.entName}}</p>
          <img v-if="item.goodNum == 4" src="@/assets/images/hook.svg" alt="">
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
    <!-- 图表栏 -->
    <div class="chart_area">
      <div>
        <div class="chart_box">
          <div>
            <img src="@/assets/img/icon6.png" alt="">
          </div>
        </div>
        <ve-ring :data="chartData_1"
                 :legend-visible="false"
                 :resizeable="false"
                 :extend="chartExtend"
                 :settings="chartSettings"
                 :judge-width="true"
                 :width="'1.67rem'" :height="'1.67rem'"></ve-ring>
        <i></i>
        <i></i>
        <i></i>
        <p v-for="(tiem,index) in parkName" :key="index">{{tiem}}</p>
        <h2>{{chartData_1.parkAmount_1}}</h2>
        <h2>{{chartData_1.parkAmount_2}}</h2>
        <h2>{{chartData_1.parkAmount_3}}</h2>
        <h1>
          <img src="@/assets/images/water.svg" alt="">
          园区用水量（吨）
        </h1>
      </div>
      <div>
        <div class="chart_box">
          <div>
	          <img src="@/assets/img/icon3.png" alt="">
          </div>
        </div>
        <ve-ring :data="chartData_2"
                 :legend-visible="false"
                 :resizeable="false"
                 :extend="chartExtend"
                 :settings="chartSettings"
                 :judge-width="true"
                 :width="'1.67rem'" :height="'1.67rem'"
        ></ve-ring>
        <i></i>
        <i></i>
        <i></i>
        <p v-for="(tiem,index) in parkName" :key="index">{{tiem}}</p>
        <h2>{{chartData_2.parkAmount_1}}</h2>
        <h2>{{chartData_2.parkAmount_2}}</h2>
        <h2>{{chartData_2.parkAmount_3}}</h2>
        <h1>
          <img src="@/assets/images/electricity.svg" alt="">
          园区用电量（千瓦）
        </h1>
      </div>
      <div>
        <div class="chart_box">
          <div>
	          <img src="@/assets/img/icon8.png" alt="">
          </div>
        </div>
        <ve-ring :data="chartData_3"
                 :legend-visible="false"
                 :resizeable="false"
                 :extend="chartExtend"
                 :settings="chartSettings"
                 :judge-width="true"
                 :width="'1.67rem'" :height="'1.67rem'"
        ></ve-ring>
        <i></i>
        <i></i>
        <i></i>
        <p v-for="(tiem,index) in parkName" :key="index">{{tiem}}</p>
        <h2>{{chartData_3.parkAmount_1}}</h2>
        <h2>{{chartData_3.parkAmount_2}}</h2>
        <h2>{{chartData_3.parkAmount_3}}</h2>
        <h1>
          <img src="@/assets/images/dispose.svg" alt="">
          废水排放量（吨）
        </h1>
      </div>
      <div>
        <div class="chart_box">
          <div>
	          <img src="@/assets/img/icon7.png" alt="">
          </div>
        </div>
        <ve-ring
          :data="chartData_4"
          :legend-visible="false"
          :resizeable="false"
          :extend="chartExtend"
          :settings="chartSettings"
          :judge-width="true"
          :width="'1.67rem'" :height="'1.67rem'"
        ></ve-ring>
        <i></i>
        <i></i>
        <i></i>
        <p v-for="(tiem,index) in parkName" :key="index">{{tiem}}</p>
        <h2>{{chartData_4.parkAmount_1}}</h2>
        <h2>{{chartData_4.parkAmount_2}}</h2>
        <h2>{{chartData_4.parkAmount_3}}</h2>
        <h1>
          <img src="@/assets/images/sewage.svg" alt="">
          污水处理量（吨）
        </h1>
      </div>
    </div>
  </div>
</template>

<script>
  import {
    getFactorsData,
    getChartListData,
    getlistByCenterData,
    getElementsData,
    getPAByParkData,
    getResourcesData,
    getCamera,
    getWSPoint
  } from "@/libs/API/productionFactors"
  import {setInterval, clearInterval} from 'timers';
  // import CesiumShow from './cesium-show'


  export default {
    name: 'productionFactors',
    // components:{
    //   CesiumShow
    // },
    data() {
      return {
        hackReset:false,//组件刷新
        imgMargin: 0,
        ifOnline: true,
        //园区名称
        parkName: [],
        //地图坐标
        LALs: [
          [113.238500, 22.906114],
          [113.217550, 22.749451],
        ],
        LAL: [],
        LAL_ingdex: 0,
        ordinaryMapO: 0,
        //视频
        videoUrl: [],
        palyUrl: '',
        videoIndex: 0,
        cutVideoLock: false,
        //图表样式数据
        chartExtend: {//extend数据
          // color: ['#F6511D', '#00A6ED', '#78AB3E',],//颜色
	        color: ['#2DE4FA', '#77FFB2', '#7CA8FF',],//颜色
          series: {
            center: ["50%", "50%"]//圆心
          }
        },
        chartSettings: {//settings数据
          label: {
            show: false//提示线
          },
          labelLine: {
            show: false//提示文字
          },
          radius: ["100%", '70%']//外半径&内半径
        },
        //图表数据
        chartData_1: {
          columns: ['园区', '总量'],
          rows: [],
          parkAmount_1: 0,
          parkAmount_2: 0,
          parkAmount_3: 0,
        },
        chartData_2: {
          columns: ['园区', '总量'],
          rows: [],
          parkAmount_1: 0,
          parkAmount_2: 0,
          parkAmount_3: 0,
        },
        chartData_3: {
          columns: ['园区', '总量'],
          rows: [],
          parkAmount_1: 0,
          parkAmount_2: 0,
          parkAmount_3: 0,
        },
        chartData_4: {
          columns: ['园区', '总量'],
          rows: [],
          parkAmount_1: 0,
          parkAmount_2: 0,
          parkAmount_3: 0,
        },
        //企业指标监测
        entList: [],
        entLis: '',
        entBoxLock: true,
        entBoxLock2: true,
        randomObj:{
          edit: 'edit_' + new Date().getTime()   // 先定义随机ID
        }
      }
    },
    methods: {
      //获取园区名称
      async getPAByParkData() {
        let res = await getPAByParkData();
          console.log(res)
        if (res.code === 200) {
          let lists = res.data;
          for (let i = 0; i < lists.length; i++) {
            this.parkName.push(lists[i].name)
          }
        }
      },
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
              if (list[i].typeId === 9) { //根据要素ID判断
                if (this.chartData_1.rows.length == 0) { //图表数据为空
                  this.chartData_1.rows.push({
                    '园区': list[i].parkName, '总量': list[i].data
                  });
                } else { //图表数据非空
                  let rowsLength = this.chartData_1.rows.length;
                  let repetitionLock = false;
                  let dataIndex = 0;
                  for (let l = 0; l < rowsLength; l++) { //循环图表数据
                    repetitionLock = false;
                    if (this.chartData_1.rows[l].园区 == parkName) { //图表数据园区名称相同
                      repetitionLock = true;
                      dataIndex = l;
                    }
                  }
                  if (repetitionLock) {
                    this.chartData_1.rows[dataIndex].总量 += Number(list[i].data)
                  } else {
                    this.chartData_1.rows.push({
                      '园区': list[i].parkName, '总量': Number(list[i].data)
                    });
                  }
                  ;
                }
                if (list[i].parkId === 1) {
                  this.chartData_1.parkAmount_1 += Number(list[i].data)
                }
                if (list[i].parkId === 2) {
                  this.chartData_1.parkAmount_2 += Number(list[i].data)
                }
                if (list[i].parkId === 3) {
                  this.chartData_1.parkAmount_3 += Number(list[i].data)
                }
              }
              if (list[i].typeId === 10) {
                if (this.chartData_2.rows.length == 0) { //图表数据为空
                  this.chartData_2.rows.push({
                    '园区': list[i].parkName, '总量': list[i].data
                  });
                } else { //图表数据非空
                  let rowsLength = this.chartData_2.rows.length;
                  let repetitionLock = false;
                  let dataIndex = 0;
                  for (let l = 0; l < rowsLength; l++) { //循环图表数据
                    repetitionLock = false;
                    if (this.chartData_2.rows[l].园区 == parkName) { //图表数据园区名称相同
                      repetitionLock = true;
                      dataIndex = l;
                    }
                  }
                  if (repetitionLock) {
                    this.chartData_2.rows[dataIndex].总量 += Number(list[i].data)
                  } else {
                    this.chartData_2.rows.push({
                      '园区': list[i].parkName, '总量': Number(list[i].data)
                    });
                  }
                  ;
                }
                if (list[i].parkId === 1) {
                  this.chartData_2.parkAmount_1 += Number(list[i].data)
                }
                if (list[i].parkId === 2) {
                  this.chartData_2.parkAmount_2 += Number(list[i].data)
                }
                if (list[i].parkId === 3) {
                  this.chartData_2.parkAmount_3 += Number(list[i].data)
                }
              }
              if (list[i].typeId === 11) {
                if (this.chartData_3.rows.length == 0) { //图表数据为空
                  this.chartData_3.rows.push({
                    '园区': list[i].parkName, '总量': list[i].data
                  });
                } else { //图表数据非空
                  let rowsLength = this.chartData_3.rows.length;
                  let repetitionLock = false;
                  let dataIndex = 0;
                  for (let l = 0; l < rowsLength; l++) { //循环图表数据
                    repetitionLock = false;
                    if (this.chartData_3.rows[l].园区 == parkName) { //图表数据园区名称相同
                      repetitionLock = true;
                      dataIndex = l;
                    }
                  }
                  if (repetitionLock) {
                    this.chartData_3.rows[dataIndex].总量 += Number(list[i].data)
                  } else {
                    this.chartData_3.rows.push({
                      '园区': list[i].parkName, '总量': Number(list[i].data)
                    });
                  }
                  ;
                }
                if (list[i].parkId === 1) {
                  this.chartData_3.parkAmount_1 += Number(list[i].data)
                }
                if (list[i].parkId === 2) {
                  this.chartData_3.parkAmount_2 += Number(list[i].data)
                }
                if (list[i].parkId === 3) {
                  this.chartData_3.parkAmount_3 += Number(list[i].data)
                }
              }
              if (list[i].typeId === 12) {
                if (this.chartData_4.rows.length == 0) { //图表数据为空
                  this.chartData_4.rows.push({
                    '园区': list[i].parkName, '总量': list[i].data
                  });
                } else { //图表数据非空
                  let rowsLength = this.chartData_4.rows.length;
                  let repetitionLock = false;
                  let dataIndex = 0;
                  for (let l = 0; l < rowsLength; l++) { //循环图表数据
                    repetitionLock = false;
                    if (this.chartData_4.rows[l].园区 == parkName) { //图表数据园区名称相同
                      repetitionLock = true;
                      dataIndex = l;
                    }
                  }
                  if (repetitionLock) {
                    this.chartData_4.rows[dataIndex].总量 += Number(list[i].data)
                  } else {
                    this.chartData_4.rows.push({
                      '园区': list[i].parkName, '总量': Number(list[i].data)
                    });
                  }
                  ;
                }
                if (list[i].parkId === 1) {
                  this.chartData_4.parkAmount_1 += Number(list[i].data)
                }
                if (list[i].parkId === 2) {
                  this.chartData_4.parkAmount_2 += Number(list[i].data)
                }
                if (list[i].parkId === 3) {
                  this.chartData_4.parkAmount_3 += Number(list[i].data)
                }
              }
            }
          }
        }
        this.entAutoPlay();
      },
      //获取展厅资源
      async getResourcesData() {
        let res = await getResourcesData({moduleId: 1, type: 2});
        if (res.code === 200) {
          for (let i = 0; i < res.data.list.length; i++) {
            this.videoUrl.push(res.data.list[i].url);
          }
          this.palyUrl = this.videoUrl[0]
        }
      },
      //获取污水点
      async getWSPoint(){
        let res = await getWSPoint()
        console.log(res)
      },
      //自动切换视频
      autoPlay() {
        let videos = document.getElementsByTagName("video")[0];
        let index = 1;
        let _this = this;
        videos.addEventListener("ended", function () {
          let videolength = _this.videoUrl.length;
          if (index == (videolength - 1)) {
            index = 0;
          } else {
            index++;
          }
          _this.palyUrl = _this.videoUrl[index];
        })
      },
      //指标监测动效
      mouseIng() {
        this.entBoxLock = false;
      },
      mouseOut() {
        this.entBoxLock = true;
      },
      entAutoPlay() {
        if (this.entList.length >= 8) {
          let topValue = 0;
          let _this = this;
          let autoPlayEnt = setInterval(function () {
            if (_this.entBoxLock) {
              topValue += 0.005;
              if (topValue > (_this.entList.length - 8) * 0.44) {
                topValue = 0;
                let list = _this.entList.slice(0, _this.entList.length - 8);
                _this.entList.splice(0, _this.entList.length - 8);
                for (let i = 0; i < list.length; i++) {
                  _this.entList.push(list[i]);
                }
              }
            }
            if (!_this.entBoxLock2) {
              clearInterval(autoPlayEnt)
            }
            _this.entLis[0].style = ("margin-top: -" + topValue + "rem");
          }, 30)
        }
      },
      //离线图片
      RBut() {
        let imgBox = document.getElementsByClassName('img_box')[0];
        if (this.imgMargin < 4852) {
          this.imgMargin += 1213;
        } else {
          this.imgMargin = 0;
        }
        imgBox.style.marginLeft = ('-' + (this.imgMargin / 100) + 'rem')
      },
      LBut() {
        let imgBox = document.getElementsByClassName('img_box')[0];
        if (this.imgMargin != 0) {
          this.imgMargin -= 1213;
        } else {
          this.imgMargin = 4852;
        }
        imgBox.style.marginLeft = ('-' + (this.imgMargin / 100) + 'rem')
      },
      // 获取监控
      async getCamera(){
        let res = await getCamera()
        console.log(res)
      }
    },
    created() {

      // let cesiumShow = localStorage.getItem('cesiumShow')
      // if(cesiumShow === '1'){//每次进入该页面都需要强制刷新页面
      //   localStorage.setItem('cesiumShow','2')
      //   location.reload(true)
      // }
      navigator.onLine? this.ifOnline = true: this.ifOnline = false;
      // this.getPAByParkData();
      this.getResourcesData();
      this.LAL = this.LALs[this.LAL_ingdex];
      let self = this
      //这里可放到全局，提供给子 iframe 调用
      window[this.randomObj.edit] = (self) => {
        self.getWSPoint() //VUE 中方法
      }
    },
    mounted() {
      this.getFactorsData();
      this.getCamera()
      if (this.ifOnline) {
        // this.lbsMap();
      }
      this.autoPlay();
      this.entLis = document.getElementsByClassName("pro_ent_list");
      window.onresize = function () {
        window.location.reload();
      }
      // setTimeout(()=>{
      //   this.hackReset = true
      // },500)
    },
    updated() {
    },
    destroyed() {
      this.entBoxLock2 = false;
    }
  }
</script>

<style lang="less" scoped>
  @import './productionFactors.less';
</style>
<style>
  .amap-icon {
    position: relative;
    width: 0.25rem;
    height: 0.34rem;
  }

  .amap-icon img {
    width: 100%;
    height: 100%;
  }

  .container > button {
    position: absolute;
    left: 45%;
    z-index: 200;
  }

  #container a {
    display: none !important;
  }

  #container .amap-copyright {
    display: none !important;
  }
</style>
