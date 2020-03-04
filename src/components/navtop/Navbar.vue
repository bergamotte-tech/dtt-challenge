<template>
  <div id="nav">
    <router-link
      :to="{
        name: locale + '-home'
      }"
    >
      {{ $t('components.navtop.navbar.title-home') }}
    </router-link>
    <router-link
      :to="{
        name: locale + '-categories'
      }"
    >
      {{ $t('components.navtop.navbar.title-categories') }}
    </router-link>
    <router-link
      :to="{
        name: locale + '-random'
      }"
    >
      {{ $t('components.navtop.navbar.title-random') }}
    </router-link>
    <language-selection></language-selection>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import i18n from '@/i18n'
import LanguageSelection from '@/components/navtop/LanguageSelection.vue'

export default Vue.extend({
  name: 'navbar',
  components: {
    LanguageSelection
  },
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

<style scoped>
#nav {
  position: fixed;
  z-index: 1000;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  background-color: var(--bgrd-primary);

  height: 5rem;
  width: 100%;
}

#nav a {
  color: var(--text-primary);
}

/* RESPONSIVE */

@media screen and (min-width: 0px) {
}

@media screen and (min-width: 300px) {
}

@media screen and (min-width: 650px) {
}

@media screen and (min-width: 900px) {
}
</style>
