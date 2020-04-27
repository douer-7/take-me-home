import axios from 'axios'
import store from '../store'


export function request(config) {
    // console.log('base',publicPath);

    const instance = axios.create({
        baseURL: process.env.NODE_ENV === 'production'
            ? '/'
            : 'http://localhost:3000',
        timeout: 5000
    })
    // 在请求或响应被 then 或 catch 处理前拦截它们。
    instance.interceptors.request.use(config => {
        // 在发送请求之前做些什么        
        store.commit('updateLoading', true)
        return config
    }, err => {
        // store.commit('updateLoading', false)
        console.log('失败拦截', err);
    })
    return instance(config)
}