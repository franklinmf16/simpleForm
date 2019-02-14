import Vue from 'vue';
import Router from 'vue-router';
import PageOne from './views/pageOne.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'pageOne',
      component: PageOne,
    },
    {
      path: '/pagetwo',
      name: 'pageTwo',
      component: () => import('./views/pageTwo.vue'),
    },
  ],
});
