<template>
  <div>
    <h1>This is listing</h1>
    <language-selection></language-selection>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import LanguageSelection from '../components/LanguageSelection.vue'

export default Vue.extend({
  components: {
    LanguageSelection
  }
})
</script>

<style scoped></style>
