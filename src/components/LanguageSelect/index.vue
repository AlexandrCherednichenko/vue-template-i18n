<template>
    <Multiselect
        class="languages-select"
        :model-value="selectedLocale"
        :options="options"
        label="name"
        track-by="value"
        :option-height="104"
        :show-labels="false"
        :searchable="false"
        :allow-empty="false"
        @update:model-value="switchLanguage"
    >
        <template #option="props">
            <p>{{ $t(`locales.${props.option.value}`) }}</p>
        </template>
    </Multiselect>
</template>

<script>
export default {
    name: 'LanguageSelect',
};
</script>

<script setup>
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';
import Multiselect from 'vue-multiselect';
import { useRouter } from 'vue-router';
import Tr from '@/i18n/translation';

const router = useRouter();

const { t, locale } = useI18n();
const { supportedLocale } = Tr;

const selectedLocale = computed(() => ({ value: locale.value, name: t(`locales.${locale.value}`) }));

const options = supportedLocale.map(el => ({
    value: el,
    name: t(`locales.${el}`),
}));

const switchLanguage = async ev => {
    const newLocale = ev.value;
    await Tr.switchLanguage(newLocale);

    try {
        await router.replace({ params: { locale: newLocale }});
    } catch (e) {
        console.error(e);
        await router.push('/');
    }
};
</script>

<style src="./styles.scss" lang="scss" scoped />
