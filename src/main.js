import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

// 引入Vant组件库
import Vant from "vant";
import "vant/lib/index.css";

// 引入封装的请求模块并绑定
import http from "./http";
Vue.prototype.$http = http;

Vue.use(Vant);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
