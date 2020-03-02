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
/**
 * Pieces : Logo + LanguageSelector + Routes + MenuIcon
 * Display :
 *  All :
 *    position: fixed
 *    MenuIcon = cross
 *
 *    @clickMenuIcon : MenuIcon = hamburger
 *
 *
 *  Desktop :
 *        row
 *
 *        @clickMenuIcon : bkgrd = transparent / LanguageSelector & Routes = display none
 *
 *
 *  Mobile :
 *        * : display: none (except MenuIcon)
 *        MenuIcon : bottom : 2px
 *                   right : 2px
 *
 *        @clickMenuIcon : displayMobileNavPage()
 */

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
  padding: 30px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  height: 60px;
}

#nav a {
  font-family: 'Bungee', cursive;
  font-size: 30px;
  color: var(--text-primary);
}
</style>
