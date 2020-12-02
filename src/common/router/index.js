import Vue from 'vue';

function isAppAddress(path) {
  return /^(\/)?[a-zA-Z0-9]+:\/\//.test(path);
}

function setGuard() {
  let toUrl;
  async function beforeGuard(to, from, next) {
    // 跳出到其他模块的判断
    if (isAppAddress(to.fullPath)) {
      //
    } else if (to.query.toUrl) {
      // 路径中包含toUrl
      toUrl = to.query.toUrl;
      const query = _.clone(to.query);
      delete query.toUrl;
      next({ path: to.path, query });
    } else {
      next();
    }
  }
  Vue.prototype.$framework.router.beforeEach(beforeGuard);
  Vue.prototype.$framework.router.afterEach(() => {
    if (toUrl) {
      setTimeout(() => {
        const toPath = toUrl;
        toUrl = undefined;
        Vue.prototype.$framework.router.push(toPath);
      }, 300);
    }
  });
}

async function init() {
  setGuard();
  // 处理启动地址
  const currentPath = window.location.hash.replace(/^#/, '');
  const resolveResult = Vue.prototype.$framework.router.resolve(currentPath);
  if (!resolveResult.resolved) {
    console.error('未匹配到路由');
  }
}

export default {
  async init() {
    return init();
  },
};
