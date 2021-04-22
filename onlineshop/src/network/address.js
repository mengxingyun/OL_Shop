import {request} from './request';
import axios from 'axios';

const url = 'https://3c6e0267d5e14cbf9c85567c3ba915c6.apig.cn-north-4.huaweicloudapis.com/address_test';

const instance = axios.create({
    timeout:5000
})

//添加地址
export function addAddress(data){
    data = JSON.stringify(data)
    return instance.post(url, data, {
        headers: {
            // "Content-Type": "application/x-www-form-urlencoded"
            "Content-Type": "application/json"
        }
    });
}

//编辑地址
export function editAddress(data){
    data = JSON.stringify(data)
    return instance.post(url, data, {
        headers: {
            // "Content-Type": "application/x-www-form-urlencoded"
            "Content-Type": "application/json"
        }
    });
}

//删除地址
export function deleteAddress(data){
    data = JSON.stringify(data)
    return instance.post(url, data, {
        headers: {
            // "Content-Type": "application/x-www-form-urlencoded"
            "Content-Type": "application/json"
        }
    });
}

//获取地址列表
export function getAddressList(token){
    return request({
        url: url,
        method: 'get',

        params: {
            type: "getAddressList",
            token
        }
    })
}

//获取地址详情
export function getAddressDetail(token, id){
    return request({
        url: url,
        method: 'get',

        params: {
            type: "getAddressDetail",
            token,
            id
        }
    })
}

