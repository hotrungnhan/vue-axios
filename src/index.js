/**
 * Install plugin
 * @param app
 * @param axios
 */
/* vue 3 and up*/
let plugin = {
  install: (app, axios) => {
    if (!axios) {
      console.log('axios isn`t imported')
    }
    if (app.version && app.version.split('.')[0] >= '3' && app.provide) {
      app.config.globalProperties.$axios = axios
      app.$axios = axios
      app.provide('$axios', axios)
    } else if (app.version && app.version.split('.')[0] <= '2') {
      app.$axios = axios
      app.prototype.$axios = axios
    }
  },
}
export default plugin
if (
  window.Vue &&
  Vue.version &&
  Vue.version.split('.')[0] <= '2' &&
  window.Vue.use
) {
  if (axios) {
    Vue.use(plugin, axios)
  }
}
