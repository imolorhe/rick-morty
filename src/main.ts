import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

import './scss/styles.scss';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');

/**
 * Favorite characters (https://jsonbin.io/api-reference/bins/create) (collection - 5ec8470ce91d1e45d10f81f1)
 * Add note about favorite character
 * Handle pagination
 * Add episodes in character details
 */
