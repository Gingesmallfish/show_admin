import axios from "@/axios.js"

/**
 *  登录接口
 * @param username admin  用户名
 * @param password admin  密码
 * @returns {Promise<axios.AxiosResponse<any>>}
 */
export function login(username, password) {
    return axios.post("/admin/login", {
        username,
        password
    })
}

/**
 * 用户权限
 * @returns {Promise<axios.AxiosResponse<any>>}
 */
export function getinfo() {
    return axios.post("/admin/getinfo")
}


/**
 * 退出
 * @returns {Promise<axios.AxiosResponse<any>>}
 */
export function logout() {
    return axios.post("/admin/logout")
}

/**
 * 修改密码
 * @param data 修改密码参数
 * @returns {Promise<axios.AxiosResponse<any>>}
 */
export function updatepassword(data) {
    return axios.post("/admin/updatepassword",data)
}




