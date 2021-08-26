import { AxiosStatic } from 'axios'

declare module '@vue/runtime-core' {
  export interface ComponentCustomProperties {
    $axios: AxiosStatic
  }
  export interface App {
    $axios: AxiosStatic
  }
}

declare module 'vue/types/vue' {
  interface Vue {
    $axios: AxiosStatic
  }
  interface VueConstructor {
    $axios: string
  }
}
declare function VueAxios(vue: App, axios: AxiosStatic)
export default VueAxios
