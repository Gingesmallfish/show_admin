import axios from "@/axios.js"

/**
 * 指定分类下的图片列表
 * @returns 
 */
export function getImageList(id, page = 1) {
  return axios.get(`/admin/image_class/${id}/image/${page}`)
}

/**
 *  修改图片
 * @param {*} id 
 * @param {*} name
 * @returns 
 */
export function updateImage(id, name) {
  return axios.post(`/admin/image/${id}`, { name })
}


/**
 * 删除图片
 * @param {*} ids 
 * @returns 
 */
export function deleteImage(ids) {
  return axios.post(`/admin/image/delete_all`, { ids })
}

/**
 * 上传图片接口
 */
export const uploadImageAction = "/api/admin/image/upload"