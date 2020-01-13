<template>
    <div class="ent_admin_body">
      <!--<router-link to="/index" class="title">企业管理中心</router-link>-->
      <a class="title" @click="goBack('企业管理')">
	      <img src="@/assets/img/qygl.png" alt="" style="height: 0.8rem">
      </a>
        <!-- 左边纵图表 -->
        <ul class="L_chart_box">
            <li>
                <h2>产值（万元）</h2>
                <h1><p>(总兑现总值)</p>{{LChartShowValue_1}}</h1>
                <p>承诺值</p>
                <p>兑现值</p>
                <i></i>
                <i></i>
                <div ref="LChartData_1"></div>
            </li>
            <li>
                <h2>利税贡献（万元）</h2>
                <h1><p>(总兑现总值)</p>{{LChartShowValue_2}}</h1>
                <p>承诺值</p>
                <p>兑现值</p>
                <i></i>
                <i></i>
                <div ref="LChartData_2"></div>
            </li>
            <li>
                <h2>人才引入（人）</h2>
                <h1><p>(总兑现人数)</p>{{LChartShowValue_3}}</h1>
                <p>承诺值</p>
                <p>兑现值</p>
                <i></i>
                <i></i>
                <div ref="LChartData_3"></div>
            </li>
            <li>
                <h2>就业带动（人）</h2>
                <h1><p>(总兑现人数)</p>{{LChartShowValue_4}}</h1>
                <p>承诺值</p>
                <p>兑现值</p>
                <i></i>
                <i></i>
                <div ref="LChartData_4"></div>
            </li>
        </ul>
        <!-- 中间图表 -->
        <div class="middle_chart_box">
            <h1>2019典型企业</h1>
            <!-- 选着框 -->
            <Select v-model="model_1" style="line-height:0.29rem;height:0.29rem;width:1.34rem;color:#64B9FC;font-size:.21rem;"  @on-change="MUserClickType">
                <Option v-for="(item,index) in entSortingTypeData" :value="item.id" :key="index" >{{ item.name }}</Option>
            </Select>
            <div class="Ment_show_windo">
                <ul class="Ment_show_box">
                    <li>
                        <img :src="No1EntList[0].logoUrl" alt="">
                        <h1>{{No1EntList[0].entName}}</h1>
                        <ul class="tapy_box">
                            <li>{{No1EntList[0].entPark}}</li>
                        </ul>
                        <ul class="value_box">
                            <li>
                                <img src="@/assets/images/PC_icon.png" alt="">
                                <p>产 值 </p>
                                <p>{{No1EntList[0].outputA}}万</p>
                            </li>
                            <li>
                                <img src="@/assets/images/PC_icon.png" alt="">
                                <p>利税贡献 </p>
                                <p>{{No1EntList[0].profitA}}万</p>
                            </li>
                            <li>
                              <img src="@/assets/images/PC_icon.png" alt="">
                              <p>人才引入 </p>
                              <p>{{No1EntList[0].TalentsA}}人</p>
                            </li>
                            <li>
                              <img src="@/assets/images/PC_icon.png" alt="">
                              <p>就业带动 </p>
                              <p>{{No1EntList[0].employmentA}}人</p>
                          </li>
                        </ul>
                        <h2>承诺/兑现百分比（%）</h2>
                        <h5>
                            <i></i>
                            <p>兑现率(%)</p>
                        </h5>
                        <div></div>
                    </li>
                    <li>
                        <img :src="No2EntList[0].logoUrl" alt="">
                        <h1>{{No2EntList[0].entName}}</h1>
                        <ul class="tapy_box">
                            <li>{{No2EntList[0].entPark}}</li>
                        </ul>
                        <ul class="value_box">
                            <li>
                                <img src="@/assets/images/PC_icon.png" alt="">
                                <p>产 值 </p>
                                <p>{{No2EntList[0].outputA}}万</p>
                            </li>
                            <li>
                                <img src="@/assets/images/PC_icon.png" alt="">
                                <p>利税贡献 </p>
                                <p>{{No2EntList[0].profitA}}万</p>
                            </li>
                            <li>
                              <img src="@/assets/images/PC_icon.png" alt="">
                              <p>人才引入 </p>
                              <p>{{No2EntList[0].TalentsA}}人</p>
                            </li>
                            <li>
                              <img src="@/assets/images/PC_icon.png" alt="">
                              <p>就业带动 </p>
                              <p>{{No2EntList[0].employmentA}}人</p>
                          </li>
                        </ul>
                        <h2>承诺/兑现百分比（%）</h2>
                        <h5>
                            <i></i>
                            <p>兑现率(%)</p>
                            <!-- <i></i>
                            <p>兑现比率</p> -->
                        </h5>
                        <div></div>
                    </li>
                    <div class="middle_chart_1" ref="middleChartShow_1"></div>
                    <div class="middle_chart_1" ref="middleChartShow_2"></div>
                </ul>
            </div>
        </div>
        <!-- 右上图表 -->
        <div class="R_top_chart_box">
            <!-- 圆形图表 -->
            <ve-ring
                    :data="chartData_1"
                    :legend-visible="false"
                    :resizeable="false"
                    :extend="chartExtend"
                    :settings="chartSettings"
                    :judge-width="false"
                    :width="'1.3rem'" :height="'1.3rem'"
                ></ve-ring>
            <h1>热门产业（间）</h1>
            <div class="ent_type_window">
                <ul class="auto_shou_box">
                    <li v-for="(item,index) in chartData_1.parkDatas" :key="index">
                        <h2>{{item.name}}</h2>
                        <h3>{{item.value}}</h3>
                    </li>
                </ul>
            </div>
        </div>
        <!-- 右下企业列表 -->
        <div class="R_bottom_list" @mouseenter="REntBoxUserHover"  @mouseleave="REntBoxUserOut">
            <h1>企业列表</h1>
            <Select v-model="model_2" style="line-height:0.29rem;height:0.29rem;width:1.34rem;color:#64B9FC;font-size:.21rem;" @on-change="RUserClickType">
                <Option v-for="(item,index) in entTypeData" :value="item.id" :key="index" >{{ item.name }}</Option>
            </Select>
            <!-- 列表 -->
            <ul class="R_show_box" @mousedown="RSlideDown" @mouseup="RSlideUp">
                <li class="ent_list" v-for="(tiem,index) in entListData" :key="index">{{tiem.name}}
                    <img src="#"  style="width:0.01rem;height:0.01rem;"/>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import {
    getEntActualData,       //企业承诺兑现数据列表
    getEntFigureData,       //企业画像列表
    getEntData,             //查询企业列表
    getTypeListData,        //获取分类数据
    getEntTalentPromiseData,//企业人才承诺兑现数据列表
    seekGetTypeListData,    //根据分类获取企业数据
    getStatByTypeData,      //按企业类型统计企业数
    getListExtraData,       //按企业承诺兑现指标排序查询列表
    getPAByParkData,        //按企业承诺兑现指标排序查询列表
    getlistByCenterData,    //根据中心查询展厅数据
} from '@/libs/API/entAdmin.js'
import { setInterval , clearInterval , setTimeout } from 'timers';
// import { connect } from 'http2';

