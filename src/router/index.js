import { createRouter, createWebHistory, RouterView } from 'vue-router';
import { ROUTE_NAMES } from '@/constants/route-names';
import Translation from '@/i18n/translation';

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),

    routes: [
        {
            path: '/:locale?',
            component: RouterView,
            beforeEnter: Translation.routeMiddleware,
            children: [
                {
                    path: '',
                    name: ROUTE_NAMES.DEFAULT_LAYOUT.routeName,
                    redirect: { name: ROUTE_NAMES.HOME_PAGE.routeName },
                },
                {
                    path: 'home',
                    name: ROUTE_NAMES.HOME_PAGE.routeName,
                    component: () => import('@/views/HomePage/index.vue'),
                },
                {
                    path: 'about',
                    name: ROUTE_NAMES.ABOUT_PAGE.routeName,
                    component: () => import('@/views/AboutPage/index.vue'),
                },
                {
                    path: 'contact',
                    name: ROUTE_NAMES.CONTACT_PAGE.routeName,
                    component: () => import('@/views/ContactPage/index.vue'),
                },
            ],
        },
    ],
});

export default router;
