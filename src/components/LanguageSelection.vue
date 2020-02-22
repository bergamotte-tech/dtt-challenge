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
  data() {
    return {
      activeLocale: 'en'
    }
  },
  methods: {
    setLocale(locale: string): void {
      ;(this.$i18n.locale = locale),
        this.$router.push({
          params: { lang: locale }
        })
    }
  }
})
</script>

<style scoped></style>
