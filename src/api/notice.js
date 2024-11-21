import axios from "@/axios.js"

/**
 *  功能列表
 * @param {*} page 参数 
 * @returns 
 */
export function getNoticeList(page) {
    return axios.get(`/admin/notice/${page}`)
}

/**
 *  新增数据
 * @param {*} data 参数 
 * @returns 
 */
export function createNotice(data) {
    return axios.post(`/admin/notice`, data)
}

/**
 * 修改公告接口
 * @param {*} id  
 * @param {*} data 
 * @returns 
 */
export function updateNotice(id, data) {
    return axios.post(`/admin/notice/` + id, data)
}

/**
 *  删除公共接口
 * @param {*} id 参数
 * @returns 
 */
export function deleteNotice(id) {
    return axios.post(`/admin/notice/${id}/delete`)
}