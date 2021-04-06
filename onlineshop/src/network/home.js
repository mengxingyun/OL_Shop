import {request} from './request';

export function getHomeAllData(){
    return request({
        url: 'https://a08fcdddeeee4c02a38700f35091372c.apig.cn-south-1.huaweicloudapis.com/test',
        method: 'get',
        params: {
            type: "getcommend"
        }
        
    })
}