<template>
  <div id="language-selection">
    <select id="selector">
      <option
        v-for="(lang, index) in languages"
        :key="index"
        @click="setLocale(lang)"
        :value="lang"
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
      languages: Array<string>()
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
  },
  mounted(): void {
    ;(this.languages = this.$root.$i18n.availableLocales),
      ((document.getElementById(
        'selector'
      ) as HTMLSelectElement).value = this.$i18n.locale)
  },
  watch: {
    $route() {
      ;(document.getElementById(
        'selector'
      ) as HTMLSelectElement).value = this.$root.$i18n.locale
    }
  }
})
</script>

<style scoped>
#language-selection {
  transform: scale(1.2);
}
</style>
