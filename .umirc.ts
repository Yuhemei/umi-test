import { defineConfig } from 'umi';

export default defineConfig({
  layout: {},
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    {
      path: '/',
      component: '@/layouts/BasicLayout',
      routes: [
        { path: '/cart', component: '@/pages/cart' },
        { path: '/user', component: '@/pages/user' },
        { path: '/oList', component: '@/pages/oList' },
        { path: '/login', component: '@/pages/login' },
      ],
    },
  ],
  fastRefresh: {},
});
