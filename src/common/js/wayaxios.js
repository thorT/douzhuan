import axios from 'axios'
import qs from 'qs'
import vuerouter from '@/router'
import {getCookie} from './cookieAction';
import {STATUS_TO_LOGIN, STATUS_NET_ERROR, BASE_URL, NET_ERROR_MSG} from './config'

/**
 * POST请求  request.post(url,{key:value},false)   //第三个参数表示是否需要token，默认不需要
 * GET请求   request.get(url,{key:value},false)    //第三个参数表示是否需要token，默认不需要
 */
axios.interceptors.request.use(config => {
    return config
}, error => {
    return Promise.reject(error)
});

axios.interceptors.response.use(function (response) {
    let status = response.status;
    if (status === 200) {
        return Promise.resolve(response);
    } else {
        return Promise.reject(response);
    }
});

//与后端约定错误码,401跳登录，
function checkCode(res) {
    if (res.data.status === STATUS_TO_LOGIN) {
        vuerouter.push('/login');
    }
    return res.data;
}

//拼接url
export function param(data) {
    let url = ''
    for (var k in data) {
        let value = data[k] !== undefined ? data[k] : ''
        url += '&' + k + '=' + encodeURIComponent(value)
    }
    return url ? url.substring(1) : ''
}


export default {
    post(url, params, token = false) {
        const para = token ? Object.assign({}, params, {
            token: getCookie('token')
        }) : params;
        return axios({
            method: 'post',
            url: BASE_URL + url,
            data: qs.stringify(para),
            timeout: 30000,
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
            }
        }).then(checkCode).catch((err)=> {
            return {
                status: STATUS_NET_ERROR,
                msg: NET_ERROR_MSG
            }
        });
    },
    get(url, params, token = false) {
        params = token ? Object.assign({}, params, {
            token: getCookie('token')
        }) : params;
        url += (url.indexOf('?') < 0 ? '?' : '&') + param(params);
        return axios({
            method: 'get',
            url: BASE_URL + url,
            timeout: 30000,
            headers: {}
        }).then(checkCode).catch((err)=> {
            return {
                status: STATUS_NET_ERROR,
                msg: NET_ERROR_MSG
            }
        });
    }
}