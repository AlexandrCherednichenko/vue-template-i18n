<template>
    <div class="header__wrapper">
        <header class="header">
            <h5 class="header_h5">
                {{ $t('welcome') }}
            </h5>

            <LanguageSelect />
        </header>
    </div>
</template>

<script>
export default {
    name: 'UIHeader',
};
</script>

<script setup>
import LanguageSelect from '@/components/LanguageSelect/index.vue';
</script>

<style src="./styles.scss" lang="scss" scoped />
