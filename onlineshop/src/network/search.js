import {request} from './request';

const url = 'https://3c6e0267d5e14cbf9c85567c3ba915c6.apig.cn-north-4.huaweicloudapis.com/search_test';

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
