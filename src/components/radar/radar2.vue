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
            distance = Math.floor(Math.random() * (-20 - 110 + index) + 110)
          } else if (index % 2 === 0 && index < 5) {
            distance = Math.floor(Math.random() * (-20 - 80 + index) + 110)
          } else if (index % 2 === 0 && index > 5) {
            distance = Math.floor(Math.random() * (150 - 90 + index) + 120)
          } else {
            distance = Math.floor(Math.random() * (150 - 90 + index) + 120)
          }
        } else {//left
          if (index === 0 || index === 1) {
            distance = Math.floor(Math.random() * (-30 - 80 + index) + 80)
          } else if (index % 2 === 0 && index < 5) {
            distance = Math.floor(Math.random() * (150 - 110 + index) + 130)
          } else if (index % 2 === 0 && index > 5) {
            distance = Math.floor(Math.random() * (150 - 120 + index) + 120)
          } else {
            distance = Math.floor(Math.random() * (-30 - 120 + index) + 140)
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
	.radar {
		position: relative;
		width: 2.2rem;
		height:2.2rem;
		margin-top: 0.22rem;
		background: url("../../assets/img/ldbg.png");
		background-size: 100% 100%;
	}
	.radar-bg {
		background: url("../../assets/img/radar.png");
		background-size: 100% 100%;
		//background: radial-gradient(center, rgba(204,101,255, 0.3) 0%, rgba(173,0,255, 0) 75%), repeating-radial-gradient(rgba(173,0,255, 0) 5.8%, rgba(173,0,255, 0) 18%, #00afe6 18.6%, rgba(173,0,255, 0) 18.9%), linear-gradient(90deg, rgba(173,0,255, 0) 49.5%, #00afe6 50%, #00afe6 50%, rgba(173,0,255, 0) 50.2%), linear-gradient(0deg, rgba(173,0,255, 0) 49.5%, #00afe6 50%, #00afe6 50%, rgba(173,0,255, 0) 50.2%);
		width: 100%;
		height: 100%;
		//left: 0;
		//top: 0;
		position: absolute;
		transform: translate(0, 0);
		border-radius: 50%;
		//border: 6px solid #00afe6;
		overflow: hidden;
		opacity: 0.6;
	}

	.radar-bg:before {
		content: ' ';
		display: block;
		position: absolute;
		width: 100%;
		height: 100%;
		border-radius: 50%;
		animation: blips 5s infinite;
		animation-timing-function: linear;
		animation-delay: 0.5s;
	}

	.radar-bg:after {
		content: ' ';
		display: block;
		background-image: linear-gradient(65deg, rgba(173,0,255, 0) 50%, #00afe6 100%);
		width: 50%;
		height: 50%;
		position: absolute;
		top: 0;
		left: 0;
		animation: radar-beam 6s infinite;
		animation-timing-function: linear;
		transform-origin: bottom right;
		border-radius: 100% 0 0 0;
	}

	.radar-font {
		position: absolute;
		display: block;
		//top: 50%;
		//left: 50%;
		width: 2rem;
		text-align: left;
		animation: fontInOut 6s infinite linear 0s;
		font-size: 0.16rem;
		font-weight: 500;
		color: rgba(255, 255, 255, 1);
		line-height: 0.29rem;
		z-index: 333;
		opacity: 0;
	}

	@keyframes fontInOut {
		0% {
			opacity: 0;
		}
		5% {
			opacity: 0;
		}
		35% {
			opacity: 1;
		}
		100% {
			opacity: 0;
		}
	}

	@keyframes radar-beam {
		0% {
			transform: rotate(0deg);
		}
		100% {
			transform: rotate(360deg);
		}
	}

	@keyframes blips {
		14% {
			background: radial-gradient(0.15rem circle at 40% 40%, #00afe6 30%, rgba(255, 255, 255, 0) 100%);
		}
		16% {
			background: radial-gradient(0.15rem circle at 40% 40%, #00afe6 30%, rgba(255, 255, 255, 0) 100%),
			radial-gradient(0.15rem circle at 95% 50%, #00afe6 30%, rgba(255, 255, 255, 0) 100%);
		}
		18% {
			background: radial-gradient(0.15rem circle at 40% 40%, #00afe6 30%, rgba(255, 255, 255, 0) 100%),
			radial-gradient(0.15rem circle at 95% 50%, #00afe6 30%, rgba(255, 255, 255, 0) 100%),
			radial-gradient(0.15rem circle at 50% 62%, #00afe6 30%, rgba(255, 255, 255, 0) 100%);
		}
		20% {
			background: radial-gradient(0.15rem circle at 40% 40%, #00afe6 30%, rgba(255, 255, 255, 0) 100%),
			radial-gradient(0.15rem circle at 95% 50%, #00afe6 30%, rgba(255, 255, 255, 0) 100%),
			radial-gradient(0.15rem circle at 50% 62%, #00afe6 30%, rgba(255, 255, 255, 0) 100%);
		}
		25% {
			background: radial-gradient(0.15rem circle at 40% 40%, #00afe6 30%, rgba(255, 255, 255, 0) 100%),
			radial-gradient(0.15rem circle at 95% 50%, #00afe6 30%, rgba(255, 255, 255, 0) 100%),
			radial-gradient(0.15rem circle at 50% 62%, #00afe6 30%, rgba(255, 255, 255, 0) 100%),
			radial-gradient(0.15rem circle at 56% 86%, #00afe6 30%, rgba(255, 255, 255, 0) 100%);
		}
		26% {
			background: radial-gradient(0.15rem circle at 40% 40%, #00afe6 30%, rgba(255, 255, 255, 0) 100%),
			radial-gradient(0.15rem circle at 95% 50%, #00afe6 30%, rgba(255, 255, 255, 0) 100%),
			radial-gradient(0.15rem circle at 50% 62%, #00afe6 30%, rgba(255, 255, 255, 0) 100%),
			radial-gradient(0.15rem circle at 56% 86%, #00afe6 30%, rgba(255, 255, 255, 0) 100%),
			radial-gradient(0.15rem circle at 30% 75%, #00afe6 30%, rgba(255, 255, 255, 0) 100%);
			opacity: 1;
		}
		100% {
			background: radial-gradient(0.15rem circle at 40% 40%, #00afe6 30%, rgba(255, 255, 255, 0) 100%),
			radial-gradient(0.15rem circle at 95% 50%, #00afe6 30%, rgba(255, 255, 255, 0) 100%),
			radial-gradient(0.15rem circle at 50% 62%, #00afe6 30%, rgba(255, 255, 255, 0) 100%),
			radial-gradient(19px circle at 56% 86%, #00afe6 30%, rgba(255, 255, 255, 0) 100%),
			radial-gradient(0.15rem circle at 30% 75%, #00afe6 30%, rgba(255, 255, 255, 0) 100%);
			opacity: 0;
		}
	}
</style>
