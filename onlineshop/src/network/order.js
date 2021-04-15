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

//订单支付,获取二维码
export function payOrder(order){
    return request({
        url: url,
        method: 'get',

        params: {
            type: "payOrder",
            token,
            id
        }
    })
}

//订单状态
export function payOrderStatus(order){

}

//获取订单列表
export function getOrderList(){

}

//订单详情
export function getOrderDetail(){

}

//确认订单
export function confirmOrder(){

}
