import {request} from './request';

const url = 'http://127.0.0.1:8000/vue/';

export function Search(data) {
    return request({
        url: url,
        method: 'get',

        params: {
            type: "Search",
            data,
        }
    })
}