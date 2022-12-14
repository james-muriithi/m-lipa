import Vue from 'vue'
import VueRouter from 'vue-router'
import HomePage from '../pages/HomePage.vue'

Vue.use(VueRouter);

function loadView(view) {
  return () =>
    import(/* webpackChunkName: "view-[request]" */ `@/pages/${view}`);
}

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomePage
  },
  {
    path: '/auth/login',
    name: 'login',
    component: loadView('auth/Login.vue')
  },
  {
    path: '/auth/signup',
    name: 'signup',
    component: loadView('auth/Signup.vue')
  },
  {
    path: '/dashboard',
    component: loadView('dashboard/Dashboard.vue'),
    children: [
      {
        path: '/',
        name: 'dashboard',
        component: loadView('dashboard/DashboardHome.vue')
      },
    ]
  },
]

function scrollBehavior(to, from, savedPosition) {
  if (savedPosition) {
    // savedPosition is only available for popstate navigations.
    return savedPosition
  }
  return new Promise((resolve) => {
    // wait for the out transition to complete (if necessary)
    setTimeout(() => {
      // if the returned position is falsy or an empty object,
      // will retain current scroll position.
      resolve({ x: 0, y: 0 })
    }, 250)
  })
}

const router = new VueRouter({
  mode: 'history',
  routes,
  scrollBehavior,
});

export default router
