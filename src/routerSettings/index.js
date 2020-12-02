// 路由懒加载，打包在同个异步块 (chunk) 中
const home = () => import(/* webpackChunkName: "home" */ '../pages/home/index.vue');
const mine = () => import(/* webpackChunkName: "home" */ '../pages/mine/index.vue');

export default {
  routes: [
    {
      path: '/',
      component: home,
      meta: {
        title: '小程序组件库',
      },
    },
    {
      path: '/mine',
      component: mine,
      meta: {
        title: '我的',
      },
    },
  ],
};
