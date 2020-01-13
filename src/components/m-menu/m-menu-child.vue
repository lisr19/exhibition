<template>
  <transition name="slide-fade">
    <div class="menu-child">
      <ul>
        <li v-for="(item,index) in list" :key="index" @click="showPoint(index)">{{item.name}}</li>
      </ul>
    </div>
  </transition>
</template>

<script>
  export default {
    name: "m-menu-child",
    inheritAttrs: false,
    data() {
      return {
        list: [
          {
            name: '园区/企业监控',
          },
          {
            name: '污水处理点分布'
          },
          {
            name: '消防设施点',
          },
          {
            name: '废气排放点'
          },
          {
            name:'园区未来规划'
          }
        ],
        wushui: [
          {
            id:1,
            videoUrl:'test',
            type:'ws',
            lng: 113.2217258470,
            lat: 22.7263915379,
            height: 100,
            text: '污水点1'
          },
          {
            id:2,
            videoUrl:'test',
            lng: 113.2212571490,
            lat: 22.7293164111,
            height: 100,
            type:'ws',
            text: '污水点2'
          },
          {
            id:3,
            videoUrl:'test',
            lng: 113.2257891764,
            lat: 22.7276498206,
            height: 100,
            type:'ws',
            text: '污水点3'
          }
        ],
        enterprise: [
          {
            id:1,
            videoUrl:'test',
            type:'ep',
            lng: 113.2187494489,
            lat: 22.7272668203,
            height: 100,
            text: '监控点1'
          },
          {
            id:2,
            videoUrl:'test',
            lng: 113.2174944061,
            lat: 22.7288500586,
            height: 100,
            type:'ep',
            text: '监控点2'
          },
          {
            id:3,
            videoUrl:'test',
            lng: 113.2171831679,
            lat: 22.7296379139,
            height: 100,
            type:'ep',
            text: '监控点3'
          },
          {
            id:4,
            videoUrl:'test',
            lng: 113.2205603367,
            lat: 22.7287095354,
            height: 100,
            type:'ep',
            text: '监控点4'
          }
        ],
        feiqi:[
          {
            id:1,
            videoUrl:'test',
            type:'fq',
            lng: 113.2217258470,
            lat: 22.7263915379,
            height: 100,
            text: '废气排放点1'
          },
          {
            id:2,
            videoUrl:'test',
            lng: 113.2212571490,
            lat: 22.7293164111,
            height: 100,
            type:'fq',
            text: '废气排放点2'
          },
          {
            id:3,
            videoUrl:'test',
            lng: 113.2257891764,
            lat: 22.7276498206,
            height: 100,
            type:'fq',
            text: '废气排放点3'
          }
        ],
        xiaofang:[
          {
            id:1,
            videoUrl:'test',
            type:'xf',
            lng: 113.2187494489,
            lat: 22.7272668203,
            height: 100,
            text: '消防点1'
          },
          {
            id:2,
            videoUrl:'test',
            lng: 113.2171831679,
            lat: 22.7296379139,
            height: 100,
            type:'xf',
            text: '消防点2'
          },
          {
            id:3,
            videoUrl:'test',
            lng: 113.2205603367,
            lat: 22.7287095354,
            height: 100,
            type:'xf',
            text: '消防点3'
          }
        ]
      }
    },
    methods: {
      showPoint(index) {
        this.$emit("showChart", index);
        this.$emit("chartShow2",index);
        switch (index) {
          case 0:
            this.$emit("addPoint", this.enterprise);
            
            break;
          case 1:
            this.$emit("addPoint", this.wushui);
           
            break;
          case 2:
            this.$emit("addPoint", this.xiaofang);
           
            break;
          case 3:
            this.$emit("addPoint", this.feiqi);
            
            break;
          case 4:
            
            break;
        }
      }
    }
  }
</script>

<style lang="less" scoped>
  .slide-fade-enter-active {
    transition: all .3s ease;
  }

  .slide-fade-leave-active {
    transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }

  .slide-fade-enter, .slide-fade-leave-to
    /* .slide-fade-leave-active for below version 2.1.8 */ {
    transform: translateX(10px);
    opacity: 0;
  }

  .menu-child {
    position: absolute;
    width: 2rem;
    right: -40%;
    top: 0.68rem;
    background: rgba(76, 183, 255, 0.8);
    box-shadow: 0 0 0.05rem 0.05rem rgba(128, 218, 255, 0.62);
    border-radius: 0.1rem;
    ul {
      margin: 0.05rem 0;
      padding: 0.05rem 0;
    }
    ul li {
      height: 0.45rem;
	    line-height: 0.45rem;
      cursor: pointer;
	    padding: 0.05rem 0;
      border-bottom: 0.01rem solid #ffffff;
      text-align: center;
      font-size: 0.14rem;
      font-weight: 400;
      color: rgba(255, 255, 255, 1);
      list-style-type: none;
    }
  }
</style>
