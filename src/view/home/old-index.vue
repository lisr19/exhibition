<template>
  <div class="home">
    <div class="home-title">佛山市军民融合综合管理服务平台</div>
    <div id="showWindow" ref="showWindow">
      <div class='perspective'>
        <div class='wrap' ref="wrap">
          <figure class="item" v-for="(item,index) in btnArray" @click.stop="openType(item)" ref="figure">
            <img :src="item.imgUrl" >
            <p>{{item.name}}</p>
          </figure>
        </div>
      </div>
    </div>
    <div class="waves"></div>
  </div>
</template>
<script>
  export default {
    name: "index",
    data(){
      return{
        isAuto:false,
        isIndex:true,
        btnArray:[
          {
            imgUrl: require('@/assets/myIcon/lvsefazhan.png'),
            path:'/proFactors',
            name:'绿色发展中心'
          },
          {
            imgUrl: require('@/assets/myIcon/chengguozhuanhuan.jpg'),
            path:'/achievement',
            name:'成果转化中心'
          },
          {
            imgUrl: require('@/assets/myIcon/keyanpeitao.jpg'),
            path:'/supService',
            name:'科研配套中心'
          },
          {
            imgUrl: require('@/assets/myIcon/zhijian.jpg'),
            path:'/detect',
            name:'质检认证中心'
          },
          {
            imgUrl: require('@/assets/myIcon/jiankang.jpg'),
            path:'/health',
            name:'健康体检中心'
          },
          {
            imgUrl: require('@/assets/myIcon/qiyepeixun.jpg'),
            path:'/course',
            name:'企业培训中心'
          },
          {
            imgUrl: require('@/assets/myIcon/qiyefuwu.jpg'),
            path:'/entService',
            name:'企业服务中心'
          },
          {
            imgUrl: require('@/assets/myIcon/qiyeguanli.jpg'),
            path:'/entAdmin',
            name:'企业管理中心'
          },
          {
            imgUrl: require('@/assets/myIcon/shiping.jpg'),
            path:'/video',
            name:'融贯佛山，顺德为先'
          },
          {
            imgUrl: require('@/assets/myIcon/3d_gis.jpg'),
            path:'/gis',
            name:'3D GIS'
          },
        ]
      }
    },
    created(){
      //用于绿色发展中心强制刷新页面
      localStorage.setItem('cesiumShow','1')
    },
    mounted(){
      this.initiWaves()
      this.initiAutoImg()

    },
    methods: {
      initiAutoImg() {
        let oWindow= this.$refs.showWindow
        let oImg= this.$refs.figure
        let oWrap= this.$refs.wrap
        let lastX,lastY,nowX,nowY,minusX,minusY,roY=0,roX=0;
        let timer=null;
        /*计算每一个图片的角度 总角度(360) / 数量(11) = 单位角度*/
        let length=oImg.length;  /*获取img的数量 统称为长度*/
        let Deg=360/length;      /*单位角度*/
        for(let i=0;i<length;i++){
          oImg[i].style.transform='rotateY('+ i*Deg +'deg) translateZ(5.8rem)';
          oImg[i].style.transition='transform 1s '+(length-1-i)*0.2+'s'
        }
        if(this.$route.query.type==='绿色发展') {
          clearInterval(autoPlay)
          roY =360
          autoPlay = setTimeout(()=> {
            roY += 0.1;
            oWrap.style.transform="rotateY("+roY+"deg)"
          },200)
        }
        if(this.$route.query.type==='成果转化') {
          clearInterval(autoPlay)
          roY =320
          autoPlay = setTimeout(()=> {
            roY += 0.1;
            oWrap.style.transform="rotateY("+roY+"deg)"
          },200)
        }
        if(this.$route.query.type==='科研配套') {
          clearInterval(autoPlay)
          roY =280
          autoPlay = setTimeout(()=> {
            roY += 0.1;
            oWrap.style.transform="rotateY("+roY+"deg)"
          },200)
        }
        if(this.$route.query.type==='质检认证') {
          clearInterval(autoPlay)
          roY =240
          autoPlay = setTimeout(()=> {
            roY += 0.1;
            oWrap.style.transform="rotateY("+roY+"deg)"
          },200)
        }
        if(this.$route.query.type==='健康体检') {
          clearInterval(autoPlay)
          roY =200
          autoPlay = setTimeout(()=> {
            roY += 0.1;
            oWrap.style.transform="rotateY("+roY+"deg)"
          },200)
        }
        if(this.$route.query.type==='企业培训') {
          clearInterval(autoPlay)
          roY =160
          autoPlay = setTimeout(()=> {
            roY += 0.1;
            oWrap.style.transform="rotateY("+roY+"deg)"
          },200)
        }
        if(this.$route.query.type==='企业服务') {
          clearInterval(autoPlay)
          roY =120
          autoPlay = setTimeout(()=> {
            roY += 0.1;
            oWrap.style.transform="rotateY("+roY+"deg)"
          },200)
        }
        if(this.$route.query.type==='企业管理') {
          clearInterval(autoPlay)
          roY =80
          autoPlay = setTimeout(()=> {
            roY += 0.1;
            oWrap.style.transform="rotateY("+roY+"deg)"
          },200)
        }
        if(this.$route.query.type==='视频资源') {
          clearInterval(autoPlay)
          roY =40
          autoPlay = setTimeout(()=> {
            roY += 0.1;
            oWrap.style.transform="rotateY("+roY+"deg)"
          },200)
        }
        let autoPlay = setInterval(()=>{
          roY += 0.1;
          oWrap.style.transform="rotateY("+roY+"deg)"
        },50)
        oWindow.onmouseover = ()=>{
          clearInterval(autoPlay);
          clearInterval(timer);
        }
        oWindow.onmouseout = ()=>{
          autoPlay = setInterval(()=>{
            roY += 0.1;
            oWrap.style.transform="rotateY("+roY+"deg)"
          },50)
        }
        /*拖拽drag 按下 onmousedown 移动 onmousemove 抬起 onmouseup */
        document.onmousedown=(event)=>{/*按下鼠标开始准备拖拽*/
          event=event||window.event;			/*处理兼容性*/
          lastX=event.clientX;				/*鼠标拖拽开始时的x坐标*/
          lastY=event.clientY;				/*鼠标拖拽开始时的Y坐标*/
          this.startX = lastX
          clearInterval(timer);
          document.onmousemove=(event)=>{
            event=event||window.event;
            nowX=event.clientX;             /*鼠标移动时的x坐标*/
            nowY=event.clientY;				/*鼠标移动时的y坐标*/
            minusX=nowX-lastX;              /*获取鼠标移动距离*/
            minusY=nowY-lastY;				/*获取鼠标移动距离*/
            roY+=minusX*0.2;				/*通过移动量计算旋转角度*/
            roX-=minusY*0.1;				/*通过移动量计算旋转角度*/
            oWrap.style.transform=' rotateY('+roY+'deg)'
            lastX=nowX;						/*更新初始位置保证 lastX 跟得上鼠标*/
            lastY=nowY;						/*更新初始位置保证 lastY  */
          }
          document.onmouseup=(event)=>{
            document.onmousemove=null;
            event=event||window.event;
            lastX=event.clientX
            lastY=event.clientY
            this.endX = lastX
            if(this.endX-this.startX===0){
              clearInterval(timer);
              timer=setInterval(()=>{
                roY += 0.1;
                oWrap.style.transform="rotateY("+roY+"deg)"
                if(Math.abs(minusX)<0.1&&Math.abs(minusY)<0.1){
                  /*当移动向量过小的时候终止定时器停止惯性*/
                  clearInterval(timer);
                }
              },50)
            } else {
              timer=setInterval(()=>{
                /*给一个摩擦系数,每一次定时器触发都慢一点点*/
                minusX*=0.9;
                minusY*=0.9;
                roY+=minusX*0.2;				/*通过移动量计算旋转角度*/
                roX-=minusY*0.1;				/*通过移动量计算旋转角度*/
                oWrap.style.transform='rotateY('+roY+'deg)';
                if(Math.abs(minusX)<0.1&&Math.abs(minusY)<0.1){
                  /*当移动向量过小的时候终止定时器停止惯性*/
                  clearInterval(timer);
                }
              },13);
            }
          }
          return false;
        }

        document.touchstart=(event)=>{
          console.log(1111);
        }
      },
      initiWaves() {
        class ShaderProgram {
          constructor( holder, options = {} ) {
            options = Object.assign( {
              antialias: false,
              depthTest: false,
              mousemove: false,
              autosize: true,
              side: 'front',
              vertex: `
        precision highp float;

        attribute vec4 a_position;
        attribute vec4 a_color;

        uniform float u_time;
        uniform vec2 u_resolution;
        uniform vec2 u_mousemove;
        uniform mat4 u_projection;

        varying vec4 v_color;

        void main() {

          gl_Position = u_projection * a_position;
          gl_PointSize = (10.0 / gl_Position.w) * 100.0;

          v_color = a_color;

        }`,
              fragment: `
        precision highp float;

        uniform sampler2D u_texture;
        uniform int u_hasTexture;

        varying vec4 v_color;

        void main() {

          if ( u_hasTexture == 1 ) {

            gl_FragColor = v_color * texture2D(u_texture, gl_PointCoord);

          } else {

            gl_FragColor = v_color;

          }

        }`,
              uniforms: {},
              buffers: {},
              camera: {},
              texture: null,
              onUpdate: ( () => {} ),
              onResize: ( () => {} ),
            }, options )

            const uniforms = Object.assign( {
              time: { type: 'float', value: 0 },
              hasTexture: { type: 'int', value: 0 },
              resolution: { type: 'vec2', value: [ 0, 0 ] },
              mousemove: { type: 'vec2', value: [ 0, 0 ] },
              projection: { type: 'mat4', value: [ 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1 ] },
            }, options.uniforms )

            const buffers = Object.assign( {
              position: { size: 3, data: [] },
              color: { size: 4, data: [] },
            }, options.buffers )

            const camera = Object.assign( {
              fov: 60,
              near: 1,
              far: 10000,
              aspect: 1,
              z: 100,
              perspective: true,
            }, options.camera )

            const canvas = document.createElement( 'canvas' )
            const gl = canvas.getContext( 'webgl', { antialias: options.antialias } )

            if ( ! gl ) return false

            this.count = 0
            this.gl = gl
            this.canvas = canvas
            this.camera = camera
            this.holder = holder
            this.onUpdate = options.onUpdate
            this.onResize = options.onResize
            this.data = {}

            holder.appendChild( canvas )

            this.createProgram( options.vertex, options.fragment )

            this.createBuffers( buffers )
            this.createUniforms( uniforms )

            this.updateBuffers()
            this.updateUniforms()

            this.createTexture( options.texture )

            gl.enable( gl.BLEND )
            gl.enable( gl.CULL_FACE )
            gl.blendFunc( gl.SRC_ALPHA, gl.ONE )
            gl[ options.depthTest ? 'enable' : 'disable' ]( gl.DEPTH_TEST )

            if ( options.autosize )
              window.addEventListener( 'resize', e => this.resize( e ), false )
            if ( options.mousemove )
              window.addEventListener( 'mousemove', e => this.mousemove( e ), false )

            this.resize()

            this.update = this.update.bind( this )
            this.time = { start: performance.now(), old: performance.now() }
            this.update()

          }

          mousemove( e ) {

            let x = e.pageX / this.width * 2 - 1
            let y = e.pageY / this.height * 2 - 1

            this.uniforms.mousemove = [ x, y ]

          }

          resize( e ) {

            const holder = this.holder
            const canvas = this.canvas
            const gl = this.gl

            const width = this.width = holder.offsetWidth
            const height = this.height = holder.offsetHeight
            const aspect = this.aspect = width / height
            const dpi = this.dpi = devicePixelRatio

            canvas.width = width * dpi
            canvas.height = height * dpi
            canvas.style.width = width + 'px'
            canvas.style.height = height + 'px'

            gl.viewport( 0, 0, width * dpi, height * dpi )
            gl.clearColor( 0, 0, 0, 0 )

            this.uniforms.resolution = [ width, height ]
            this.uniforms.projection = this.setProjection( aspect )

            this.onResize( width, height, dpi )

          }

          setProjection( aspect ) {

            const camera = this.camera

            if ( camera.perspective ) {

              camera.aspect = aspect

              const fovRad = camera.fov * ( Math.PI / 180 )
              const f = Math.tan( Math.PI * 0.5 - 0.5 * fovRad )
              const rangeInv = 1.0 / ( camera.near - camera.far )

              const matrix = [
                f / camera.aspect, 0, 0, 0,
                0, f, 0, 0,
                0, 0, (camera.near + camera.far) * rangeInv, -1,
                0, 0, camera.near * camera.far * rangeInv * 2, 0
              ]

              matrix[ 14 ] += camera.z
              matrix[ 15 ] += camera.z

              return matrix

            } else {

              return [
                2 / this.width, 0, 0, 0,
                0, -2 / this.height, 0, 0,
                0, 0, 1, 0,
                -1, 1, 0, 1,
              ]

            }

          }

          createShader( type, source ) {

            const gl = this.gl
            const shader = gl.createShader( type )

            gl.shaderSource( shader, source )
            gl.compileShader( shader )

            if ( gl.getShaderParameter (shader, gl.COMPILE_STATUS ) ) {

              return shader

            } else {

              console.log( gl.getShaderInfoLog( shader ) )
              gl.deleteShader( shader )

            }

          }

          createProgram( vertex, fragment ) {

            const gl = this.gl

            const vertexShader = this.createShader( gl.VERTEX_SHADER, vertex )
            const fragmentShader = this.createShader( gl.FRAGMENT_SHADER, fragment )

            const program = gl.createProgram()

            gl.attachShader( program, vertexShader )
            gl.attachShader( program, fragmentShader )
            gl.linkProgram( program )

            if ( gl.getProgramParameter( program, gl.LINK_STATUS ) ) {

              gl.useProgram( program )
              this.program = program

            } else {

              console.log( gl.getProgramInfoLog( program ) )
              gl.deleteProgram( program )

            }

          }

          createUniforms( data ) {

            const gl = this.gl
            const uniforms = this.data.uniforms = data
            const values = this.uniforms = {}

            Object.keys( uniforms ).forEach( name => {

              const uniform = uniforms[ name ]

              uniform.location = gl.getUniformLocation( this.program, 'u_' + name )

              Object.defineProperty( values, name, {
                set: value => {

                  uniforms[ name ].value = value
                  this.setUniform( name, value )

                },
                get: () => uniforms[ name ].value
              } )

            } )

          }

          setUniform( name, value ) {

            const gl = this.gl
            const uniform = this.data.uniforms[ name ]

            uniform.value = value

            switch ( uniform.type ) {
              case 'int': {
                gl.uniform1i( uniform.location, value )
                break
              }
              case 'float': {
                gl.uniform1f( uniform.location, value )
                break
              }
              case 'vec2': {
                gl.uniform2f( uniform.location, ...value )
                break
              }
              case 'vec3': {
                gl.uniform3f( uniform.location, ...value )
                break
              }
              case 'vec4': {
                gl.uniform4f( uniform.location, ...value )
                break
              }
              case 'mat2': {
                gl.uniformMatrix2fv( uniform.location, false, value )
                break
              }
              case 'mat3': {
                gl.uniformMatrix3fv( uniform.location, false, value )
                break
              }
              case 'mat4': {
                gl.uniformMatrix4fv( uniform.location, false, value )
                break
              }
            }

            // ivec2       : uniform2i,
            // ivec3       : uniform3i,
            // ivec4       : uniform4i,
            // sampler2D   : uniform1i,
            // samplerCube : uniform1i,
            // bool        : uniform1i,
            // bvec2       : uniform2i,
            // bvec3       : uniform3i,
            // bvec4       : uniform4i,

          }

          updateUniforms() {

            const gl = this.gl
            const uniforms = this.data.uniforms

            Object.keys( uniforms ).forEach( name => {

              const uniform = uniforms[ name ]

              this.uniforms[ name ] = uniform.value

            } )

          }

          createBuffers( data ) {

            const gl = this.gl
            const buffers = this.data.buffers = data
            const values = this.buffers = {}

            Object.keys( buffers ).forEach( name => {

              const buffer = buffers[ name ]

              buffer.buffer = this.createBuffer( 'a_' + name, buffer.size )

              Object.defineProperty( values, name, {
                set: data => {

                  buffers[ name ].data = data
                  this.setBuffer( name, data )

                  if ( name == 'position' )
                    this.count = buffers.position.data.length / 3

                },
                get: () => buffers[ name ].data
              } )

            } )

          }

          createBuffer( name, size ) {

            const gl = this.gl
            const program = this.program

            const index = gl.getAttribLocation( program, name )
            const buffer = gl.createBuffer()

            gl.bindBuffer( gl.ARRAY_BUFFER, buffer )
            gl.enableVertexAttribArray( index )
            gl.vertexAttribPointer( index, size, gl.FLOAT, false, 0, 0 )

            return buffer

          }

          setBuffer( name, data ) {

            const gl = this.gl
            const buffers = this.data.buffers

            if ( name == null && ! gl.bindBuffer( gl.ARRAY_BUFFER, null ) ) return

            gl.bindBuffer( gl.ARRAY_BUFFER, buffers[ name ].buffer )
            gl.bufferData( gl.ARRAY_BUFFER, new Float32Array( data ), gl.STATIC_DRAW )

          }

          updateBuffers() {

            const gl = this.gl
            const buffers = this.buffers

            Object.keys( buffers ).forEach( name =>
              buffers[ name ] = buffer.data
            )

            this.setBuffer( null )

          }

          createTexture( src ) {

            const gl = this.gl
            const texture = gl.createTexture()

            gl.bindTexture( gl.TEXTURE_2D, texture )
            gl.texImage2D( gl.TEXTURE_2D, 0, gl.RGBA, 1, 1, 0, gl.RGBA, gl.UNSIGNED_BYTE, new Uint8Array( [ 0, 0, 0, 0 ] ) )

            this.texture = texture

            if ( src ) {

              this.uniforms.hasTexture = 1
              this.loadTexture( src )

            }

          }

          loadTexture( src ) {

            const gl = this.gl
            const texture = this.texture

            const textureImage = new Image()

            textureImage.onload = () => {

              gl.bindTexture( gl.TEXTURE_2D, texture )

              gl.texImage2D( gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, textureImage )

              gl.texParameteri( gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR )
              gl.texParameteri( gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR )

              gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE)
              gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE)

              // gl.generateMipmap( gl.TEXTURE_2D )

            }

            textureImage.src = src

          }

          update() {

            const gl = this.gl

            const now = performance.now()
            const elapsed = ( now - this.time.start ) / 5000
            const delta = now - this.time.old
            this.time.old = now

            this.uniforms.time = elapsed

            if ( this.count > 0 ) {
              gl.clear( gl.COLORBUFFERBIT )
              gl.drawArrays( gl.POINTS, 0, this.count )
            }

            this.onUpdate( delta )

            requestAnimationFrame( this.update )

          }

        }

        const pointSize = 2.5

        const waves = new ShaderProgram( document.querySelector( '.waves' ), {
          texture: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAb1BMVEUAAAD///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////8v0wLRAAAAJHRSTlMAC/goGvDhmwcExrVjWzrm29TRqqSKenRXVklANSIUE8mRkGpv+HOfAAABCElEQVQ4y4VT13LDMAwLrUHteO+R9f/fWMfO6dLaPeKVEECRxOULWsEGpS9nULDwia2Y+ALqUNbAWeg775zv+sA4/FFRMxt8U2FZFCVWjR/YrH4/H9sarclSKdPMWKzb8VsEeHB3m0shkhVCyNzeXeAQ9Xl4opEieX2QCGnwGbj6GMyjw9t1K0fK9YZunPXeAGsfJtYjwzxaBnozGGorYz0ypK2HzQSYx1y8DgSRo2ewOiyh2QWOEk1Y9OrQV0a8TiBM1a8eMHWYnRMy7CZ4t1CmyRkhSUvP3gRXyHOCLBxNoC3IJv//ZrJ/kxxUHPUB+6jJZZHrpg6GOjnqaOmzp4NDR48OLxn/H27SRQ08S0ZJAAAAAElFTkSuQmCC',
          uniforms: {
            size: { type: 'float', value: pointSize },
            field: { type: 'vec3', value: [ 0, 0, 0 ] },
            speed: { type: 'float', value: 5 },
          },
          vertex: `
    #define M_PI 3.1415926535897932384626433832795

    precision highp float;

    attribute vec4 a_position;
    attribute vec4 a_color;

    uniform float u_time;
    uniform float u_size;
    uniform float u_speed;
    uniform vec3 u_field;
    uniform mat4 u_projection;

    varying vec4 v_color;

    void main() {

      vec3 pos = a_position.xyz;

      pos.y += (
        cos(pos.x / u_field.x * M_PI * 8.0 + u_time * u_speed) +
        sin(pos.z / u_field.z * M_PI * 8.0 + u_time * u_speed)
      ) * u_field.y;

      gl_Position = u_projection * vec4( pos.xyz, a_position.w );
      gl_PointSize = ( u_size / gl_Position.w ) * 100.0;

      v_color = a_color;

    }`,
          fragment: `
    precision highp float;

    uniform sampler2D u_texture;

    varying vec4 v_color;

    void main() {

      gl_FragColor = v_color * texture2D(u_texture, gl_PointCoord);

    }`,
          onResize( w, h, dpi ) {

            const position = [], color = []

            const width = 400 * ( w / h )
            const depth = 400
            const height = 3
            const distance = 5

            for ( let x = 0; x < width; x += distance ) {
              for ( let z = 0; z < depth; z+= distance ) {

                position.push( - width / 2 + x, -30, -depth / 2 + z )
                color.push( 0, 1 - ( x / width ) * 1, 0.5 + x / width * 0.5, z / depth )

              }
            }

            this.uniforms.field = [ width, height, depth ]

            this.buffers.position = position
            this.buffers.color = color

            this.uniforms.size = ( h / 400) * pointSize * dpi

          },
        } )
      },
      openType(item){
        this.$router.push({path: item.path, query: {type: item.name}})
      },
    },
  }
