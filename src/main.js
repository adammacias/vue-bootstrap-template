import Vue from 'vue'
import App from './App.vue'
import { Layout } from 'bootstrap-vue/es/components';

Vue.use(Layout);

new Vue({
  el: '#app',
  render: h => h(App)
})
