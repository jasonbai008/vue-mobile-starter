# vue2-vant2-px2vw-starter

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

## Tech Stack

- vue 2.x
- vue-cli 5.x
- vuex
- vue-router
- vant 2.x
- less
- axios
- postcss-px-to-viewport

## Features

- 集成了 Vant 2 组件库
- 组件库支持自定义主题色
- 支持 px2vw 单位转换，字号不转换
- 集成了 VConsole，方便调试
- 封装了 axios 请求实例

## Notes

1. 默认设计稿宽度：**750px**，Vant组件库宽度：**375px**，已做适配。
```js
// vue.config.js
// 参考：https://blog.csdn.net/qq_39831708/article/details/125472960
viewportWidth: loaderContext.resourcePath.includes("vant") ? 375 : 750
```
3. Vant 2 官方文档：https://vant-ui.github.io/vant/v2/#/zh-CN/

4. 本项目引入了完整的 Vant2 组件库，可以自己改成按需加载。或删除使用别的组件库

5. 可以参考官网[自定义主题](https://vant-ui.github.io/vant/v2/#/zh-CN/theme)，自定义组件库主题色。