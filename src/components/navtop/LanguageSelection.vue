<template>
  <div class="language-selection">
    <select class="">
      <option
        v-for="(lang, index) in languages"
        :key="index"
        @click="setLocale(lang)"
        >{{ lang }}</option
      >
    </select>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'language-selection',
  data() {
    return {
      languages: this.$root.$i18n.availableLocales
    }
  },
  methods: {
    setLocale(locale: string): void {
      this.$root.$i18n.locale = locale
      this.$root.$i18n.fallbackLocale = locale

      const routeName: string =
        this.$route.name != undefined ? this.$route.name : 'xx-home'

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
