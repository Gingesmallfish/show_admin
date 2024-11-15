import axios from "axios";
import {toast} from "@/composables/util.js";
import {getToken} from "@/composables/auth.js";
import store from "@/store/index.js";
const service = axios.create({
    baseURL: "/api",
})

// 添加请求拦截器
service.interceptors.request.use(function (config) {

    // 往header 头自动添加token
    const token = getToken();
    if (token) {
        config.headers["token"] = token
    }
    // 在发送请求之前做些什么
    return config;
}, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
});

// 添加响应拦截器
service.interceptors.response.use(function (response) {
    // 2xx 范围内的状态码都会触发该函数。
    // 对响应数据做点什么
    return response.data.data;
}, function (error) {
    // 超出 2xx 范围的状态码都会触发该函数。
    const msg = error.response.data.msg || "请求失败"

    if (msg === "非法token，请先登录！") {
        store.dispatch("logout").then((() => location.reload()))
    }

    toast(msg, "error");

    return Promise.reject(error);
});

export default service;

