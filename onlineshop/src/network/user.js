import axios from 'axios';
import { setEncrypt } from './rsa';

const url = 'https://3c6e0267d5e14cbf9c85567c3ba915c6.apig.cn-north-4.huaweicloudapis.com/login_test';

const instance = axios.create({
    timeout:5000
})

// export function register(data){
//     return request({
//         url,
//         method: 'post',
//         headers: {
//             "Content-Type": "application/x-www-form-urlencoded"
//         },
//         data
//     })
// }

export function register(data){
    data = JSON.stringify( {data:setEncrypt(JSON.stringify(data) )} )
    return instance.post(url, data, {
        headers: {
            // "Content-Type": "application/x-www-form-urlencoded"
            "Content-Type": "application/json"
        }
    });
}

export function login(data){
    data = JSON.stringify( {data:setEncrypt(JSON.stringify(data) )} )
    console.log( data )
    return instance.post(url, data, {
        headers: {
            // "Content-Type": "application/x-www-form-urlencoded"
            "Content-Type": "application/json"
        }
    });
}

export function logout(data){
    data = JSON.stringify( {data:setEncrypt(JSON.stringify(data) )} )
    return instance.post(url, data, {
        headers: {
            // "Content-Type": "application/x-www-form-urlencoded"
            "Content-Type": "application/json"
        }
    });
}

export function getUserData(token){
    return request({
        url: url,
        method: 'get',

        params: {
        data:setEncrypt(JSON.stringify( {
            type: "getUserData",
            token, 
            } ))
        }
    })
}