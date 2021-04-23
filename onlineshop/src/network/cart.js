import axios from 'axios';
import {request} from './request';
import { setEncrypt } from './rsa';

const url = 'https://3c6e0267d5e14cbf9c85567c3ba915c6.apig.cn-north-4.huaweicloudapis.com/cart_test';


const instance = axios.create({
    timeout:5000
})

//将商品添加至购物车
export function addCart(data){
    data = JSON.stringify( {data:setEncrypt(JSON.stringify(data) )} )
    return instance.post(url, data, {
        headers: {
            // "Content-Type": "application/x-www-form-urlencoded"
            "Content-Type": "application/json"
        }
    });
}

export function toCart(data){
    data = JSON.stringify( {data:setEncrypt(JSON.stringify(data) )} )
    return instance.post(url, data, {
        headers: {
            // "Content-Type": "application/x-www-form-urlencoded"
            "Content-Type": "application/json"
        }
    });
}

//获取购物车的列表
export function getCart(token){
    return request({
        url: url,
        method: 'get',

        params:{ 
        data:setEncrypt( JSON.stringify({
            type: "getCart",
            token
            }) )
        }
    })
}

//修改购物车
export function modifyCart(data){
    data = JSON.stringify( {data:setEncrypt(JSON.stringify(data) )} )
    return instance.post(url, data, {
        headers: {
            // "Content-Type": "application/x-www-form-urlencoded"
            "Content-Type": "application/json"
        }
    });
}

//选择商品的状态
export function modifyState(data){
    data = JSON.stringify( {data:setEncrypt(JSON.stringify(data) )} )
    return instance.post(url, data, {
        headers: {
            // "Content-Type": "application/x-www-form-urlencoded"
            "Content-Type": "application/json"
        }
    });
}

//全部修改商品的状态
export function modifyStateAll(data){
    data = JSON.stringify( {data:setEncrypt(JSON.stringify(data) )} )
    return instance.post(url, data, {
        headers: {
            // "Content-Type": "application/x-www-form-urlencoded"
            "Content-Type": "application/json"
        }
    });
}

//删除购物车商品
export function deleteCartItem(data){
    data = JSON.stringify( {data:setEncrypt(JSON.stringify(data) )} )
    return instance.post(url, data, {
        headers: {
            // "Content-Type": "application/x-www-form-urlencoded"
            "Content-Type": "application/json"
        }
    });
}

