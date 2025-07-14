import { createApp } from 'vue'

import { registerMicroApps, start } from 'qiankun'
import router from './router'
import App from './App.vue'

import '@/style/root.css'
import '@/style/reset.less'
import '@/style/index.less'
import '@/style/tailwind.css'

registerMicroApps(
  [
    // {
    //   name: 'syp-game-tuixiangzi', // 必须与微应用注册名字相同
    //   entry: 'http://localhost:5500', // 入口路径，开发时为微应用所启本地服务，上线时为微应用线上路径
    //   container: '#syp-play-tuixiangzi', // 微应用挂载的节点
    //   activeRule: '/projects/detail', // 当访问路由为 ?? 时加载微应用
    //   props: {
    //     msg: '我是来自主应用的值-vue', // 主应用向微应用传递参数
    //   },
    // },
    {
      name: 'syp-low-code-platform', // 必须与微应用注册名字相同
      entry: 'http://localhost:3003', // 入口路径，开发时为微应用所启本地服务，上线时为微应用线上路径
      container: '#syp-low-code-platform', // 微应用挂载的节点
      activeRule: '/projects/detail', // 当访问路由为 ?? 时加载微应用
      props: {
        // msg: '低代码平台', // 主应用向微应用传递参数
      },
    },
    //   {
    //     name: 'react-app',
    //     entry: 'http://127.0.0.1:5175',
    //     container: '#react-app-container',
    //     activeRule: '/micro-react',
    //     props: {
    //       msg: '我是来自主应用的值-react',
    //     },
    //   },
  ],
  {
    // 生命周期钩子函数
    beforeLoad: (app) => {
      console.log('beforeLoad', app)
      return Promise.resolve()
    },
    beforeMount: (app) => {
      console.log('beforeMount ', app)
      return Promise.resolve()
    },
    afterMount: (app) => {
      console.log('afterMount', app)
      return Promise.resolve()
    },
    beforeUnmount: (app) => {
      console.log('beforeUnmount ', app)
      return Promise.resolve()
    },
    afterUnmount: (app) => {
      console.log('afterUnmount', app)
      return Promise.resolve()
    },
  },
)

// step3 设置默认进入微应用
// setDefaultMountApp('/vue3')

start() // 启动微应用

const app = createApp(App)
app.use(router).mount('#app')
