import Vue from 'vue';
import VueRouter from 'vue-router';
import DefaultAppView from '../views/DefaultAppView.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: DefaultAppView,
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
