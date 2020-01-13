import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'*',
      redirect:'/index'
    },
	  {
		  path: '/index',
		  name: '首页',
		  meta: { keepAlive: true },
		  component: () => import ('@/view/home/index.vue')
	  },
    {
      path: '/old-index',
      name: '旧首页',
      component: () => import ('@/view/home/old-index.vue')
    },
    {
      path: '/detect',
      name: '军品质检',
      component: () => import('@/view/detect/detect.vue')
    },
    {
      path: '/achievement',
      name: '成果转化中心',
	    meta: { keepAlive: true },
      component: () => import('@/view/achievement/achievement.vue')
    },
    {
      path:'/health',
      name:'健康服务中心',
      component: () => import('@/view/health/health.vue')
    },
    {
      path: '/entAdmin',
      name: '企业管理中心',
      component: () => import ('@/view/entAdmin/entAdmin.vue')
    },
    {
      path: '/proFactors',
      name: '绿色发展中心',
      component: () => import ('@/view/productionFactors/productionFactors.vue')
    },
    {
      path:'/entService',
      name:'企业服务中心',
      component: () => import('@/view/enterprise-service/enterprise-service.vue')
    },
    {
      path:'/course',
      name:'培训服务中心',
      component: () => import('@/view/course/course.vue')
    },
    {
      path:'/supService',
      name:'科研配套中心',
      component: () => import('@/view/supportService/support-service.vue')
    },
    {
      path:'/video',
      name:'视频资源中心',
      component: () => import('@/view/video/video.vue')
    },
    {
      path:'/gis',
      name:'gis',
      component:()=> import('@/view/3dGis/3d-gis.vue')
    }
  ]
})
