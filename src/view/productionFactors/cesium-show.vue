<template>
  <div>
    <div  id="cesiumContainer" style="width:12.13rem;height:8.07rem;"></div>
  </div>
</template>

<script>
  export default {
    name: "cesium-show",
    data() {
      return{
        baseUrl: 'http://192.168.199.122:8080/',
        baseUrl2: 'http://sdcmi.halohealth.cn/resource/3d/1/',//模型资源路径
        longitude_show: '',//经度
        latitude_show: '',//纬度
        altitude_show: '',//视距
        viewer: null,//cesium对象
        provider: null,//cesium对象
        myMapModel: null,//cesium对象
      }
    },
    methods:{
      //创建cesium对象
      initCesium() {
        let _self = this
        //设置静态资源目录
        //创建viewer实例并配置参数
        _self.viewer = new _self.$Cesium.Viewer('cesiumContainer', {
          geocoder: false,//查询
          homeButton: false,
          shouldAnimate: true,
          sceneModePicker: false,//地图展示模式
          baseLayerPicker: true,//地图选择
          // navigationHelpButton: false,//帮助
          animation: false,//动画
          // creditContainer:"cesiumContainer",
          timeline: false,//时间线
          fullscreenButton: false,//全屏显示
          vrButton: false,
          navigationInstructionsInitiallyVisible: false,
          selectionIndicator: false//是否显示指示器组件
        });
        //取消提示文字
        _self.viewer._cesiumWidget._creditContainer.style.display = "none";

        let canvas = _self.viewer.canvas
        let camera = _self.viewer.camera
        let handler = new _self.$Cesium.ScreenSpaceEventHandler(canvas);
        let scene = _self.viewer.scene
        _self.provider = new _self.$Cesium.WebMapServiceImageryProvider({
          url: _self.baseUrl + 'geoserver/ShunDeMap/wms',
          layers: 'ShunDeMap:SD_18',
          parameters: {
            service: 'WMS',
            format: 'image/png',
            transparent: true,
            tiled: true,
          }
        });
        // 设置ProviderViewModel：
        // _self.myMapModel = new _self.$Cesium.ProviderViewModel({
        //   name: '顺德地图',
        //   iconUrl: _self.$Cesium.buildModuleUrl('./Widgets/Images/ImageryProviders/esriWorldImagery.png'),
        //   tooltip: '顺德地图服务',
        //   creationFunction: function () {
        //     return _self.provider;
        //   }
        // })

        //限制视距
        scene.screenSpaceCameraController.minimumZoomDistance = 200;
        scene.screenSpaceCameraController.maximumZoomDistance = 900;

        _self.loadingModel();
        //设置视角
        camera.flyTo({
          destination: _self.$Cesium.Cartesian3.fromDegrees(113.2135, 22.7345, 450.0),
          duration: 3,
          orientation: {
            heading: _self.$Cesium.Math.toRadians(135.0),
            pitch: _self.$Cesium.Math.toRadians(-40.0),
            roll: 0.0
          }
        });
        // _self.initialPosition = new _self.$Cesium.Cartesian3.fromDegrees(113.2165, 22.7303, 600);
        // _self.initialOrientation = new _self.$Cesium.HeadingPitchRoll.fromDegrees(0, 0, 0);
        // scene.camera.setView({
        //   destination: _self.initialPosition,
        //   orientation: _self.initialOrientation,
        //   endTransform: _self.$Cesium.Matrix4.IDENTITY,
        // });


        //具体事件的实现
        let ellipsoid = scene.globe.ellipsoid;
        handler.setInputAction(function (movement) {
          //捕获椭球体，将笛卡尔二维平面坐标转为椭球体的笛卡尔三维坐标，返回球体表面的点
          let cartesian = camera.pickEllipsoid(movement.endPosition, ellipsoid);
          if (cartesian) {
            //将笛卡尔三维坐标转为地图坐标（弧度）
            let cartographic = scene.globe.ellipsoid.cartesianToCartographic(cartesian);
            //将地图坐标（弧度）转为十进制的度数
            let lat_String = _self.$Cesium.Math.toDegrees(cartographic.latitude).toFixed(4);
            let log_String = _self.$Cesium.Math.toDegrees(cartographic.longitude).toFixed(4);
            let alti_String = (camera.positionCartographic.height / 1000).toFixed(2);
            // console.log(lat_String,log_String,alti_String)
            _self.longitude_show = log_String;
            _self.latitude_show = lat_String;
            _self.altitude_show = alti_String;
          }
        }, _self.$Cesium.ScreenSpaceEventType.MOUSE_MOVE);


        _self.providerViewModels = [];
        _self.providerViewModels.push(_self.myMapModel);
        _self.viewer.baseLayerPicker.viewModel.imageryProviderViewModels = _self.providerViewModels;
        _self.viewer.baseLayerPicker.viewModel.selectedImagery = _self.viewer.baseLayerPicker.viewModel.imageryProviderViewModels[0];
      },
      //创建模型
      createModel(url, lng, lat, height, axesX, size) {
        // this.viewer.entities.removeAll();
        let _self = this
        let position = _self.$Cesium.Cartesian3.fromDegrees(lng, lat);
        let heading = _self.$Cesium.Math.toRadians(axesX);
        let pitch = 0;
        let roll = 0;
        let hpr = new _self.$Cesium.HeadingPitchRoll(heading, pitch, roll);
        let orientation = _self.$Cesium.Transforms.headingPitchRollQuaternion(position, hpr);

        _self.viewer.trackedEntity = _self.viewer.entities.add({
          name: url,
          position: position,
          orientation: orientation,
          model: {
            uri: url,
            scale: size,
            // minimumPixelSize : 20,
            maximumScale: 100
          }
        });
      },
      loadingModel(){
        //3D模型
        this.createModel(this.baseUrl2 + '001.gltf', 113.21764, 22.73035, 0, 90, 20);
        this.createModel(this.baseUrl2 + '002.gltf', 113.21764, 22.73035, 0, 90, 20);
        this.createModel(this.baseUrl2 + '003.gltf', 113.21700, 22.72990, 0, -90, 20);
        this.createModel(this.baseUrl2 + '004.gltf', 113.21764, 22.73035, 0, 95, 20);
      }
    },
    mounted() {
      // this.loadingModel()
      console.log(this.baseUrl)
      this.initCesium();
    },
  }
</script>

<style lang="less" scoped>
  @import './productionFactors.less';
</style>
