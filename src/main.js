import Vue from 'vue';
import VConsole from 'vconsole';
import {
  Dialog, Cell, NavBar, Icon, Button, Popup,
  Video, ActionSheet, TextInput, Swiper, Calendar, Noticebar,
  Picker, Rate, Steps,
} from 'zoom-intro';
import Framework from 'greentown-framework';
import jssdk from 'gtjssdk';
import routerSettings from './routerSettings';
import storeSettings from './storeSettings';
import App from './App.vue';
import './common/request/gtaxios';
import './utils/rem';
import routerWrapper from './common/router';
import './common/css/base.css';

Dialog.install(Vue);
Cell.install(Vue);
NavBar.install(Vue);
Icon.install(Vue);
Button.install(Vue);
Popup.install(Vue);
Video.install(Vue);
TextInput.install(Vue);
ActionSheet.install(Vue);
Calendar.install(Vue);
Swiper.install(Vue);
Noticebar.install(Vue);
Steps.Steps.install(Vue);
Steps.Step.install(Vue);
Picker.install(Vue);
Rate.install(Vue);
const framework = new Framework(
  routerSettings,
  storeSettings,
  jssdk,
  App,
);

async function start() {
  try {
    await jssdk.init();
    window.isWeb = false;
    if ($jssdk('app.debug')) {
      // eslint-disable-next-line no-new
      new VConsole();
    }
    $register('event.button.back', () => {
      Vue.prototype.$framework.router.go(-1);
    });
  } catch (e) {
    window.isWeb = true;
  }
  Vue.prototype.statusBarHeight = `${$jssdk('padding.top')}px`;
  Vue.prototype.bottomBarHeight = `${$jssdk('padding.bottom')}px`;
  if (/iPad|iPhone|iPod/.test(navigator.userAgent) && Vue.prototype.statusBarHeight === '44px') {
    localStorage.setItem('iPhoneX-station', 'mobile-iPhone10');
  }
  await routerWrapper.init();
  framework.start();
}
start();
