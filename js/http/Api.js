/**
 * @author liweijie
 * create on 2018/5/15.
 * email:liweijie@aiyappp.com
 * desc:
 * lastModify:
 */

export const PAGE_COUNT = 20;//每页数量
const UID = "uid";
const TOKEN = "token";
const USER_NAME = "user_name";
const PASSWORD = "password";

const HEADER = {
    "Content-Type": "application/json;charset=UTF-8",
    "Connection": "keep-alive",
    "Accept": "application/json"
};

//登陆
function _body(password,username) {
    const params = {};
    params[USER_NAME] = username;
    params[PASSWORD] = password;
    ....
    return _post("loginurl",params)
}

function _body(method, params) {
    const _params = JSON.stringify(params);
    console.log(("http=> params = " + _params));
    return {method: method, headers: HEADER, body: _params}
}


function _get(url, params) {
    return _request(url, _body("GET", params));
}


function _post(url, params) {
    return _request(url, _body("POST", params))
}

//发起请求
function _request(url, params, timeout) {
    console.log(("http=> url = " + url));
    const request = fetch(url, params)
        .then(result => {
            if (result.ok) {
                console.log(("http=> respond = " + result.json()));
                return result.json();
            } else {
                return Promise.reject({code: -1, message: "请求失败"});
            }

        })
        .then(value => {
            //可以进行进一步刷选
            return value;
        })
        .catch(error => {
            return Promise.reject(error);
        });
    return _wrapRequest(request, timeout)
}

//设置超时,默认10000
function _wrapRequest(promise, timeout = 10000) {
    return Promise.race([promise, new Promise(function (resolve, reject) {
        setTimeout(() => {
                reject({code: -1, message: "请求超时"});
            },
            timeout);
    })]).catch(e => {
        return Promise.reject(e)
    })
}
