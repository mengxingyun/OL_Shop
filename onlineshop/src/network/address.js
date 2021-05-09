import {request} from './request';
import axios from 'axios';
import { setEncrypt } from './rsa';

const url = 'https://3c6e0267d5e14cbf9c85567c3ba915c6.apig.cn-north-4.huaweicloudapis.com/address_handler';

const instance = axios.create({
    timeout:5000
})

//添加地址
export function addAddress(data){
    data['token'] = setEncrypt( data['token'] )
    data = JSON.stringify(data)
    console.log( "addaddress:"+data )
    return instance.post(url, data, {
        headers: {
            // "Content-Type": "application/x-www-form-urlencoded"
            "Content-Type": "application/json"
        }
    });
}

//编辑地址
export function editAddress(data){
    data['token'] = setEncrypt( data['token'] )
    data = JSON.stringify(data)
    console.log( "editaddress:"+data )
    return instance.post(url, data, {
        headers: {
            // "Content-Type": "application/x-www-form-urlencoded"
            "Content-Type": "application/json"
        }
    });
}

//删除地址
export function deleteAddress(data){
    data['token'] = setEncrypt( data['token'] )
    data = JSON.stringify(data)
    console.log( "editaddress:"+data )
    return instance.post(url, data, {
        headers: {
            // "Content-Type": "application/x-www-form-urlencoded"
            "Content-Type": "application/json"
        }
    });
}

//获取地址列表
export function getAddressList(token){
    //console.log( "getAddressList:"+typeof(token) )
    return request({
        url: url,
        method: 'get',

        params:{
            type: "getAddressList",
            "token":setEncrypt(token)
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
            token:setEncrypt( token ),
            id
           }
    })
}

