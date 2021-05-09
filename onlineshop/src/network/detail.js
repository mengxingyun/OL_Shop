import {request} from './request';
import { setEncrypt } from './rsa';

const url = 'https://3c6e0267d5e14cbf9c85567c3ba915c6.apig.cn-north-4.huaweicloudapis.com/detail_handler';

export function getDetail(id) {
    return request({
        url: url,
        method: 'get',

        params: {
            type: "getDetail",
            id,
            }
    })
}