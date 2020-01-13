import { fetch, post, patch, del } from '../http'

//获取要素数据
export function getFactorsData (params) {
    return fetch('/api/0.1/productionFactors/list', params)
}

//获取图表数据
export function getChartListData (params) {
    return fetch('/api/0.1/productionFactorsData/countFactorDataByParkInYear', params)
}

//根据中心查询展厅数据
export function getlistByCenterData (params) {
    return fetch('/api/0.1/exhibitionData/listByCenter?year=2019&center=1', params)
}

//展厅资源接口
export function getResourcesData (params) {
    return fetch('/api/0.1/exhibitionResources/list', params)
}

//获取绿色发展展厅要素
export function getElementsData (params) {
    return fetch('/api/0.1/productionFactors/list', params)
}

//获取园区数据
export function getPAByParkData (params) {
    return fetch('/api/0.1/enterprise/statPAByPark?year=2019', params)
}

//获取监控
export function getCamera (params) {
    return fetch('/api/0.1/camera/list', params)
}

//获取污水处理点
export function getWSPoint (params) {
    return fetch('/api/0.1/sewageTreatmentPoint/list', params)
}