<template>
  <div class="radar">
    <div class="radar-bg"></div>
    <p class="radar-font"
       :style="{top:randomDistance(index,0)+'rem',left:randomDistance(index,1)+'rem',animationDelay:fontDelay(index) + 's'}"
       v-for="(item,index) in titleArray">{{item.name}}</p>
  </div>
</template>

<script>
  export default {
    name: "radar",
    props: ['titleArray'],
    data() {
      return {}
    },
    methods: {
      // 封装随机数方法
      randomDistance(index, type) {
        let distance = 0
        if (type === 0) {//top
          if (index === 0 || index === 1) {
            distance = Math.floor(Math.random() * (-20 - 150 + index) + 150)
          } else if (index % 2 === 0 && index < 5) {
            distance = Math.floor(Math.random() * (-20 - 150 + index) + 150)
          } else if (index % 2 === 0 && index > 5) {
            distance = Math.floor(Math.random() * (150 - 270 + index) + 270)
          } else {
            distance = Math.floor(Math.random() * (150 - 270 + index) + 270)
          }
        } else {//left
          if (index === 0 || index === 1) {
            distance = Math.floor(Math.random() * (-30 - 80 + index) + 80)
          } else if (index % 2 === 0 && index < 5) {
            distance = Math.floor(Math.random() * (150 - 200 + index) + 200)
          } else if (index % 2 === 0 && index > 5) {
            distance = Math.floor(Math.random() * (150 - 200 + index) + 200)
          } else {
            distance = Math.floor(Math.random() * (-30 - 150 + index) + 150)
          }
        }
        distance = distance/100
        return distance
      },
      fontDelay(index) {
        let time = 0
        if (index === 0) {
          time = 0.5
        } else {
          time = index + 1
        }
        return time
      }
    }
  }
</script>

<style lang="less" scoped>
  @import "radar";
</style>
