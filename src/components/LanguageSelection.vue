<template>
  <div>
    <h2>{{ $t('message') }}</h2>
    <button @click="setLocale('en')">English</button>
    <button @click="setLocale('fr')">French</button>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'language-selection',
  methods: {
    setLocale(locale: string): void {
      const genericRouteName: string = this.$route.meta

      this.$root.$i18n.locale = locale
      this.$root.$i18n.fallbackLocale = locale

      this.$router
        .push(
          '/' +
            locale +
            `/${this.$root.$i18n.t('path.' + genericRouteName, locale)}`
        )
        .catch(err => err)
    }
  }
})
</script>

<style scoped></style>
