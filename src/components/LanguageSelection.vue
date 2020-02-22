<template>
  <div>
    <h2>{{ localised('hello') }}</h2>
    <h2>{{ localised('goodbye ') }}</h2>
    <button @click="activeLocale = 'en'">English</button>
    <button @click="activeLocale = 'fr'">French</button>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'language-selection',
  data() {
    return {
      activeLocale: 'en',
      translations: {
        en: {
          hello: 'Hello',
          goodbye: 'Goodbye'
        },
        fr: {
          hello: 'Bonjour',
          goodbye: 'Au revoir'
        }
      }
    }
  },
  methods: {
    localised(key: string): string {
      return this.translations[this.activeLocale][key]
    }
  }
})
</script>

<style scoped></style>
