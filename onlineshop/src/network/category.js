import {request} from './request';

const url = 'http://127.0.0.1:8000/vue/';

export function getCategoryData(cate, page){
    return request({
        url: url,
        method: 'get',

        params: {
            type: "getCategoryData",
            cate, // 请求数据的类别,
            page, //第几页数据
        }
    })
}
