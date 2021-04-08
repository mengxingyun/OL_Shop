import {request} from './request';

const url = 'http://127.0.0.1:8000/vue/';

export function getHomeHotData(){
    return request({
        url: url,
        method: 'get',

        params: {
            type: "getHomeHotData"
        }
        
    })
}

export function getHomeRecommendData(page){
    return request({
        url: url,
        method: 'get',
        params: {
            type: "getHomeRecommendData",
            page
        }
    })
}