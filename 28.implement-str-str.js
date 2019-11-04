import Taro from '@tarojs/taro';
import querystring from 'querystring';
import * as storageKeys from '@common/storageConst';
import login from '@utils/login';

const { request } = Taro;

let __TEST__ = true;
let queryToken;
if (process.env.TARO_ENV === 'h5') {
  if (window.location.host === 'static.ccrgt.com') {
    __TEST__ = false;
  }
  const query = window.location.hash.split('?')[1] || window.location.search.replace('?', '');
  queryToken = querystring.parse(query).token;
  const channel = querystring.parse(query).channel;
  localStorage.setItem(storageKeys.CHANNEL_ID_KEY, channel);
}

const handleRes = (res, requestParams) => {
  const { method } = requestParams;
  if (method === 'POST') {
    //返回解析后的数据
    if (res.data.code === 0) {
      return res.data.data;
    } else {
      //统一处理错误,或者返回 reject
      return Promise.reject(res.data);
    }
  } else {
    // 普通情况直接返回
    return res;
  }
};

const interceptor = function(chain) {
  const requestParams = chain.requestParams;

  /**
   * 忽略这个接口不做token异常判断
   * isVerifyToken 是否判断token异常
   */
  let isVerifyToken = true;
  if (
    requestParams.url ===
      ' https://t-clcarhailing.ccrgt.com/crgt-test/carhailing/cgchannel/order/unfinished' ||
    requestParams.url ===
      ' https://clcarhailing.ccrgt.com/crgt/carhailing/cgchannel/order/unfinished'
  ) {
    isVerifyToken = false;
  }

  return chain.proceed(requestParams).then(res => {
    if ((res.data.code === 14001 || res.data.code === 14002) && isVerifyToken) {
      return login().then(() =>
        chain.proceed(requestParams).then(res1 => handleRes(res1, requestParams))
      );
    } else {
      return handleRes(res, requestParams);
    }
  });
};

Taro.addInterceptor(interceptor);

const commonParam = () => ({
  isSign: '0',
  cguid: '',
  sign: '',
  timeStamp: +new Date(),
  token: localStorage.getItem(storageKeys.TOKEN_KEY) || queryToken
});

export const generator = URLS => {
  const api = {};
  const generatorUrl = key => {
    const { method, url, mockUrl, mockMethod } = URLS[key];
    const result = {
      method: __TEST__ ? mockMethod || 'get' : method,
      url: __TEST__ ? mockUrl : url
    };
    return result;
  };

  // api.getUrl = apiName => generatorUrl(apiName).url

  Object.keys(URLS).forEach(item => {
    let { method, url } = generatorUrl(item);
    let header = { 'content-type': 'application/json' };

    switch (String(method).toUpperCase()) {
      case 'POST':
        api[item] = async (data, opt) =>
          await request({
            header,
            method: 'POST',
            url,
            data: Object.assign(data || {}, commonParam()),
            ...opt
          });
        break;
      case 'GET':
        api[item] = async (data, opt) => (await request({ url, data, ...opt })).data;
        break;
      case 'DELETE':
        api[item] = async data => (await request({ method: 'DELETE', url, data })).data;
        break;
      case 'PUT':
        api[item] = async data => (await request({ method: 'PUT', url, data })).data;
        break;
      default:
        api[item] = async data => (await request({ url, data })).data;
    }
  });
  return api;
};
