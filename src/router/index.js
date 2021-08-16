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
    path: '/application',
    name: 'Application',
    component: () => import('../views/Application.vue'),
  },
  {
    path: '/aspect-ratios',
    name: 'Aspect Ratios',
    component: () => import('../views/AspectRatios.vue'),
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
    path: '/breadcrumbs',
    name: 'Breadcrumbs',
    component: () => import('../views/Breadcrumb.vue'),
  },
  {
    path: '/button-groups',
    name: 'Button Groups',
    component: () => import('../views/ButtonGroups.vue'),
  },
  {
    path: '/buttons',
    name: 'Buttons',
    component: () => import('../views/Buttons.vue'),
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
    path: '/chip-groups',
    name: 'Chip Groups',
    component: () => import('../views/ChipGroups.vue'),
  },
  {
    path: '/chips',
    name: 'Chips',
    component: () => import('../views/Chips.vue'),
  },
  {
    path: '/color-pickers',
    name: 'Color Pickers',
    component: () => import('../views/ColorPickers.vue'),
  },
  {
    path: '/combobox',
    name: 'Combobox',
    component: () => import('../views/Combobox.vue'),
  },
  {
    path: '/date-pickers',
    name: 'Date Pickers',
    component: () => import('../views/DatePickers.vue'),
  },
  {
    path: '/dialogs',
    name: 'Dialogs',
    component: () => import('../views/Dialogs.vue'),
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
    path: '/file-inputs',
    name: 'File Inputs',
    component: () => import('../views/FileInputs.vue'),
  },
  {
    path: '/floating-action-button',
    name: 'Buttons: Floating Action Button',
    component: () => import('../views/FloatingActionButtons.vue'),
  },
  {
    path: '/footers',
    name: 'Footers',
    component: () => import('../views/Footers.vue'),
  },
  {
    path: '/forms',
    name: 'Forms',
    component: () => import('../views/Forms.vue'),
  },
  {
    path: '/grid-system',
    name: 'Grid System',
    component: () => import('../views/GridSystem.vue'),
  },
  {
    path: '/icons',
    name: 'Icons',
    component: () => import('../views/Icons.vue'),
  },
  {
    path: '/hover',
    name: 'Hover',
    component: () => import('../views/Hover.vue'),
  },
  {
    path: '/navigation-drawers',
    name: 'Navigation Drawers',
    component: () => import('../views/NavigationDrawers.vue'),
  },
  {
    path: '/menus',
    name: 'Menus',
    component: () => import('../views/Menus.vue'),
  },
  {
    path: '/images',
    name: 'Images',
    component: () => import('../views/Images.vue'),
  },
  {
    path: '/list-item-groups',
    name: 'List Item Groups',
    component: () => import('../views/ListItemGroups.vue'),
  },
  {
    path: '/item-groups',
    name: 'Item Groups',
    component: () => import('../views/ItemGroups.vue'),
  },
  {
    path: '/overflow-buttons',
    name: 'Overflow Buttons',
    component: () => import('../views/OverflowButtons.vue'),
  },
  {
    path: '/ratings',
    name: 'Ratings',
    component: () => import('../views/Ratings.vue'),
  },
  {
    path: '/inputs',
    name: 'Inputs',
    component: () => import('../views/Inputs.vue'),
  },
  {
    path: '/lists',
    name: 'Lists',
    component: () => import('../views/Lists.vue'),
  },
  {
    path: '/overlays',
    name: 'Overlays',
    component: () => import('../views/Overlays.vue'),
  },
  {
    path: '/skeleton-loaders',
    name: 'Skeleton loaders',
    component: () => import('../views/SkeletonLoaders.vue'),
  },
  {
    path: '/slide-groups',
    name: 'Slide Groups',
    component: () => import('../views/SlideGroups.vue'),
  },
  {
    path: '/range-sliders',
    name: 'Range Sliders',
    component: () => import('../views/RangeSliders.vue'),
  },
  {
    path: '/radio-buttons',
    name: 'Radio Buttons',
    component: () => import('../views/RadioButtons.vue'),
  },
  {
    path: '/sheets',
    name: 'Sheets',
    component: () => import('../views/Sheets.vue'),
  },
  {
    path: '/sliders',
    name: 'Sliders',
    component: () => import('../views/Sliders.vue'),
  },
  {
    path: '/selects',
    name: 'Selects',
    component: () => import('../views/Selects.vue'),
  },
  {
    path: '/snackbars',
    name: 'Snackbars',
    component: () => import('../views/Snackbars.vue'),
  },
  {
    path: '/sparklines',
    name: 'Sparklines',
    component: () => import('../views/Sparklines.vue'),
  },
  {
    path: '/switches',
    name: 'Switches',
    component: () => import('../views/Switches.vue'),
  },
  {
    path: '/system-bars',
    name: 'System Bars',
    component: () => import('../views/SystemBars.vue'),
  },
  {
    path: '/time-pickers',
    name: 'Time Pickers',
    component: () => import('../views/TimePickers.vue'),
  },
  {
    path: '/text-fields',
    name: 'Text Fields',
    component: () => import('../views/TextFields.vue'),
  },
  {
    path: '/textareas',
    name: 'Textareas',
    component: () => import('../views/Textareas.vue'),
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
  {
    path: '/timelines',
    name: 'Timelines',
    component: () => import('../views/Timelines.vue'),
  },
  {
    path: '/windows',
    name: 'Windows',
    component: () => import('../views/Windows.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