export default {
    name:'entAdmin',
    data () {
        return {
            //中间图表数据
            MUlMata:{},//中间列表盒UL
            RUlMata:{},//右下列表盒UL
            RUlLiMata: {},
            mousY:0,
            newMousY:0,
            mousX:0,
            newMousX:0,
            MSecond:0, //中间图表秒表
            RSecond:0, //右下列表秒表
            model_1:2,  //第一个选着器数据
            model_2:0,  //第二个选着器数据
            ifAutoPlay: 1,      //右上企业动效锁
            ifMAutoPlay: false, //中间图表动效锁
            ifClick: false,     //选着器锁
            ifMove_M: false,    //中间列表滑动锁
            ifMove_R: false,    //右下列表滑动锁
            ifSeek_R: false,    //判断右下企业列表是否按照分类搜索
            RUlHoverLock: true,
            entListLength:0,
            entTypeData:[//企业分类数据
                {
                    name:'主营产品',
                    id:0,
                }
            ],
            entSortingTypeData:[//排名分类数据
                {
                    name:'产值排名',
                    id:2,
                },
                {
                    name:'利税排名',
                    id:4,
                },
                {
                    name:'就业带动',
                    id:6,
                },
                {
                    name:'引进人才',
                    id:8,
                },
            ],
            entListData:[],     //接收的企业列表数据
            entSortingData_1:[],  //接收的企业排名数据
            entList:{//发送的企业列表数据
                page:1,
                startDate: '2019-01-01 00:00:00',
                type:'',
                size:0,
                currentPage:"1",
            },
            //按分类搜索企业数据
            typeSeekData: {
                page: 1,     //当前页数
                size: 17,     //每页记录数
                total: 0,    // 数据总数
                figureId: '',//企业标签id
                currentPage: "1",
            },
            //中部图表按分类提交的数据
            MChartListDatas: {
                item:2,
                year:2019,
                page:0,
                size:2,
            },
            //右上图表样式数据
            chartExtend: {//extend数据
                color:['#03A9F4','#81D4FA','#B3E5FC','#3366FF','#3399FF'],//颜色
                series: {
                    center: ["50%", "50%"]//圆心
                }
            },
            chartSettings:{//settings数据
                label: {
                    show: false//提示线
                },
                labelLine: {
                    show: false//提示文字
                },
                radius: ["100%","70%"]//外半径&内半径
            },
            //右上图表数据
            chartData_1:{
                columns: ['产品', '总量'],
                rows: [
                    {'产品':'电子信息','总量':1},
                    {'产品':'航空航天','总量':1},
                    {'产品':'其他','总量':3},
                ],
                parkDatas:[],
            },
            //中间图表数据
            MChartShowDataS:  [],
            No1EntList:{
                0:{
                    logoUrl:"",
                    entName:"1",
                    entPark:"1",
                    outputA:"1",
                    profitA:"1",
                    employmentA:"1",
                    TalentsA:"1",
                }
            },
            No2EntList:{
                0:{
                    logoUrl:"",
                    entName:"2",
                    entPark:"2",
                    outputA:"2",
                    profitA:"2",
                    employmentA:"2",
                    TalentsA:"2",
                }
            },
            MChartShowData_1P:[],
            MChartShowData_2P:[],
            //左边图表数据 (P=承诺，A=兑现)
            LChartShowData_1P:[0,0,0],//产值
            LChartShowData_1A:[0,0,0],
            LChartShowData_2P:[0,0,0],//利税
            LChartShowData_2A:[0,0,0],
            LChartShowData_3P:[0,0,0],//人才
            LChartShowData_3A:[0,0,0],
            LChartShowData_4P:[0,0,0],//就业
            LChartShowData_4A:[0,0,0],
            //左边图表的兑现总数值
            LChartShowParkName: ['杏坛','工业城','北滘'], //园区名称
            LChartShowValue_1:0,    //产值
            LChartShowValue_2:0,    //利税
            LChartShowValue_3:0,    //人才
            LChartShowValue_4:0,    //就业
        }
    },
    methods : {
        goBack(type){
          this.$router.push({path: '/index', query: {type:type }})
        },
        //=================<获取数据>=====================
        //企业获取数据
        async getEntData () {
            let _self = this;
            let res = await getEntData(this.entList);
            if (res.code === 200) {
                this.entListData = res.data.list;
                this.entListLength = res.data.total;
                this.REntAutoPlay(res.data.total);
            }
        },
        //获取企业分类数据
        async getTypeListData () {
            let res = await getTypeListData({type:1});
            if (res.code === 200) {
                for (let i=0;i<res.data.list.length;i++) {
                    this.entTypeData.push({
                        name:res.data.list[i].name,
                        id:res.data.list[i].id
                    },)
                }
            }
        },
        //按企业类型统计企业数 (右上企业列表)
        async getStatByTypeData () {
            let entRes = await getEntData({size:0});
            let res = await getStatByTypeData();
            if (res.code === 200 && entRes.code === 200 ){
                this.chartData_1.rows = [];
                this.chartData_1.parkDatas = [];
                let lists = res.data;
                let entQuantity = 0;
                for (let i=0;i<lists.length;i++) {
                    this.chartData_1.rows.push({
                        '产品':lists[i].name,
                        '总量':lists[i].itemValue
                    });
                    this.chartData_1.parkDatas.push({
                        name:lists[i].name,
                        value:lists[i].itemValue
                    });
                    entQuantity+=lists[i].itemValue;
                }
                this.chartData_1.rows.push({
                    '产品':'其他',
                    '总量':(entRes.data.total-entQuantity)
                });
                this.chartData_1.parkDatas.push({
                        name:'其他',
                        value:(entRes.data.total-entQuantity)
                });
                this.REntDataAutoPlay();
            }
        },
        //根据分类获取企业数据
        async seekGetTypeListData () {
            let _self = this;
            let res = await seekGetTypeListData(this.typeSeekData);
            if (res.code === 200) {
                this.entListData = res.data.list;
                this.entListLength = res.data.total;
                this.REntAutoPlay(1);
            }
        },
        //按企业承诺兑现指标排序查询列表 (中间排行列表) (获取后台数据)
        async getListExtraData_1 (params) {
            if (params) {
                this.MChartListDatas.item = params;
            } else {
                this.MChartListDatas.item = 2;
            }
            let res = await getListExtraData(this.MChartListDatas);
            if (res.code === 200) {
                let _self = this;
                this.MChartShowData_1P = [];
                this.MChartShowData_2P = [];
                let lists = res.data.list;
                _self.MUlMata.style.top=("7.31rem");
                setTimeout(function(){
                    _self.entSortingData_1 = [];
                    _self.MUlMata.style.top=("");
                    for (let i=0;i<lists.length;i++) {
                        if (lists[i].logoUrl != undefined) {
                                var logoUrl = lists[i].logoUrl;
                            } else {
                                var logoUrl = 'http://sdcmi.halohealth.cn/images/1552373693998.jpg';
                            }
                            _self.entSortingData_1.push({
                                entName : lists[i].name,
                                logoUrl : logoUrl,
                                entLabel: lists[i].park.name,
                                outputP : lists[i].enterprisePromiseActual.outputValuePromise,
                                outputA : lists[i].enterprisePromiseActual.outputValueActual,
                                profitP : lists[i].enterprisePromiseActual.profitAndTaxPromise,
                                profitA : lists[i].enterprisePromiseActual.profitAndTaxActual,
                                TalentsP: lists[i].totalTalentsPromise,
                                TalentsA: lists[i].totalTalentsActual,
                                employmentP: lists[i].enterprisePromiseActual.employmentPromise,
                                employmentA: lists[i].enterprisePromiseActual.employmentActual,
                            });
                    }
                },1000)
                this.MChartShowData_1P.push(parseInt((lists[0].enterprisePromiseActual.outputValuePromise/lists[0].enterprisePromiseActual.outputValueActual)*100)
                                            ,parseInt((lists[0].enterprisePromiseActual.profitAndTaxPromise/lists[0].enterprisePromiseActual.profitAndTaxActual)*100)
                                            ,parseInt((lists[0].totalTalentsPromise/lists[0].totalTalentsActual)*100)
                                            ,parseInt((lists[0].enterprisePromiseActual.employmentPromise/lists[0].enterprisePromiseActual.employmentActual)*100));
                this.MChartShowData_2P.push(parseInt((lists[1].enterprisePromiseActual.outputValuePromise/lists[1].enterprisePromiseActual.outputValueActual)*100)
                                            ,parseInt((lists[1].enterprisePromiseActual.profitAndTaxPromise/lists[1].enterprisePromiseActual.profitAndTaxActual)*100)
                                            ,parseInt((lists[1].totalTalentsPromise/lists[1].totalTalentsActual)*100)
                                            ,parseInt((lists[1].enterprisePromiseActual.employmentPromise/lists[1].enterprisePromiseActual.employmentActual)*100));
            }
        },
        //按企业承诺兑现指标排序查询列表 （获取后台数据）
        async getPAByParkData () {
            let res = await getPAByParkData();
            if (res.code === 200) {
                let lists = res.data;
                for (let i=0;i<lists.length;i++) {
                    this.LChartShowParkName.push(lists[i].name)
                    if (lists[i].v1) {
                        this.LChartShowData_1P.push(lists[i].v1);
                    } else {
                        this.LChartShowData_1P.push(0);
                    }
                    if (lists[i].v2) {
                        this.LChartShowData_1A.push(lists[i].v2);
                        this.LChartShowValue_1 += lists[i].v2;
                    } else {
                        this.LChartShowData_1A.push(0);
                    }
                    if (lists[i].v3) {
                        this.LChartShowData_2P.push(lists[i].v3);
                    } else {
                        this.LChartShowData_2P.push(0);
                    }
                    if (lists[i].v4) {
                        this.LChartShowData_2A.push(lists[i].v4);
                        this.LChartShowValue_2 += lists[i].v4;
                    } else {
                        this.LChartShowData_2A.push(0);
                    }
                    if (lists[i].v5) {
                        this.LChartShowData_3P.push(lists[i].v5);
                    } else {
                        this.LChartShowData_3P.push(0);
                    }
                    if (lists[i].v6) {
                        this.LChartShowData_3A.push(lists[i].v6);
                        this.LChartShowValue_3 += lists[i].v6;
                    } else {
                        this.LChartShowData_3A.push(0);
                    }
                    if (lists[i].v7) {
                        this.LChartShowData_4P.push(lists[i].v7);
                    } else {
                        this.LChartShowData_4P.push(0);
                    }
                    if (lists[i].v8) {
                        this.LChartShowData_4A.push(lists[i].v8);
                        this.LChartShowValue_4 += lists[i].v8;
                    } else {
                        this.LChartShowData_4A.push(0);
                    }
                }
            }
        },
        //根据中心查询展厅数据
        async getlistByCenterData () {
            let res = await getlistByCenterData();
            if (res.code === 200) {
                this.MChartShowDataS = [];
                this.LChartShowData_1P = [0,0,0];//产值
                this.LChartShowData_1A = [0,0,0];
                this.LChartShowData_2P = [0,0,0];//利税
                this.LChartShowData_2A = [0,0,0];
                this.LChartShowData_3P = [0,0,0];//人才
                this.LChartShowData_3A = [0,0,0];
                this.LChartShowData_4P = [0,0,0];//就业
                this.LChartShowData_4A = [0,0,0];
                this.LChartShowValue_1 = 0;//产值总量清零
                this.LChartShowValue_2 = 0;//利税总量清零
                this.LChartShowValue_3 = 0;//人才总量清零
                this.LChartShowValue_4 = 0;//就业总量清零
                let list = res.data;
                let entIndex = 0;
                let pushIds = [];
                for (let i=0;i<list.length;i++) {
                    if (list[i].typeId == 35 || list[i].typeId == 36) {     //产值
                        if (list[i].typeId == 35) {                     //承诺
                            if (list[i].parkId == 1) {
                                this.LChartShowData_1P[0] = list[i].data;
                            }
                            if (list[i].parkId == 2) {
                                this.LChartShowData_1P[1] = list[i].data;
                            }
                            if (list[i].parkId == 3) {
                                this.LChartShowData_1P[2] = list[i].data;
                            }
                        } else if (list[i].typeId == 36) {              //兑现
                            if (list[i].parkId == 1) {
                                this.LChartShowData_1A[0] = list[i].data;
                            }
                            if (list[i].parkId == 2) {
                                this.LChartShowData_1A[1] = list[i].data;
                            }
                            if (list[i].parkId == 3) {
                                this.LChartShowData_1A[2] = list[i].data;
                            }
                            this.LChartShowValue_1 += Number(list[i].data);
                        }
                    }
                    if (list[i].typeId == 37 || list[i].typeId == 38) {     //利税
                        if (list[i].typeId == 37) {                     //承诺
                            if (list[i].parkId == 1) {
                                this.LChartShowData_2P[0] = list[i].data;
                            }
                            if (list[i].parkId == 2) {
                                this.LChartShowData_2P[1] = list[i].data;
                            }
                            if (list[i].parkId == 3) {
                                this.LChartShowData_2P[2] = list[i].data;
                            }
                        } else if (list[i].typeId == 38) {              //兑现
                            if (list[i].parkId == 1) {
                                this.LChartShowData_2A[0] = list[i].data;
                            }
                            if (list[i].parkId == 2) {
                                this.LChartShowData_2A[1] = list[i].data;
                            }
                            if (list[i].parkId == 3) {
                                this.LChartShowData_2A[2] = list[i].data;
                            }
                            this.LChartShowValue_2 += Number(list[i].data);
                        }
                    }
                    if (list[i].typeId == 39 || list[i].typeId == 40) {     //人才
                        if (list[i].typeId == 39) {                     //承诺
                            if (list[i].parkId == 1) {
                                this.LChartShowData_3P[0] = list[i].data;
                            }
                            if (list[i].parkId == 2) {
                                this.LChartShowData_3P[1] = list[i].data;
                            }
                            if (list[i].parkId == 3) {
                                this.LChartShowData_3P[2] = list[i].data;
                            }
                        } else if (list[i].typeId == 40) {              //兑现
                            if (list[i].parkId == 1) {
                                this.LChartShowData_3A[0] = list[i].data;
                            }
                            if (list[i].parkId == 2) {
                                this.LChartShowData_3A[1] = list[i].data;
                            }
                            if (list[i].parkId == 3) {
                                this.LChartShowData_3A[2] = list[i].data;
                            }
                            this.LChartShowValue_3 += Number(list[i].data);
                        }
                    }
                    if (list[i].typeId == 41 || list[i].typeId == 42) {     //就业
                        if (list[i].typeId == 41) {                     //承诺
                            if (list[i].parkId == 1) {
                                this.LChartShowData_4P[0] = list[i].data;
                            }
                            if (list[i].parkId == 2) {
                                this.LChartShowData_4P[1] = list[i].data;
                            }
                            if (list[i].parkId == 3) {
                                this.LChartShowData_4P[2] = list[i].data;
                            }
                        } else if (list[i].typeId == 42) {              //兑现
                            if (list[i].parkId == 1) {
                                this.LChartShowData_4A[0] = list[i].data;
                            }
                            if (list[i].parkId == 2) {
                                this.LChartShowData_4A[1] = list[i].data;
                            }
                            if (list[i].parkId == 3) {
                                this.LChartShowData_4A[2] = list[i].data;
                            }
                            this.LChartShowValue_4 += Number(list[i].data);
                        }
                    }
                    if (list[i].typeId > 42 && list[i].typeId < 51 ) {      //中部列表数据
                        entIndex++;
                        if (this.MChartShowDataS.length == 0 ) { //当中部展示数据为空时
                            pushIds.push(list[i].enterpriseId);
                            this.MChartShowDataS.push({
                                logoUrl : list[i].enterpriseLogoUrl,
                                entId : list[i].enterpriseId,
                                entName : list[i].enterpriseName,
                                entPark : list[i].parkName,
                                outputP : 0,
                                outputA : 0,
                                profitP : 0,
                                profitA : 0,
                                TalentsP: 0,
                                TalentsA: 0,
                                employmentP: 0,
                                employmentA: 0,
                            });
                            if (list[i].typeId == 43) { //产值承诺
                                this.MChartShowDataS[0].outputP = Number(list[i].data);
                            };
                            if (list[i].typeId == 44) { //兑现
                                this.MChartShowDataS[0].outputA = Number(list[i].data);
                            };
                            if (list[i].typeId == 45) { //利税承诺
                                this.MChartShowDataS[0].profitP = Number(list[i].data);
                            };
                            if (list[i].typeId == 46) { //兑现
                                this.MChartShowDataS[0].profitA = Number(list[i].data);
                            };
                            if (list[i].typeId == 47) { //人才承诺
                                this.MChartShowDataS[0].TalentsP = Number(list[i].data);
                            };
                            if (list[i].typeId == 48) { //兑现
                                this.MChartShowDataS[0].TalentsA = Number(list[i].data);
                            };
                            if (list[i].typeId == 49) { //就业承诺
                                this.MChartShowDataS[0].employmentP = Number(list[i].data);
                            };
                            if (list[i].typeId == 50) { //兑现
                                this.MChartShowDataS[0].employmentA = Number(list[i].data);
                            };
                        } else { //不为空
                            let _length = this.MChartShowDataS.length;
                            for (let l=0;l<_length;l++) {
                                if (list[i].enterpriseId == this.MChartShowDataS[l].entId) { //企业已在数据中
                                    if (list[i].typeId == 43) {
                                        this.MChartShowDataS[l].outputP = Number(list[i].data);
                                    };
                                    if (list[i].typeId == 44) {
                                        this.MChartShowDataS[l].outputA = Number(list[i].data);
                                    };
                                    if (list[i].typeId == 45) {
                                        this.MChartShowDataS[l].profitP = Number(list[i].data);
                                    };
                                    if (list[i].typeId == 46) {
                                        this.MChartShowDataS[l].profitA = Number(list[i].data);
                                    };
                                    if (list[i].typeId == 47) {
                                        this.MChartShowDataS[l].TalentsP = Number(list[i].data);
                                    };
                                    if (list[i].typeId == 48) {
                                        this.MChartShowDataS[l].TalentsA = Number(list[i].data);
                                    };
                                    if (list[i].typeId == 49) {
                                        this.MChartShowDataS[l].employmentP = Number(list[i].data);
                                    };
                                    if (list[i].typeId == 50) {
                                        this.MChartShowDataS[l].employmentA = Number(list[i].data);
                                    };
                                } else { //不在数据中
                                    let upID = 0;
                                    for (let j=0;j<pushIds.length;j++) {  //判断企业ID是否出现过
                                        if (list[i].enterpriseId == pushIds[j]) {
                                            upID = list[i].enterpriseId;
                                        }
                                    }
                                    if ( upID === 0 ) {
                                        pushIds.push(list[i].enterpriseId);
                                        this.MChartShowDataS.push({
                                            logoUrl : list[i].enterpriseLogoUrl,
                                            entId : list[i].enterpriseId,
                                            entName : list[i].enterpriseName,
                                            entPark : list[i].parkName,
                                            outputP : 0,
                                            outputA : 0,
                                            profitP : 0,
                                            profitA : 0,
                                            TalentsP: 0,
                                            TalentsA: 0,
                                            employmentP: 0,
                                            employmentA: 0,
                                        });
                                        if (list[i].typeId == 43) {
                                            this.MChartShowDataS[_length].outputP = Number(list[i].data);
                                        };
                                        if (list[i].typeId == 44) {
                                            this.MChartShowDataS[_length].outputA = Number(list[i].data);
                                        };
                                        if (list[i].typeId == 45) {
                                            this.MChartShowDataS[_length].profitP = Number(list[i].data);
                                        };
                                        if (list[i].typeId == 46) {
                                            this.MChartShowDataS[_length].profitA = Number(list[i].data);
                                        };
                                        if (list[i].typeId == 47) {
                                            this.MChartShowDataS[_length].TalentsP = Number(list[i].data);
                                        };
                                        if (list[i].typeId == 48) {
                                            this.MChartShowDataS[_length].TalentsA = Number(list[i].data);
                                        };
                                        if (list[i].typeId == 49) {
                                            this.MChartShowDataS[_length].employmentP = Number(list[i].data);
                                        };
                                        if (list[i].typeId == 50) {
                                            this.MChartShowDataS[_length].employmentA = Number(list[i].data);
                                        };
                                    }
                                }
                            }
                        }
                    }
                }
            }
            this.MUserClickType();
        },

        //=================<动态效果>======================
        //右上企业列表动效
        REntDataAutoPlay () {
            if (this.chartData_1.parkDatas.length>4&&this.ifAutoPlay == 1) {
                this.ifAutoPlay++;
                let ulBox = document.getElementsByClassName("auto_shou_box")[0];
                let times = (this.chartData_1.parkDatas.length - 4);
                let playOfTimes = 0;
                let topValue = 0;
                let ifUpOrDown = true;
                let palyShow = setInterval(function(){
                    if (playOfTimes == 0) {
                        ifUpOrDown = true;
                    }
                    if (playOfTimes == times) {
                        ifUpOrDown = false;
                    }
                    if (ifUpOrDown) {
                        playOfTimes++;
                        topValue -= 34;
                    } else {
                        playOfTimes--;
                        topValue += 34;
                    }
                    ulBox.style.top = topValue+"rem";
                },2500);
            }
        },
        //中间企业图表自动切换
        MChartAutoPlay () {
            let _self = this;
            let palyShow = setInterval(function(){
                _self.MSecond += 1;
                if (_self.MSecond == 30) {
                    let index = _self.model_1;
                    if (index == 8) {
                        index = 2;
                    } else {
                        index += 2;
                    }
                    _self.MSecond = 0;
                    _self.model_1 = index;
                    _self.getlistByCenterData();
                }
            },1000)
        },
        //右下企业列表自动翻页
        REntAutoPlay (params) {
            this.RUlLiMata = document.getElementsByClassName("ent_list");
            let _self = this;
            let entLength;
            let topValue = 0;
            if (this.entListLength>17) {
                var autoPlay = setInterval(function(){
                    if (_self.entListLength<=17 || params == "outent") {
                        clearInterval(autoPlay)
                        _self.RUlLiMata[0].style = ("margin-top:0rem");
                    }
                    if (_self.RUlHoverLock){
                        topValue+=0.1;
                        if (topValue > ((_self.entListLength-18)*38)) {
                            topValue = 0 ;
                            let list = _self.entListData.slice(0,_self.entListLength-18);
                            for (let i=0;i<list.length;i++) {
                                 _self.entListData.push(list[i]);
                            }
                            _self.entListData.splice(0,_self.entListLength-18);
                            setTimeout(function(){topValue = 4;},10)
                        }
                        _self.RUlLiMata[0].style = ("margin-top:-"+(topValue/100)+"rem");
                    }
                },1)
            }
        },
        //=================<用户操作>======================
        //中部上下列表滑动
        middleSlideDown () {
            let e = e||window.event;
            this.mousY = e.clientY;
        },
        middleSlideUp() {
            let e = e||window.event;
            this.newMousY = e.clientY;
            this.middleSlide();
        },
        middleSlide() {
            if (this.newMousY < this.mousY && this.ifMove_R == false) {
                this.ifMove_R == true;
                this.MUlMata.style.top="-3.86rem";
            };
            if (this.newMousY > this.mousY) {
                this.ifMove_R == false;
                this.MUlMata.style.top="0rem";
            };
        },
        //右下左右列表滑动 (左右滑动翻页)
        RSlideDown () {
            let e = e||window.event;
            this.mousX = e.clientX;
        },
        RSlideUp() {
            let e = e||window.event;
            this.newMousX = e.clientX;
            this.RSlide();
        },
        RSlide() {
            if (this.newMousX < this.mousX && this.ifMove_R == false) {
                if (this.entList.page < this.entList.currentPage){
                    if (this.ifSeek_R) {
                        this.typeSeekData.page++;
                        this.seekGetTypeListData();
                    } else {
                        this.entList.page++;
                        this. getEntData ();
                    }
                }
            };
            if (this.newMousX > this.mousX) {
                if (this.entList.page > 1){
                    if (this.ifSeek_R) {
                        this.typeSeekData.page--;
                        this.seekGetTypeListData();
                    } else {
                        this.entList.page--;
                        this. getEntData ();
                    }
                }
            };
        },
        //中间用户切换选着
        MUserClickType() {
            let lists = [];
            for (let i=0;i<this.MChartShowDataS.length;i++) {
                lists.push(this.MChartShowDataS[i]);
            }
            let _self = this;
            let No1EntList = [];
            let No2EntList = [];
            let TSValue1   = 0;
            let TSValue2   = 0;
            for (let i=0;i<lists.length;i++) {
                if ( this.model_1 == 2) { //按产值排名
                    TSValue1 = lists[0].outputA;
                    No1EntList.push(lists[0]);
                    let index = i+1;
                    index>=lists.length?index=i:index=index;
                    if (lists[index].outputA > TSValue1) {
                        TSValue1 = lists[index].outputA;
                        No1EntList = lists.splice(index,1);
                    } else {
                        let dieList = lists.splice(0,1)
                    }
                    for (let j=1;j<lists.length;j++) {
                        TSValue2 = lists[0].outputA;
                        No2EntList.push(lists[0])
                        if (lists[j].outputA > TSValue2) {
                            TSValue2 = lists[j].outputA;
                            No2EntList = lists.splice(j,1);
                        }
                    }
                };
                if ( this.model_1 == 4) {  //按利税排名
                    TSValue1 = lists[0].profitA;
                    No1EntList.push(lists[0]);
                    let index = i+1;
                    index>=lists.length?index=i:index=index;
                    if (lists[index].profitA > TSValue1) {
                        TSValue1 = lists[index].profitA;
                        No1EntList = lists.splice(index,1)
                    } else {
                        let dieList = lists.splice(0,1)
                    }
                    for (let j=1;j<lists.length;j++) {
                        TSValue2 = lists[0].profitA;
                        No2EntList.push(lists[0])
                        if (lists[j].profitA > TSValue2) {
                            TSValue2 = lists[j].profitA;
                            No2EntList = lists.splice(j,1);
                        }
                    }
                };
                if ( this.model_1 == 8) {   //按就业排名
                    TSValue1 = lists[0].TalentsA;
                    No1EntList.push(lists[0]);
                    let index = i+1;
                    index>=lists.length?index=i:index=index;
                    if (lists[index].TalentsA > TSValue1) {
                        TSValue1 = lists[index].TalentsA;
                        No1EntList = lists.splice(index,1)
                    } else {
                        let dieList = lists.splice(0,1)
                    }
                    for (let j=1;j<lists.length;j++) {
                        TSValue2 = lists[0].TalentsA;
                        No2EntList.push(lists[0]);
                        if (lists[j].TalentsA > TSValue2) {
                            TSValue2 = lists[j].TalentsA;
                            No2EntList = lists.splice(j,1);
                        }
                    }
                };
                if ( this.model_1 == 6) {   //按人才排名
                    TSValue1 = lists[0].employmentA;
                    No1EntList.push(lists[0]);
                    let index = i+1;
                    index>=lists.length?index=i:index=index;
                    if (lists[index].employmentA > TSValue1) {
                        TSValue1 = lists[index].employmentA;
                        No1EntList = lists.splice(index,1)
                    } else {
                        let dieList = lists.splice(0,1)
                    }
                    for (let j=0;j<lists.length;j++) {
                        TSValue2 = lists[0].employmentA;
                        No2EntList.push(lists[0]);
                        if (lists[j].employmentA > TSValue2) {
                            TSValue2 = lists[j].employmentA;
                            No2EntList = lists.splice(j,1);
                        }
                    }
                };
            }
            let _this = this;
            this.MUlMata.style.opacity = ("0");
            setTimeout(function(){
                _this.MSecond = 0;
                _this.No1EntList = {};
                _this.No2EntList = {};
                _this.No1EntList = No1EntList;
                _this.No2EntList = No2EntList;
                _this.MChartShowData_1P = [];
                _this.MChartShowData_2P = [];
                //图表比率
                _this.MChartShowData_1P.push(parseInt((No1EntList[0].outputP/No1EntList[0].outputA)*100)
                                                ,parseInt((No1EntList[0].profitP/No1EntList[0].profitA)*100)
                                                ,parseInt((No1EntList[0].employmentP/No1EntList[0].employmentA)*100)
                                                ,parseInt((No1EntList[0].employmentP/No1EntList[0].employmentA)*100));
                _this.MChartShowData_2P.push(parseInt((No2EntList[0].outputP/No2EntList[0].outputA)*100)
                                                ,parseInt((No2EntList[0].profitP/No2EntList[0].profitA)*100)
                                                ,parseInt((No2EntList[0].employmentP/No2EntList[0].employmentA)*100)
                                                ,parseInt((No2EntList[0].employmentP/No2EntList[0].employmentA)*100));
                _this.MUlMata.style.opacity = ("1");
            },1000)
        },
        //右下用户切换选着
        RUserClickType() {
            if (this.model_2 == 0) {
                this.getEntData();
            } else {
                let id = this.model_2;
                this.typeSeekData.figureId = id;
                this.seekGetTypeListData();
            }
        },
        REntBoxUserHover(){
            this.RUlHoverLock = false;
        },
        REntBoxUserOut(){
            this.RUlHoverLock = true;
        },

        //=================<图表数据>======================
        //左边图表
        leftChartShow_1() {//一楼图表
            let myChart = this.$echarts.init(this.$refs.LChartData_1)
            // 绘制图表
            myChart.setOption({
                tooltip : {
                    trigger: 'axis',
                    axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                        type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                    }
                },
                xAxis: [
                    {
                        type: 'category',
                        data: this.LChartShowParkName,
                        axisLine: {
                            lineStyle: {
                            type: 'solid',
                            color: '#fff',//左边线的颜色
                            width:'0.5'//坐标线的宽度
                            }
                        },
                        axisLabel: {
                            show: true,
                            textStyle: {
                            color: '#fff',
                            fontSize:'12'
                            },
                        },
                        axisTick: { //x轴刻度
                            show:false,  //是否显示刻度
                        },
                    }
                ],
                yAxis: [
                    {
                    type: 'value',
	                    axisTick: { //x轴刻度
		                    show:false,  //是否显示刻度
	                    },
                    splitNumber:4,
                    splitLine:{
                        lineStyle: {
                            type: 'solid',
                            color: '#fff',//左边线的颜色
                            width:'0.5'//坐标线的宽度
                        }
                    },
                    axisLine: {
                        show:false,
                    },
                    axisLabel: {
                        show: true,
                        textStyle: {
                            color: '#fff',
                            fontSize:'.16rem'
                        }
                    },
                }
            ],
            grid: {
                left: '0',
                right: '0',
                bottom: '0',
                top:'8%',
                containLabel: true
            },
            series: [
                    {
                        type: 'bar',
                        data: this.LChartShowData_1P,
                        barWidth: '20%',
                        itemStyle:{
                            emphasis:{
                                barBorderRadius:10
                            },
	                        normal:{
		                        color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [{
			                        offset:0,
			                        color:'#77FFB2'
		                        },{
			                        offset:1,
			                        color:'#2DE4FA'
		                        }]),
		                        barBorderRadius:10
	                        }
                        }
                    },
                    {
                        type: 'bar',
                        data:  this.LChartShowData_1A,
                        barWidth: '20%',
                        itemStyle:{
                            emphasis:{
                                barBorderRadius:10
                            },
                            normal:{
                                color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                    offset:0,
                                    color:'#867BF5'
                                },{
                                    offset:1,
                                    color:'#86D9EF'
                                }]),
                                barBorderRadius:10
                            }
                        }
                    },
                ]
            })
        },
        leftChartShow_2() {//二楼图表
            let myChart = this.$echarts.init(this.$refs.LChartData_2)
            // 绘制图表
            myChart.setOption({
            tooltip : {
                trigger: 'axis',
                axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                }
            },
            xAxis: [
                {
                type: 'category',
                data: this.LChartShowParkName,
                axisLine: {
                    lineStyle: {
                    type: 'solid',
                    color: '#fff',//左边线的颜色
                    width:'0.5'//坐标线的宽度
                    }
                },
                axisLabel: {
                    show: true,
                    textStyle: {
                    color: '#fff',
                    fontSize:'12'
                    },
                },
                axisTick: { //x轴刻度
                    show:false,  //是否显示刻度
                },
                }
            ],
            yAxis: [
                {
	                axisTick: { //x轴刻度
		                show:false,  //是否显示刻度
	                },
                type: 'value',
                splitNumber:4,
                splitLine:{
                    lineStyle: {
                    type: 'solid',
                    color: '#fff',//左边线的颜色
                    width:'0.5'//坐标线的宽度
                    }
                },
                axisLine: {
                    show:false,
                },
                axisLabel: {
                    show: true,
                    textStyle: {
                    color: '#fff',
                    fontSize:'.16rem'
                    }
                },
                }
            ],
            grid: {
                left: '0',
                right: '0',
                bottom: '0',
                top:'8%',
                containLabel: true
            },
            series: [
                    {
                        type: 'bar',
                        // highlightPolicy: 'ancestor',
                        data: this.LChartShowData_2P,
                        barWidth: '20%',
                        itemStyle:{
                            emphasis:{
                                barBorderRadius:10
                            },
                            normal:{
                                color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                    offset:0,
                                    color:'#2DE4FA'
                                },{
                                    offset:1,
                                    color:'#77FFB2'
                                }]),
                                barBorderRadius:10
                            }
                        }
                    },
                    {
                        type: 'bar',
                        // highlightPolicy: 'ancestor',
                        data:  this.LChartShowData_2A,
	                    barWidth: '20%',
                        itemStyle:{
                            emphasis:{
                                barBorderRadius:10
                            },
                            normal:{
                                color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                    offset:0,
                                    color:'#867BF5'
                                },{
                                    offset:1,
                                    color:'#86D9EF'
                                }]),
                                barBorderRadius:10
                            }
                        }
                    },
                ]
            })
        },
        leftChartShow_3() {//三楼图表
            let myChart = this.$echarts.init(this.$refs.LChartData_3)
            // 绘制图表
            myChart.setOption({
            tooltip : {
                trigger: 'axis',
                axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                }
            },
	            xAxis: [
		            {
			            type: 'category',
			            data: this.LChartShowParkName,
			            axisLine: {
				            lineStyle: {
					            type: 'solid',
					            color: '#fff',//左边线的颜色
					            width:'0.5'//坐标线的宽度
				            }
			            },
			            axisLabel: {
				            show: true,
				            textStyle: {
					            color: '#fff',
					            fontSize:'12'
				            },
			            },
			            axisTick: { //x轴刻度
				            show:false,  //是否显示刻度
			            },
		            }
	            ],
	            yAxis: [
		            {
			            axisTick: { //x轴刻度
				            show:false,  //是否显示刻度
			            },
			            type: 'value',
			            splitNumber:4,
			            splitLine:{
				            lineStyle: {
					            type: 'solid',
					            color: '#fff',//左边线的颜色
					            width:'0.5'//坐标线的宽度
				            }
			            },
			            axisLine: {
				            show:false,
			            },
			            axisLabel: {
				            show: true,
				            textStyle: {
					            color: '#fff',
					            fontSize:'.16rem'
				            }
			            },
		            }
	            ],
	            grid: {
		            left: '0',
		            right: '0',
		            bottom: '0',
		            top:'8%',
		            containLabel: true
	            },
	            series: [
		            {
			            type: 'bar',
			            // highlightPolicy: 'ancestor',
			            data: this.LChartShowData_3P,
			            barWidth: '20%',
			            itemStyle:{
				            emphasis:{
					            barBorderRadius:10
				            },
				            normal:{
					            color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [{
						            offset:0,
						            color:'#2DE4FA'
					            },{
						            offset:1,
						            color:'#77FFB2'
					            }]),
					            barBorderRadius:10
				            }
			            }
		            },
		            {
			            type: 'bar',
			            // highlightPolicy: 'ancestor',
			            data:  this.LChartShowData_2A,
			            barWidth: '20%',
			            itemStyle:{
				            emphasis:{
					            barBorderRadius:10
				            },
				            normal:{
					            color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [{
						            offset:0,
						            color:'#867BF5'
					            },{
						            offset:1,
						            color:'#86D9EF'
					            }]),
					            barBorderRadius:10
				            }
			            }
		            },
	            ]
            })
        },
        leftChartShow_4() {//四楼图表
            let myChart = this.$echarts.init(this.$refs.LChartData_4)
            // 绘制图表
            myChart.setOption({
            tooltip : {
                trigger: 'axis',
                axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                }
            },
	            xAxis: [
		            {
			            type: 'category',
			            data: this.LChartShowParkName,
			            axisLine: {
				            lineStyle: {
					            type: 'solid',
					            color: '#fff',//左边线的颜色
					            width:'0.5'//坐标线的宽度
				            }
			            },
			            axisLabel: {
				            show: true,
				            textStyle: {
					            color: '#fff',
					            fontSize:'12'
				            },
			            },
			            axisTick: { //x轴刻度
				            show:false,  //是否显示刻度
			            },
		            }
	            ],
	            yAxis: [
		            {
			            axisTick: { //x轴刻度
				            show:false,  //是否显示刻度
			            },
			            type: 'value',
			            splitNumber:4,
			            splitLine:{
				            lineStyle: {
					            type: 'solid',
					            color: '#fff',//左边线的颜色
					            width:'0.5'//坐标线的宽度
				            }
			            },
			            axisLine: {
				            show:false,
			            },
			            axisLabel: {
				            show: true,
				            textStyle: {
					            color: '#fff',
					            fontSize:'.16rem'
				            }
			            },
		            }
	            ],
	            grid: {
		            left: '0',
		            right: '0',
		            bottom: '0',
		            top:'8%',
		            containLabel: true
	            },
	            series: [
		            {
			            type: 'bar',
			            // highlightPolicy: 'ancestor',
			            data: this.LChartShowData_4P,
			            barWidth: '20%',
			            itemStyle:{
				            emphasis:{
					            barBorderRadius:10
				            },
				            normal:{
					            color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [{
						            offset:0,
						            color:'#2DE4FA'
					            },{
						            offset:1,
						            color:'#77FFB2'
					            }]),
					            barBorderRadius:10
				            }
			            }
		            },
		            {
			            type: 'bar',
			            // highlightPolicy: 'ancestor',
			            data:  this.LChartShowData_2A,
			            barWidth: '20%',
			            itemStyle:{
				            emphasis:{
					            barBorderRadius:10
				            },
				            normal:{
					            color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [{
						            offset:0,
						            color:'#867BF5'
					            },{
						            offset:1,
						            color:'#86D9EF'
					            }]),
					            barBorderRadius:10
				            }
			            }
		            },
	            ]
            })
        },
        //中间图表
        middleChartShow_1() {//一楼图表
            let myChart = this.$echarts.init(this.$refs.middleChartShow_1);
            // 绘制图表
            myChart.setOption({
                tooltip : {
                    trigger: 'axis',
                    axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                        type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                    }
                },
                xAxis: {
                    type: 'category',
                    data: ['产值', '利税', '人才', '就业'],
                    axisLine: {
                        lineStyle:{
                            color:'#fff',
                            width:0,
                        }
                    },
                    nameTextStyle:{
                        fontSize:"12rem"
                    },
                    axisTick: { //x轴刻度
                        show:false,  //是否显示刻度
                    },
                    axisPointer:{
                        type:"line",
                        lineStyle:{
                            color:'rgba(255,255,255,0)'
                        }
                    }
                },
                yAxis: [
                    {
	                    axisTick: { //x轴刻度
		                    show:false,  //是否显示刻度
	                    },
                        type: 'value',
                        splitNumber:4,
                        splitLine:{
                            lineStyle: {
                                type: 'solid',
                                color: '#fff',//左边线的颜色
                                width:'1'//坐标线的宽度
                            }
                        },
                        axisLine: {
                            show:false,
                        },
                        axisLabel: {
                            show: true,
                            textStyle: {
                                color: '#fff',
                                fontSize:'.17rem'
                            }
                        },
                    }
                ],
                series: [
                    {
                        data: this.MChartShowData_1P,
                        type: 'bar',
                        barWidth: '30%',
                        itemStyle:{
                            emphasis:{
                                barBorderRadius:10
                            },
                            normal:{
                                color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                    offset:0,
                                    color:'#7CA8FF'
                                },{
                                    offset:1,
                                    color:'#EFB486'
                                }]),
                                barBorderRadius:10
                            }
                        }
                    },
                ]
            });
        },
        middleChartShow_2() {//二楼图表
            let myChart = this.$echarts.init(this.$refs.middleChartShow_2)
            // 绘制图表
            myChart.setOption({
                tooltip : {
                    trigger: 'axis',
                    axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                        type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                    }
                },
	            xAxis: {
		            type: 'category',
		            data: ['产值', '利税', '人才', '就业'],
		            axisLine: {
			            lineStyle:{
				            color:'#fff',
				            width:0,
			            }
		            },
		            nameTextStyle:{
			            fontSize:"12rem"
		            },
		            axisTick: { //x轴刻度
			            show:false,  //是否显示刻度
		            },
		            axisPointer:{
			            type:"line",
			            lineStyle:{
				            color:'rgba(255,255,255,0)'
			            }
		            }
	            },
	            yAxis: [
		            {
			            axisTick: { //x轴刻度
				            show:false,  //是否显示刻度
			            },

			            type: 'value',
			            splitNumber:4,
			            splitLine:{
				            lineStyle: {
					            type: 'solid',
					            color: '#fff',//左边线的颜色
					            width:'1'//坐标线的宽度
				            }
			            },
			            axisLine: {
				            show:false,
			            },
			            axisLabel: {
				            show: true,
				            textStyle: {
					            color: '#fff',
					            fontSize:'.17rem'
				            }
			            },
		            }
	            ],
	            series: [
		            {
			            data: this.MChartShowData_2P,
			            type: 'bar',
			            barWidth: '30%',
			            itemStyle:{
				            emphasis:{
					            barBorderRadius:10
				            },
				            normal:{
					            color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [{
						            offset:0,
						            color:'#7CA8FF'
					            },{
						            offset:1,
						            color:'#EFB486'
					            }]),
					            barBorderRadius:10
				            }
			            }
		            },
	            ]
            })
        },
    },
    created () {
        this.getEntData();
        this.getTypeListData();
        this.getStatByTypeData();
        this.getlistByCenterData();
    },
    mounted () {
        // this.getPAByParkData();
        this.RUlMata = document.getElementsByClassName("R_show_box")[0];
        this.MUlMata = document.getElementsByClassName('Ment_show_box')[0];
        this.MChartAutoPlay();
        window.onresize = function(){
            window.location.reload();
        }
        // this.REntAutoPlay();
    },
    updated () {
        this.leftChartShow_1();
        this.leftChartShow_2();
        this.leftChartShow_3();
        this.leftChartShow_4();
        this.middleChartShow_1();
        this.middleChartShow_2();
        // this.ifMode_1Index();
    },
    destroyed () {
        this.RUlHoverLock = false;
    }
}
</script>

<style lang='less' scoped>
@import './entAdmin';
</style>

<style lang="less">
  .ivu-select-selection {
    background-color: #295294;
    border: 0.01rem solid #295294;
  }
  .ivu-select-item, .ivu-select-item-focus {
    background-color: #295294;
  }
  .ivu-select-dropdown {
    background-color: #295294;
  }
  .ivu-select-single .ivu-select-selection .ivu-select-placeholder, .ivu-select-single .ivu-select-selection .ivu-select-selected-value,.ivu-select-item {
    font-size:.21rem;
    font-weight:400;
    color:rgba(100,185,252,1);
    line-height:.29rem;
  }
  .ivu-select-arrow {
    font-size:.18rem;
    color: #64B9FC;
    margin-top: -0.1rem;
  }
</style>


