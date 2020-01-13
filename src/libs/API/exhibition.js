import { fetch, post, patch, del } from '../http'

/**
*获取展厅数据
* 参数对象params
 * 对象可包含字段year(年,若无则传所有年的数据)、center（中心:1-绿色,2-成果,3-科研,4-质检,5-健康,6-培训,7-服务,8-管理,必须）
* */
export function findExhibitionData (params) {
  return fetch('/api/0.1/exhibitionData/listByCenter', params)
}

/**
 * 获取展厅资源
 * 参数对象params
 * 对象可包含字段moduleId（所属模块id， 1绿色发展中心 2成果转化中心 3科研配套服务中心 4质检认证中心 5健康体检中心 6企业培训中心 7企业服务中心 8企业管理中心）
 * 资源类型type（1-图片，2-视频）,objectName所属控件名称
 * **/
export function findExhibitionResourcesData (params) {
  return fetch('/api/0.1/exhibitionResources/list', params)
}

/**
 * 获取专利信息
 * **/
export function findPatentData (params) {
  return fetch('/api/0.1/patentSupply/list', params)
}
//质检申请数
export function getDetectApply (params) {
	return fetch('/api/0.1/detectApply/countByMonthAndPark', params)
}


