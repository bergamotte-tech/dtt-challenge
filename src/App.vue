<template>
  <div id="app">
    <div id="nav">
      <router-link
        :to="{
          name: locale + '-event-list'
        }"
      >
        {{ $t('nav.list') }}
      </router-link>
      |
      <router-link
        :to="{
          name: locale + '-event-create'
        }"
      >
        {{ $t('nav.create') }}
      </router-link>
      |
      <router-link
        :to="{
          name: locale + '-user',
          params: { username: 'gregg' }
        }"
      >
        {{ $t('nav.user') }}
      </router-link>
      <language-selection></language-selection>
    </div>
    <router-view />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import i18n from '@/i18n'
import LanguageSelection from '@/components/LanguageSelection.vue'

export default Vue.extend({
  name: 'app',
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

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
