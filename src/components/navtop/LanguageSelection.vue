<template>
  <div class="language-selection">
    <v-menu offset-y>
      <template v-slot:activator="{ on }">
        <v-btn color="primary" dark v-on="on">
          Dropdown
        </v-btn>
      </template>
      <v-list>
        <v-list-item
          v-for="(language, index) in languages"
          :key="index"
          @click="setLocale(language)"
        >
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'language-selection',
  data() {
    return {
      items: [
        { title: 'Click Me' },
        { title: 'Click Me' },
        { title: 'Click Me' },
        { title: 'Click Me 2' }
      ]
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
