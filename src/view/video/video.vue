<template>
  <div class="page">
    <a class="title" @click="goBack('视频资源')">融贯佛山，顺德为先</a>
    <div class="main">
      <div class="video-box">
        <!--<img src="@/assets/myIcon/shiping.jpg" alt="" style="width: 100%">-->
        <video id="video" controls autoplay="autoplay" loop="loop" src="http://192.168.199.122:11010/static/videos/abcdef.mp4"></video>
        <!--<video id="video" controls autoplay="autoplay" loop="loop" src="@/assets/myIcon/foshan.mp4"></video>-->
      </div>
    </div>
  </div>
</template>

<script>
  import {findExhibitionResourcesData} from "@/libs/API/exhibition";
  export default {
    data() {
      return {
        currentVideo:'',//当前播放视频
      }
    },
    methods: {
      goBack(type){
        this.$router.push({path: '/index', query: {type:type }})
      }
    }
  }
</script>

<style lang="less" scoped>
  #video{
    width: 100%;
    height: auto;
  }
  .page{
    width: 100%;
    height: 100%;
    min-height: 1080px;
    padding-top: 0.42rem;
    .title{
      height: 0.73rem;
      font-size: 0.52rem;
      font-family: PingFangSC-Semibold;
      font-weight: 600;
      color: rgba(183,189,201,1);
      line-height: 0.73rem;
    }
    .main{
      padding: 0.48rem 2.40rem 1.1rem;
      .video-box{
        video{
          width: 100%;
        }
      }
    }
  }
</style>
