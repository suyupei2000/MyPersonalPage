// 通用声明

// Vue
declare module '*.vue' {
  import { DefineComponent } from 'vue'

  const component: DefineComponent<unknown, unknown, any>
  export default component
}
