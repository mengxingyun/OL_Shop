import {request} from './request';
import {setEncrypt} from './rsa'

const url = 'https://3c6e0267d5e14cbf9c85567c3ba915c6.apig.cn-north-4.huaweicloudapis.com/home_handler';

export function getHomeHotData(){
    return request({
        url: url,
        method: 'get',

        params:
            {
            type: "getHomeHotData"
            }
        
    })
}

export function getHomeRecommendData(page){
    return request({
        url: url,
        method: 'get',
        params:
            {
            type: "getHomeRecommendData",
            page
            }
    })
}