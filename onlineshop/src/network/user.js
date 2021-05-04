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
    data['username'] = setEncrypt( data['username'] )
    data['pass'] = setEncrypt( data['pass'] )
    data['checkPass'] = setEncrypt( data['checkPass'] )
    data = JSON.stringify(data)
    console.log( "register:"+data )
    return instance.post(url, data, {
        headers: {
            // "Content-Type": "application/x-www-form-urlencoded"
            "Content-Type": "application/json"
        }
    });
}

export function login(data){
    var tempdata = JSON.parse( JSON.stringify(data) )
    tempdata['username']= setEncrypt( tempdata['username'] )
    tempdata['pass'] = setEncrypt( tempdata['pass'])
    tempdata = JSON.stringify(tempdata)
    console.log( "login"+tempdata )
    return instance.post(url, tempdata, {
        headers: {
            // "Content-Type": "application/x-www-form-urlencoded"
            "Content-Type": "application/json"
        }
    });
}

export function logout(data){
    data['token'] = setEncrypt( data['token'] )
    data = JSON.stringify(data)
    console.log( "logout:"+data )
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
            type: "getUserData",
            token:setEncrypt( token ), 
            }
    })
}