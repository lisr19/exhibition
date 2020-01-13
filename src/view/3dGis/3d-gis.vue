<template>
    <div class="gis-window-body">
        <router-link  class="back" to="/index"></router-link>
        <div>
	        <iframe src="http://llz.halohealth.cn:13011/" class="gis" frameborder="0"></iframe>
	        <!--<iframe src="http://192.168.4.123:8080/" class="gis" frameborder="0"></iframe>-->
        </div>
    </div>
</template>

<script>
    export default {
        name: 'gis',
        data() {
            return {

            }
        },
	    methods:{}
    }
</script>

<style lang="less" scoped>
    .gis-window-body{
        width: 23.04rem;
        height: 12.95rem;
        position: relative;
        margin: 0 auto;
        >.back{
            position: absolute;
            width: 5.5rem;
            height: 0.7rem;
            top: 0.23rem;
            left: 0.08rem;
            // background: #000;
        }
        div{
            margin: 0 auto;
            >.gis{
                width: 23.04rem;
                height: 12.8rem;
                margin: 0 auto;
            }
        }
        
    }
</style>