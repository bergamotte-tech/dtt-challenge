<template>
  <div>
    <h1>{{ $t('views.event-list.title') }}</h1>
    <router-link
      :to="{
        name: locale + '-event-show',
        params: { id: '1' }
      }"
    >
      {{ $t('nav.show') }}
    </router-link>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import i18n from '@/i18n'

export default Vue.extend({
  name: 'event-list',
  data() {
    return {
      locale: i18n.locale
    }
  },
  updated() {
    this.locale = i18n.locale
  }
})
</script>

<style scoped></style>
