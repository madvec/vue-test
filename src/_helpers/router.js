import Vue from 'vue';
import Router from 'vue-router';

import HomePage from '../components/dashboard/Home'
import LoginPage from '../components/auth/Login'
import Transfer from '../components/dashboard/Transfer'

Vue.use(Router);

export const router = new Router({
  mode: 'hash',
  routes: [
    { path: '/', component: HomePage },
    { path: '/home', component: HomePage },
    { path: '/login', component: LoginPage },
    { path: '/transfer', component: Transfer },

    // otherwise redirect to home
    { name: "notfound", path: "*", beforeEnter(to, from, next) { next(false); window.location.replace(to.fullPath); } }
  ]
});

router.beforeEach((to, from, next) => {
  // redirect to login page if not logged in and trying to access a restricted page
  const publicPages = ['/login'];
  const authRequired = !publicPages.includes(to.path);
  const loggedIn = localStorage.getItem('user');

  if (authRequired && !loggedIn) {
    return next({ 
      path: '/login', 
      query: { returnUrl: to.path } 
    });
  }

  next();
})