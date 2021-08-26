# Vue Axios 
[![npm version](https://img.shields.io/npm/v/@hotrungnhan/vue-axios.svg?style=flat-square)](https://www.npmjs.org/package/@hotrungnhan/vue-axios)
[![install size](https://packagephobia.com/badge?p=@hotrungnhan/vue-axios)](https://packagephobia.com/result?p=@hotrungnhan/vue-axios)
[![License](https://img.shields.io/npm/l/@hotrungnhan/vue-axios.svg)](https://www.npmjs.com/package/@hotrungnhan/vue-axios)

Imspire from [imcvampire/vue-axios](https://www.npmjs.com/package/vue-axios) if you ever use him package , both is very similar
but mine use esm, provide you smaller size, best clean build ever.
## Key feature
* Vue inject built-in for composition api (only vue 3)
## Support matrix

| VueJS \ VueAxios | 1.x      | 
| ---------------- | -------- | 
| 1.x              | &#10004; | 
| 2.x              | &#10004; | 
| 3.x              | &#10004; | 
## installation
```sh
npm install axios @hotrungnhan/vue-axios
```
With yarn
```sh
yarn install  axios @hotrungnhan/vue-axios
```
import in Vue 2
```js
Vue.use(VueAxios, axios)
```
then import Vue 2
```js
const app = Vue.createApp(...).use(VueAxios, axios)
or
app.use(VueAxios, axios)
```
## Usage:

### Vue 2
This wrapper bind axios to Vue or this if you're using single file component.
Option API
```js
this.$axios.get(api).then((response) => {
  console.log(response.data)
})
Vue.$axios.get(api).then((response) => {
  console.log(response.data)
})
```
### Vue 3
similar to Vue 2 by using Option API.
```js
// App.vue
export default {
  name: 'App',
  methods: {
    getList() {
      this.$axios.get(api).then((response) => {
        console.log(response.data)
      })
      })
    }
  }
}
```
#### inject - composition api
```js
import {inject} from "vue"
export default {
  name: 'App',
  setup() {
      const axios= inject("$axios")
      axios.get(api).then((response) => {
        console.log(response.data)
      })
  }
}
``` 
Bonus : for who dont want you inject due to unsupported intellisense (but i thoght inject is best way in vue 3) that is use getCurrentInstance API.
```js
import {getCurrentInstance} from "vue"
export default {
  name: 'App',
  setup() {
      const axios=getCurrentInstance().appContext.app.$axios //IDE intellisense compatible
      //or
      const axios = getCurrentInstance().appContext.config.globalProperties.$axios; //IDE intellisense unsupported
      axios.get(api).then((response) => {
        console.log(response.data)
      })
  }
}

``` 
but for who using typescript  you can easily cast to StaticAxios to got intellisense back.
```ts 
 const axios= inject("$axios") as AxiosStatic
``` 
Please kindly check full documention of [axios](https://github.com/axios/axios) too.