import axios from 'axios';
import {request} from './request';
import { setEncrypt } from './rsa';

const url = 'https://3c6e0267d5e14cbf9c85567c3ba915c6.apig.cn-north-4.huaweicloudapis.com/order_test';


const instance = axios.create({
    timeout:5000
})

//创建订单
export function createOrder(data){

    data = JSON.stringify( {data:setEncrypt(JSON.stringify(data) )} )
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

        params:{ 
        data:setEncrypt( JSON.stringify({
            type: "getOrderPre",
            token,
            }))
        }
    })
} 

//获取订单列表
export function getOrderList(token, status){
    return request({
        url: url,
        method: 'get',

        params:{ 
        data:setEncrypt( JSON.stringify( {
            type: "getOrderList",
            token,
            status, 
            } ))
        }
    })
}

//订单详情
export function getOrderDetail(order_id, addr_id){
    return request({
        url: url,
        method: 'get',

        params:{
        data:setEncrypt( JSON.stringify({
            type: "getOrderDetail",
            order_id,
            addr_id
            } ))
        }
    })
}

//订单支付,获取二维码
export function payOrder(order_id){
    return request({
        url: url,
        method: 'get',

        params:{ 
        data:setEncrypt( JSON.stringify( {
            type: "payOrder",
            order_id,
            }))
        }
    })
}

export function cancelOrder(order_id){
    return request({
        url: url,
        method: 'get',

        params:{
        data:setEncrypt( JSON.stringify( {
            type: "cancelOrder",
            order_id,
            } ))
        }
    })
}

//确认订单
export function confirmOrder(order_id){
    return request({
        url: url,
        method: 'get',

        params:{
        data:setEncrypt(JSON.stringify( {
            type: "confirmOrder",
            order_id,
            } ))
        }
    })
}

export function deleteOrder(order_id){
    return request({
        url: url,
        method: 'get',

        params:{
        data:setEncrypt( JSON.stringify( {
            type: "deleteOrder",
            order_id,
            } ))
        }
    })
}

