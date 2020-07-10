import Vue from 'vue';
import Router from 'vue-router';
import firtsPage from './views/firtspage'
import secondpage from "./views/secondpage";
import thirdpage from './views/thirdpage';

Vue.use(Router);
export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: firtsPage
    },
    {
      path:'/secondPage',
      component: secondpage,
    },
    {
      path:'/thirdpage',
      component: thirdpage,
    }

  ]
});
