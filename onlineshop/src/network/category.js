import {request} from './request';
import { setEncrypt } from './rsa';

const url = 'https://3c6e0267d5e14cbf9c85567c3ba915c6.apig.cn-north-4.huaweicloudapis.com/cate_test';

export function getCategoryData(cate, page){
    return request({
        url: url,
        method: 'get',

        params:{ 
        data:setEncrypt( JSON.stringify({
            type: "getCategoryData",
            cate, // 请求数据的类别,
            page, //第几页数据
            }))
        }
    })
}
