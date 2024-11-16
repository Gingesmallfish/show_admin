import axios from "@/axios.js"

/**
 *   渲染列表 
 * @param {*} page 列表参数
 * @returns 
 */
export function getImageClassList(page) {
    return axios.get("/admin/image_class/" + page)
}

/**
 * 新增图库列表 
 * @param {*} data  参数 
 * @returns 
 */
export function createImageClass(data) {
    return axios.post("/admin/image_class", data)
}
/**
 * 修改列表 
 * @param {*} data 参数
 * @returns 
 */
export function updateImageClass(id, data) {
    return axios.post("/admin/image_class/" + id, data)
}

/**
 * 删除 列表
 * @param {*}  id 参数
 * @returns 
 */
export function deleteImageClass(id) {
    return axios.post(`/admin/image_class/${id}/delete`)
}