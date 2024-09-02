import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import VConsole from "vconsole";

// 引入完整的Vant2组件库
import Vant from "vant";
// import "vant/lib/index.css";
// 引入全部样式
import 'vant/lib/index.less';

// 引入封装的请求模块并绑定
import http from "./http";
Vue.prototype.$http = http;

// 初始化 VConsole
if (process.env.NODE_ENV === "development") {
  const vConsole = new VConsole();
}

Vue.use(Vant);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
