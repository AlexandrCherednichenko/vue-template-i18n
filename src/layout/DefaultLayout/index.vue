<template>
    <div class="main">
        <UIHeader />

        <div class="main__content">
            <UINavbar />

            <div class="main__content-inner">
                <router-view />
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'DefaultLayout',
};
</script>

<script setup>
import UINavbar from '@/components/ui/UINavbar/index.vue';
import UIHeader from '@/components/ui/UIHeader/index.vue';
</script>
