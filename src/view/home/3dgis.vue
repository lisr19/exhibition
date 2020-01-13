<template>
	<div class="home-body">
		<div id="cesiumContainer"></div>
		<m-menu @chartShow="chartShow" @chartShow2="chartShow2" @addPoint="addPoint"></m-menu>
		<m-data-left v-if="currentIndex === 0"></m-data-left>
		<m-data-left2 v-if="currentIndex === 1" ></m-data-left2>
		<m-data-left3 @powerList='powerShow' @entType='entType' v-if="currentIndex === 2"></m-data-left3>
	</div>
</template>

<script>
	import '../../../node_modules/cesium/Build/Cesium/Widgets/widgets.css'
	import mMenu from '@/components/m-menu/m-menu'
	import mDataLeft from '@/components/m-data/m-data-left'
	import mDataLeft2 from '@/components/m-data/m-data-left2'
	import mDataLeft3 from '@/components/m-data/m-data-left3'
	import Config from '@/Config'

	export default {
		name: 'home',
		components: {
			mMenu,
			mDataLeft,
			mDataLeft2,
			mDataLeft3,
		},
		data() {
			return {
				currentIndex: 0,//总路由
				currentIndex2: 0,//针对园区规划
				viewer: null,
				baseUrl: Config.gisServer,
				longitude: '',
				latitude: '',
				height: '',
				viewHeight: '',
				videoShow: false,
				tileset: null,
				entModId: null,
				videoData: {},
				buildingCamera:[
					{
						lng:113.2114102421,
						lat:22.7273937714,
						height:700.0,
						heading:80.0,
						pitch:-50.0
					},
					{
						lng:113.2177186143,
						lat:22.7283333428,
						height:1500.0,
						heading:80.0,
						pitch:-90.0
					},
					{
						lng:113.2177186143,
						lat:22.7293333428,
						height:1500.0,
						heading:170.0,
						pitch:-90.0
					},
					{
						lng:113.2213396868,
						lat:22.7274687985,
						height:1500.0,
						heading:30.0,
						pitch:-90.0
					}
				]
			}
		},
		mounted() {
			this.initViewer()
		},
		methods: {
			chartShow(index) {
				let v = this.buildingCamera[index]
				let buildingCameraView = {
					destination: Cesium.Cartesian3.fromDegrees(v.lng, v.lat, v.height),
					duration: 1.0,
					maximumHeight: 2000,
					pitchAdjustHeight: 2000,
					endTransform: Cesium.Matrix4.IDENTITY,
					orientation: {
						heading: Cesium.Math.toRadians(v.heading),
						pitch: Cesium.Math.toRadians(v.pitch),
						roll: 0.0
					}
				};
				switch (index) {
					case 0:
						this.viewer.scene.camera.flyTo(buildingCameraView);
						this.currentIndex2 = 0;
						break;
					case 1:
						this.viewer.scene.camera.flyTo(buildingCameraView);
						this.currentIndex2 = 0;
						break;
					case 2:
						this.viewer.scene.camera.flyTo(buildingCameraView);
						this.currentIndex2 = 0;
						break;
					case 3:
						// this.viewer.scene.camera.flyTo(buildingCameraView);
						break;
				}
				this.entModId = null;
				this.highlight()
				this.currentIndex = index;
				this.videoShow = false
				this.viewer.entities.removeAll()
			},
			chartShow2(index){
				this.currentIndex2 = index
				this.videoShow = false
			},
			initViewer() {
				let self = this
				self.viewer = new Cesium.Viewer('cesiumContainer', {
					animation: false,       //是否显示动画控件
					homeButton: false,       //是否显示home键
					geocoder: false,         //是否显示地名查找控件        如果设置为true，则无法查询
					baseLayerPicker: true, //是否显示图层选择控件
					timeline: false,        //是否显示时间线控件
					fullscreenButton: false, //是否全屏显示
					scene3DOnly: true,     //如果设置为true，则所有几何图形以3D模式绘制以节约GPU资源
					infoBox: true,         //是否显示点击要素之后显示的信息
					sceneModePicker: true,  //是否显示投影方式控件  三维/二维
					navigationInstructionsInitiallyVisible: false,
					navigationHelpButton: true,     //是否显示帮助信息控件
					selectionIndicator: false//是否显示指示器组件
				});
				self.viewer._cesiumWidget._creditContainer.style.display = "none";
				let camera = self.viewer.camera;
				let cartesian = null;
				let scene = self.viewer.scene;
				let ellipsoid = scene.globe.ellipsoid;
				let handler3D = new Cesium.ScreenSpaceEventHandler(scene.canvas);
				let provider = new Cesium.WebMapServiceImageryProvider({
					url: self.baseUrl + 'geoserver/ShunDeMap/wms',
					layers: 'ShunDeMap:SD_18',
					parameters: {
						service: 'WMS',
						format: 'image/png',
						transparent: true,
						tiled: true,
					}
				});

				//设置ProviderViewModel：
				let myMapModel = new Cesium.ProviderViewModel({
					name: '顺德地图',
					iconUrl: Cesium.buildModuleUrl('./Widgets/Images/ImageryProviders/esriWorldImagery.png'),
					tooltip: '顺德地图服务',
					creationFunction: function () {
						return provider;
					}
				});

				let providerViewModels = [];
				providerViewModels.push(myMapModel);
				self.viewer.baseLayerPicker.viewModel.imageryProviderViewModels = providerViewModels;
				self.viewer.baseLayerPicker.viewModel.selectedImagery = self.viewer.baseLayerPicker.viewModel.imageryProviderViewModels[0];


				//2加载模型
				self.tileset = scene.primitives.add(new Cesium.Cesium3DTileset({
					url: '/static/mods2/tileset.json',
				}));
				scene.primitives.add(self.tileset)
				self.tileset.style = new Cesium.Cesium3DTileStyle({
					color: {
						conditions: [
							['${id} === ' + self.entModId + '', 'color("red")'],
							['true', 'color("white")']
						]
					},
				});

				//设置home键视窗
				let homeCameraView = {
					destination: Cesium.Cartesian3.fromDegrees(113.21527074279392, 22.72684814286231, 700),
					duration: 1.0,
					maximumHeight: 2000,
					pitchAdjustHeight: 2000,
					endTransform: Cesium.Matrix4.IDENTITY,
					orientation: {
						heading: Cesium.Math.toRadians(60.0),
						pitch: Cesium.Math.toRadians(-60.0),
						roll: 0.0
					}
				};
				scene.camera.flyTo(homeCameraView);

				//获取经纬度 海拔 视高
				handler3D.setInputAction(function (movement) {
					let pick = new Cesium.Cartesian2(movement.endPosition.x, movement.endPosition.y);
					if (pick) {
						let cartesian = scene.globe.pick(camera.getPickRay(pick), scene);
						if (cartesian) {
							//世界坐标转地理坐标（弧度）
							let cartographic = scene.globe.ellipsoid.cartesianToCartographic(cartesian);
							if (cartographic) {
								//海拔
								let height = scene.globe.getHeight(cartographic);
								//视角海拔高度
								let he = Math.sqrt(camera.positionWC.x * camera.positionWC.x + camera.positionWC.y * camera.positionWC.y + camera.positionWC.z * camera.positionWC.z);
								let he2 = Math.sqrt(cartesian.x * cartesian.x + cartesian.y * cartesian.y + cartesian.z * cartesian.z);
								//地理坐标（弧度）转经纬度坐标
								let point = [cartographic.longitude / Math.PI * 180, cartographic.latitude / Math.PI * 180];
								if (!height) {
									height = 0;
								}
								if (!he) {
									he = 0;
								}
								if (!he2) {
									he2 = 0;
								}
								if (!point) {
									point = [0, 0];
								}
								self.longitude = point[0].toFixed(10)
								self.latitude = point[1].toFixed(10)
								self.height = height.toFixed(2)
								self.viewHeight = (he - he2).toFixed(2)
							}
						}
					}
				}, Cesium.ScreenSpaceEventType.MOUSE_MOVE);
				//鼠标点击事件
				let handler = new Cesium.ScreenSpaceEventHandler(scene.canvas);
				handler.setInputAction(function (click) {
					self.videoShow = false
					let pick = scene.pick(click.position);
					//选中某模型   pick选中的对象
					if (pick && pick.id) {
						let o = pick.id
						switch (o._type) {
							case 'ws':
								self.videoShow = true;
								self.videoData = {
									name: o.name
								}
								break;
							case 'ep':
								self.videoShow = true;
								self.videoData = {
									name: o.name
								}
								break;
							case 'fq':
								self.videoShow = true;
								self.videoData = {
									name: o.name
								}
								break;
							case 'xf':
								self.videoShow = true;
								self.videoData = {
									name: o.name
								}
								break;
						}
					}
				}, Cesium.ScreenSpaceEventType.LEFT_DOWN);
			},
			//添加点操作
			addPoint(list) {
				this.viewer.entities.removeAll()
				list.forEach(v => {
					var x = 2
					var flog = true
					if(list[0].type == "company"){
						let v = list[0]
						console.info(v)
						let buildingCameraView = {
							destination: Cesium.Cartesian3.fromDegrees(v.Clng, v.Clat, v.Cheight),
							duration: 1.0,
							maximumHeight: 2000,
							pitchAdjustHeight: 2000,
							endTransform: Cesium.Matrix4.IDENTITY,
							orientation: {
								heading: Cesium.Math.toRadians(v.heading),
								pitch: Cesium.Math.toRadians(v.pitch),
								roll: 0.0
							}
						};
						this.viewer.scene.camera.flyTo(buildingCameraView);
						this.viewer.entities.add({
							position: Cesium.Cartesian3.fromDegrees(v.lng, v.lat, v.height),
							id: v.id,
							name: v.text,
							videoUrl: v.videoUrl,
							type: v.type,
							label: {
								text: v.text,
								font: '50px',
								fillColor: Cesium.Color.BLACK,
								color: Cesium.Color.YELLOW,
								style: Cesium.LabelStyle.FILL_AND_OUTLINE,
								outlineWidth: 1,

								pixelOffset: new Cesium.Cartesian2(0, -50)
							},
							point : {
								show : true, // default
								pixelSize: 30,
								color :new Cesium.CallbackProperty(function () {
									if(flog){
										x=x-0.05;
										if(x<=0.1){
											flog=false;
										}
									}else{
										x=x+0.05;
										if(x>=1.5){
											flog=true;
										}
									}
									return Cesium.Color.YELLOW.withAlpha(x);
								},false),
								outlineWidth: 2
							}

						})}
					else {
						this.viewer.entities.add({
							position: Cesium.Cartesian3.fromDegrees(v.lng, v.lat, v.height),
							id: v.id,
							name: v.text,
							videoUrl: v.videoUrl,
							type: v.type,
							//点样式
							point: {
								pixelSize: 15,
								color: Cesium.Color.RED,
								outlineColor: Cesium.Color.WHITE,
								outlineWidth: 1
							},
							//字体标签样式
							label: {
								text: v.text,
								font: '28px',
								fillColor: Cesium.Color.WHITE,
								style: Cesium.LabelStyle.FILL_AND_OUTLINE,
								outlineWidth: 1,
								//垂直位置
								//verticalOrigin : Cesium.VerticalOrigin.BUTTON,
								//中心位置
								pixelOffset: new Cesium.Cartesian2(0, 20)
							}
						})
					}
				})
			},
			//添加线操作
			addPolyline() {
				this.viewer.entities.add({
					// position:Cesium.Cartesian3.fromDegrees(113.2210260708, 22.7276233687),
					// name:'Red ellipse on surface with outline',
					// ellipse:{
					//   semiMinorAxis:50.0,
					//   semiMajorAxis:40.0,
					//   material:Cesium.Color.RED,
					// }
					polyline: {
						positions: Cesium.Cartesian3.fromDegreesArray([113.2220326950, 22.7279226814,
							113.2213069412, 22.7266119392, 113.2199173581, 22.7273887995, 113.2207096538, 22.7288170081, 113.2220326950, 22.7279226814]),
						width: 5,
						material: Cesium.Color.RED
					}
				});
			},
			//绘制矩形
			highlight() {
				let self = this
				this.tileset.style = new Cesium.Cesium3DTileStyle({
					color: {
						conditions: [
							['${id} === ' + self.entModId, 'rgba(255,69,0,0.9)'],
							['true', 'color("white")']
						]
					}
				});
			},
			async powerShow(list) {
				let conditions = []
				if (list[0].length) {
					for (let i = 0; i < list[0].length; i++) {
						conditions.push(['${id} === ' + list[0][i], 'rgba(255, 165, 79,0.9)'])
					}
				}
				if (list[1].length) {
					for (let i = 0; i < list[1].length; i++) {
						conditions.push(['${id} === ' + list[1][i], 'rgba(173, 255, 47,0.9)'])
					}
				}
				if (list[2].length) {
					for (let i = 0; i < list[2].length; i++) {
						conditions.push(['${id} === ' + list[2][i], 'rgba(0,191,255,0.9)'])
					}
				}
				conditions.push(['true', 'color("white")'])
				this.tileset.style = new Cesium.Cesium3DTileStyle({
					color: {
						conditions: conditions
					}
				});
			},
			entType(list) {
				let conditions = []
				if (list.length) {
					for (let i = 0; i < list.length; i++) {
						conditions.push(['${id} === ' + list[i], 'rgba(	0, 191, 255, 0.9)'])
					}
				}
				conditions.push(['true', 'color("white")'])
				this.tileset.style = new Cesium.Cesium3DTileStyle({
					color: {
						conditions: conditions
					}
				});
			},
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
	.home-body {
		width: 100%;
		height: 100%;
		position: relative;
	}
	#cesiumContainer{
		width:7.94rem;
		height:6.24rem;
	}
</style>