</script>
<style scoped>
  canvas {
    display:block;
  }
  .waves {
    position:absolute;
    left:0;
    top:0;
    right:0;
    bottom:0;
    pointer-events:none
  }
  .home{
    width: 100%;
    height: 100%;
    padding-top:0.62rem;
    overflow: hidden;
    position: relative;
  }
  .home .home-title {
    height: 0.73rem;
    font-size: 0.52rem;
    font-family: PingFangSC-Semibold;
    font-weight: 600;
    color: rgba(183,189,201,1);
    line-height: 0.73rem;
  }
  #showWindow{
    margin:3.20rem  auto 6.75rem;
  }
  .perspective{
    perspective:8.6rem;  /*3d景深*/
  }
  .wrap{
    transform-style:preserve-3d;
    width:3.00rem;
    height:1.66rem;
    margin:0 auto;
    position:relative;
    transform:rotateX(0deg) rotateY(0deg);
  }
  .wrap figure{
    display:block;
    position:absolute;
    transform: rotateY(0deg) translateZ(0px);
    -webkit-transition:all 0.3s;
    -moz-transition:all 0.3s;
    -o-transition:all 0.3s;
    margin:0.10rem 0.2rem;
    padding-bottom: 0.03rem;
    overflow: hidden;
    background:transparent;
    cursor: pointer;
    box-shadow: 0 0 0.02rem #fff; /*水平位移 垂直位移 扩散程度 颜色*/
    border-radius:0.10rem;        /*圆角*/
    /*-webkit-box-reflect:below 5px -webkit-linear-gradient(top,rgba(0,0,0,0) 40%, rgba(0,0,0,.5) 100%); !*倒影 倒影模式 直径*!*/
  }
  .wrap figure img{
    width: 100%;
    height: 100%;
    -webkit-transition:all 0.3s;
    -moz-transition:all 0.3s;
    -o-transition:all 0.3s;
  }
  .wrap figure:hover{
    box-shadow: 0 0 0.02rem aqua
  }
  .wrap figure img:hover{
    -webkit-transform:scale(1.05);
    -moz-transform:scale(1.05);
    -o-transform:scale(1.05);
  }
  .wrap figure p{
    color:aqua;
    font-size: 0.12rem;
    margin-top: -0.05rem;
  }
</style>
