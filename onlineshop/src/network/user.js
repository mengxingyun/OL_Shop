import axios from 'axios';
const url = 'http://127.0.0.1:8000/vue/';

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
    data = JSON.stringify(data)
    return instance.post(url, data, {
        headers: {
            // "Content-Type": "application/x-www-form-urlencoded"
            "Content-Type": "application/json"
        }
    });
}

export function login(data){
    data = JSON.stringify(data)
    return instance.post(url, data, {
        headers: {
            // "Content-Type": "application/x-www-form-urlencoded"
            "Content-Type": "application/json"
        }
    });
}

export function logout(data){
    data = JSON.stringify(data)
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
            token, 
        }
    })
}