<template>
  <div class="menu">
    <div class="menu-header">
      <img src="@/assets/header_logo.png" class="logo">
    </div>
    <div class="menu-tab">
      <div class="menu-tab-item" @click="dataShow(0)">
        <img src="@/assets/tab_bg.png" class="rot1">
        <div></div>
      </div>
      <div class="menu-tab-item" @click="dataShow(1)">
        <img src="@/assets/tab_bg.png" class="rot2">
        <div></div>
      </div>
      <div class="menu-tab-item" @click="dataShow(2)">
        <img src="@/assets/tab_bg.png" class="rot1">
        <div></div>
      </div>
      <div class="menu-tab-item" @click="dataShow(3)">
        <img src="@/assets/tab_bg.png" class="rot2">
        <div></div>
      </div>
      <menu-child v-show="childShow" v-on="$listeners" @showChart="showChart"></menu-child>
      <menu-child2 v-show="childShow2" v-on="$listeners"></menu-child2>
    </div>
    <!--<div class="menu-btn">收缩</div>-->
    <div class="menu-title">佛山军民融合园区电子沙盘</div>
  </div>
</template>

<script>
  import menuChild from '@/components/m-menu/m-menu-child'
  import menuChild2 from '@/components/m-menu/m-menu-child2'
  export default {
    name: "m-menu",
    inheritAttrs: false,
    components: {
      menuChild,
      menuChild2,
    },
    data() {
      return {
        childShow: false,
        childShow2: false
      }
    },
    methods: {
      dataShow(index) {
        this.childShow2 = false
        switch (index) {
          case 0:
            this.$emit('chartShow', index)
            this.childShow = false
            break;
          case 1:
            this.$emit('chartShow', index)
            this.childShow = false
            break;
          case 2:
            this.$emit('chartShow', index)
            this.childShow = false
            break;
          case 3:
            // this.$emit('chartShow', index)
	          this.$router.push('/gis')
	          this.childShow = false
            // this.childShow = !this.childShow
            break;
        }
      },
      showChart(index){
        if(index == 1) this.childShow2 = !this.childShow2;
        else this.childShow2 = false;
      }
    }
  }
</script>

<style lang="less" scoped>
  .menu {
	width: 2.85rem;
    height: 0.64rem;
    border-radius: 10px;
    position: absolute;
    left: 0.05rem;
    top: 0.08rem;
    background: url("../../assets/header_bg.png") no-repeat center;
    background-size: 100% 100%;
    -moz-background-size: 100% 100%;
    .menu-header {
      position: relative;
      .logo {
        width: 0.40rem;
        height: 0.40rem;
        position: absolute;
        left: 0.15rem;
        top: 0.08rem;
      }
    }
    .menu-tab {
      position: absolute;
      width: 2.20rem;
      height: 0.50rem;
      bottom: -0.30rem;
      right: 0.05rem;
      display: flex;
      justify-content: space-around;
      .menu-tab-item {
        width: 0.32rem;
        height: 0.32rem;
        border-radius: 50%;
        position: relative;
        img {
          width: 100%;
          height: 100%;
          position: absolute;
          z-index: 10;
	        left: -0.05rem;
	        bottom: 0.05rem;
        }
        > div {
          position: absolute;
          width: 0.30rem;
          height: 0.30rem;
          background: rgba(76, 183, 255, 1);
          box-shadow: 0 0 0.02rem 0.02rem rgba(128, 218, 255, 0.62);
          border-radius: 50%;
          left: 50%;
          top: 50%;
          margin-left: -0.20rem;
          margin-top: -0.20rem;
          z-index: 5;
        }
      }
      .rot1 {
        -webkit-animation: spin1 1.5s linear 1.5s 5 alternate;
        animation: spin1 1.5s linear infinite;
      }
      .rot2 {
        -webkit-animation: spin2 1.5s linear 1.5s 5 alternate;
        animation: spin2 1.5s linear infinite;
      }
    }
    .menu-btn {
      width: 0.49rem;
      height: 0.23rem;
      background: rgba(109, 214, 255, 1);
      border-radius: 0.05rem;
      border: 0.01rem solid rgba(51, 162, 255, 1);
      position: absolute;
      left: 0.47rem;
      bottom: -0.1rem;
      text-align: center;
      padding-top: 0.03rem;
      font-size: 0.12rem;
      font-weight: 400;
      color: rgba(255, 255, 255, 1);
      line-height: 0.17rem;
    }
    .menu-title{
      position: absolute;
      left: 0.70rem;
      top:0.08rem;
      font-size: 0.16rem;
      font-weight: 400;
      color: rgba(255, 255, 255, 1);
    }
  }

  @-webkit-keyframes spin1 {
    from {
      -webkit-transform: rotate(0deg);
    }
    to {
      -webkit-transform: rotate(360deg);
    }
  }

  @keyframes spin1 {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }

  @-webkit-keyframes spin2 {
    from {
      -webkit-transform: rotate(0deg);
    }
    to {
      -webkit-transform: rotate(-360deg);
    }
  }

  @keyframes spin2 {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(-360deg);
    }
  }
</style>
