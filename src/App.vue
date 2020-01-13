<template>
  <div class="bg">
    <div id="app">
	    <keep-alive>
		    <router-view v-if="$route.meta.keepAlive"></router-view>
	    </keep-alive>
	    <router-view v-if="!$route.meta.keepAlive"></router-view>
    </div>
  </div>
</template>

<script>
  import {doLogin} from "./libs/API/login";

  export default {
    name: 'App',
    // 提供reload方法
    data(){
      return{
        timer:0,
        hour:0,
        day:0,
        maxDay:30//设定刷新页面天数
      }
    },
    methods:{
      async doLogin(){
        let res = await doLogin()
        if(res.code === 200){
          localStorage.setItem('exhibition_token',res.data.token)
        }else{
          console.log(res.message)
        }
      },
      clearTime(){
        this.hour = 0
        this.day = 0
      },
    },
    created() {
      if(!localStorage.exhibition_token){
        this.doLogin()
      }
      // console.log(document.body.clientWidth)
    },
    mounted(){
      //todo 修改为深夜刷新一次
      // if(this.timer){
      //   clearInterval(this.timer);
      // }else{
      //   this.timer = setInterval(() =>{
      //     // console.log(this.hour)
      //     if(this.hour !== 24){
      //       this.hour++
      //     }else{
      //       this.day++
      //       this.hour = 0
      //     }
      //     if(this.day === this.maxDay){
      //       this.$router.go(0);
      //       location.reload()
      //     }
      //   },3600000)
      // }
    },
    destroyed(){
      // clearInterval(this.timer)
      // this.clearTime()
    }
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    /* margin-top: 60px; */
    /*width: 100%;*/
    /*height: 100%;*/
    /*width: 2304px;*/
    /*height: 1280px;*/
    /*margin: 8px auto;*/

  }
  .bg {
    background: url(assets/images/bg2.png) no-repeat;
    background-size: 100% 100%;
	  z-index: -1;
  }
</style>
