<template>
  <div>
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
      this.$root.$i18n.locale = locale
      this.$root.$i18n.fallbackLocale = locale

      const routeName: string =
        this.$route.name != undefined ? this.$route.name : 'en-event-list'

      this.$router
        .push({
          name: locale + routeName.substring(2),
          params: this.$route.params
        })
        .catch(err => err)
    }
  }
})
</script>

<style scoped></style>
