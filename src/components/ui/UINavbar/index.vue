<template>
    <nav class="navbar">
        <router-link
            v-for="item of navbarMenu"
            :key="item.name"
            :to="Tr.i18nRoute({name:item.path})"
        >
            {{ $t(`navbar.${item.name}`) }}
        </router-link>
    </nav>
</template>

<script>
export default {
    name: 'UINavbar',
};
</script>

<script setup>
import { ROUTE_NAMES } from '@/constants/route-names';
import Tr from '@/i18n/translation';

const navbarMenu = [
    { name: 'home', path: ROUTE_NAMES.HOME_PAGE.routeName },
    { name: 'about', path: ROUTE_NAMES.ABOUT_PAGE.routeName },
    { name: 'contact', path: ROUTE_NAMES.CONTACT_PAGE.routeName },
];
</script>
