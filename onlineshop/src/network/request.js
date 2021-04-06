import axios from 'axios';

export function request(config) {
    const instance = axios.create({
        timeout: 5000,
    });

    //请求拦截
    instance.interceptors.request.use(config => {
        //如果接口需要认证才能访问，需要在这里统一设置
        return config;
    }, err => {

    });

    //响应拦截
    instance.interceptors.response.use( res => {
        return res.data;
    }, err => {

    });

    return instance(config);
}