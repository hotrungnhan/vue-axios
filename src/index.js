/**
 * Install plugin
 * @param app
 * @param axios
 */
/* vue 3 and up*/
export default {
  install: (app, axios) => {
    if (app.version && app.version.split('.')[0] >= '3') {
      app.config.globalProperties.$axios = axios
      app.$axios = axios
      app.provide('$axios', axios)
    } else if (app.version && app.version.split('.')[0] <= '2') {
      app.$axios = axios
      app.prototype.$axios = axios
    }
  },
}
//vue 2 web
if (  Vue &&  Vue.version &&  Vue.version.split('.')[0] <= '2' &&  Vue &&  window.axios &&  window.Vue.use) {
  Vue.$axios = axios
  Vue.prototype.$axios = axios
}
