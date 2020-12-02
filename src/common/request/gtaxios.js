import Vue from 'vue';
import axios from 'axios';

axios.defaults.baseURL = process.env.VUE_APP_BASEURL;
axios.defaults.timeout = 50000;

const FetchSet = new Set(); // 防重复容器
const { CancelToken } = axios; // 取消请求类

/** 连接参数作为防重复的Key */
function joinParams(params) {
  return Object.entries(params).map(([key, val]) => `${key}=${val}`).join('&');
}

/**
 * http request 拦截器
 * 其余设置自行配置
*/
axios.interceptors.request.use((config) => {
  config.headers['Content-Type'] = 'application/json';
  // 排除需要重复的接口 default ****   可根据自行修改
  if (config.url.indexOf('*****') === -1) {
    config.FetchKey = config.url;
    if (config.method === 'post') config.FetchKey += joinParams(config.data);
    if (FetchSet.has(config.FetchKey)) {
      config.cancelToken = new CancelToken((cancel) => {
        console.warn('接口重复，已取消接口"', config.FetchKey, '" 的重复请求');
        cancel('接口重复，已取消接口');
      });
      return config;
    }
    FetchSet.add(config.FetchKey);
  }
  return config;
}, (err) => Promise.reject(err));

/**
 * 根据后端返回的非正常code做统一处理
 */
function responseInterceptor(response) {
  console.log('response', response);
  return Promise.resolve(response);
}

// http response 拦截器
axios.interceptors.response.use((response) => responseInterceptor(response), (error) => {
  console.log('服务器异常', error);
  return Promise.reject(error.response);
});

Vue.prototype.$axios = axios;
