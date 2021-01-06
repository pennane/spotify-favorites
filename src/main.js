import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

import VueAnalytics from 'vue-analytics'
import vClickOutside from 'v-click-outside'
import VScrollLock from 'v-scroll-lock'

Vue.use(VScrollLock)

Vue.use(vClickOutside)

Vue.config.productionTip = false;

Vue.use(VueAnalytics, {
  id: 'UA-126133790-2',
  debug: {
    sendHitTask: process.env.NODE_ENV === 'production'
  },
  router
})


new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
