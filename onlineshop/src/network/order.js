import axios from 'axios';
import {request} from './request';

const url = 'http://127.0.0.1:8000/vue/';


const instance = axios.create({
    timeout:5000
})

//创建订单
export function createOrder(data){

    data = JSON.stringify(data)
    return instance.post(url, data, {
        headers: {
            // "Content-Type": "application/x-www-form-urlencoded"
            "Content-Type": "application/json"
        }
    });
}

//获取订单预览
export function getOrderPre(token){
    return request({
        url: url,
        method: 'get',

        params: {
            type: "getOrderPre",
            token,
        }
    })
} 

//获取订单列表
export function getOrderList(token, status){
    return request({
        url: url,
        method: 'get',

        params: {
            type: "getOrderList",
            token,
            status, 
        }
    })
}

//订单详情
export function getOrderDetail(order_id, addr_id){
    return request({
        url: url,
        method: 'get',

        params: {
            type: "getOrderDetail",
            order_id,
            addr_id
        }
    })
}

//订单支付,获取二维码
export function payOrder(order_id){
    return request({
        url: url,
        method: 'get',

        params: {
            type: "payOrder",
            order_id,
        }
    })
}

export function cancelOrder(order_id){
    return request({
        url: url,
        method: 'get',

        params: {
            type: "cancelOrder",
            order_id,
        }
    })
}

//确认订单
export function confirmOrder(order_id){
    return request({
        url: url,
        method: 'get',

        params: {
            type: "confirmOrder",
            order_id,
        }
    })
}

export function deleteOrder(order_id){
    return request({
        url: url,
        method: 'get',

        params: {
            type: "deleteOrder",
            order_id,
        }
    })
}

