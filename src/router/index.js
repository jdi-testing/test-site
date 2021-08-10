import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
  {
    path: '/alerts',
    name: 'Alerts',
    component: () => import('../views/Alerts.vue'),
  },
  {
    path: '/aspect-ratios',
    name: 'Aspect Ratios',
    component: () => import('../views/AspectRatios.vue'),
  },
  {
    path: '/toolbars',
    name: 'Toolbars',
    component: () => import('../views/Toolbar.vue'),
  },
  {
    path: '/app-bars',
    name: 'App Bars',
    component: () => import('../views/AppBar.vue'),
  },
  {
    path: '/bottom-sheets',
    name: 'Bottom sheets',
    component: () => import('../views/BottomSheets.vue'),
  },
  {  
    path: '/badges',
    name: 'Badges',
    component: () => import('../views/Badge.vue'),
  },
  {
    path: '/avatars',
    name: 'Avatars',
    component: () => import('../views/Avatars.vue'),
  },
  {
    path: '/buttons',
    name: 'Buttons',
    component: () => import('../views/Buttons.vue'),
  },
  {
    path: '/floating-action-button',
    name: 'Buttons: Floating Action Button',
    component: () => import('../views/FloatingActionButtons.vue'),
  },
  {
    path: '/bottom-navigation',
    name: 'Bottom navigation',
    component: () => import('../views/BottomNavigation.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;