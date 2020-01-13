import { fetch, post, patch, del } from '../http'

//企业承诺兑现数据列表
export function getEntActualData (params) {
    return fetch('/api/0.1/enterprisePromiseActual/list', params)
}

//企业画像列表
export function getEntFigureData (params) {
    return fetch('/api/0.1/enterpriseFigureRel/list', params)
}

//查询企业列表
export function getEntData (params) {
    return fetch('/api/0.1/enterprise/list', params)
}

//获取分类数据
export function getTypeListData (params) {
    return fetch('/api/0.1/figure/listByType', params)
}

//根据分类获取企业数据
export function seekGetTypeListData (params) {
    return fetch('/api/0.1/enterprise/listByFigure', params)
}

//企业人才承诺兑现数据列表
export function getEntTalentPromiseData (params) {
    return fetch('/api/0.1/enterpriseTalentPromiseActual/detail', params)
}

//按企业类型统计企业数
export function getStatByTypeData (params) {
    return fetch('/api/0.1/enterprise/statByType', params)
}

//按企业承诺兑现指标排序查询列表
export function getListExtraData (params) {
    return fetch('/api/0.1/enterprise/listExtra', params)
}

//按企业承诺兑现指标排序查询列表
export function getPAByParkData (params) {
    return fetch('/api/0.1/enterprise/statPAByPark?year=2019', params)
}

//根据中心查询展厅数据
export function getlistByCenterData (params) {
    return fetch('/api/0.1/exhibitionData/listByCenter?year=2019&center=8', params)
}