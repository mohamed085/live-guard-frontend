import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

import { BootstrapVue, IconsPlugin, BootstrapVueIcons } from 'bootstrap-vue';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.use(BootstrapVueIcons);

import { RichTextEditorPlugin } from '@syncfusion/ej2-vue-richtexteditor';

Vue.use(RichTextEditorPlugin);

import AOS from 'aos'
import 'aos/dist/aos.css'

Vue.use(AOS)

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  mounted() {
    AOS.init()
  },
  render: h => h(App)
}).$mount('#app')
