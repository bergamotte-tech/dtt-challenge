<template>
  <div class="button-categories">
    <button @click="goToCategories()">
      {{ $t('components.navtop.navbar.title-categories') }}
    </button>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import i18n from '@/i18n'
import router from '../../router'

export default Vue.extend({
  name: 'button-categories',
  data() {
    return {
      locale: i18n.locale
    }
  },
  methods: {
    goToCategories(): void {
      router.push({ name: this.locale + '-categories' })
    }
  },
  updated() {
    this.locale = i18n.locale
  }
})
</script>

<style scoped>
button:hover {
  cursor: pointer;
}
</style>
