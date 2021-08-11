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
    path: '/app-bars',
    name: 'App Bars',
    component: () => import('../views/AppBar.vue'),
  },
  {
    path: '/aspect-ratios',
    name: 'Aspect Ratios',
    component: () => import('../views/AspectRatios.vue'),
  },
  {
    path: '/dialogs',
    name: 'Dialogs',
    component: () => import('../views/Dialogs.vue'),
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
    path: '/autocompletes',
    name: 'Autocompletes',
    component: () => import('../views/Autocompletes.vue'),
  },
  {
    path: '/avatars',
    name: 'Avatars',
    component: () => import('../views/Avatars.vue'),
  },
  {
    path: '/badges',
    name: 'Badges',
    component: () => import('../views/Badge.vue'),
  },
  {
    path: '/banners',
    name: 'Banner',
    component: () => import('../views/Banner.vue'),
  },
  {
    path: '/bottom-navigation',
    name: 'Bottom navigation',
    component: () => import('../views/BottomNavigation.vue'),
  },
  {
    path: '/bottom-sheets',
    name: 'Bottom sheets',
    component: () => import('../views/BottomSheets.vue'),
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
    path: '/calendars',
    name: 'Calendars',
    component: () => import('../views/Calendars.vue'),
  },
  {
    path: '/cards',
    name: 'Cards',
    component: () => import('../views/Cards.vue'),
  },
  {
    path: '/carousels',
    name: 'Carousels',
    component: () => import('../views/Carousels.vue'),
  },
  {
    path: '/chips',
    name: 'Chips',
    component: () => import('../views/Chips.vue'),
  },
  {
    path: '/dividers',
    name: 'Dividers',
    component: () => import('../views/Dividers.vue'),
  },
  {
    path: '/expansion-panels',
    name: 'Expansion Panels',
    component: () => import('../views/ExpansionPanels.vue'),
  },
  {
    path: '/footers',
    name: 'Footers',
    component: () => import('../views/Footers.vue'),
  },
  {
    path: '/grid-system',
    name: 'Grid System',
    component: () => import('../views/GridSystem.vue'),
  },
  {
    path: '/hover',
    name: 'Hover',
    component: () => import('../views/Hover.vue'),
  },
  {
    path: '/snackbars',
    name: 'Snackbars',
    component: () => import('../views/Snackbars.vue'),
  },
  {
    path: '/system-bars',
    name: 'System Bars',
    component: () => import('../views/SystemBars.vue'),
  },
  {
    path: '/toolbars',
    name: 'Toolbars',
    component: () => import('../views/Toolbar.vue'),
  },
  {
    path: '/tooltips',
    name: 'Tooltips',
    component: () => import('../views/Tooltips.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
