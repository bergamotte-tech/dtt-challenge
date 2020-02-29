<template>
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
</template>

<script lang="ts">
import i18n from '@/i18n'
import LanguageSelection from '@/components/LanguageSelection.vue'

export default {
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
}
</script>

<style scoped>
.nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
}
.nav > .brand {
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
  font-size: 1.5em;
  color: #39b982;
  text-decoration: none;
}
.nav .nav-item {
  box-sizing: border-box;
  margin: 0 5px;
  color: rgba(0, 0, 0, 0.5);
  text-decoration: none;
}
.nav .nav-item.router-link-exact-active {
  color: #39b982;
  border-bottom: solid 2px #39b982;
}
</style>
