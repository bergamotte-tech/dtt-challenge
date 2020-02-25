<template>
  <div>
    <h1>{{ $t('views.event-create.title') }}</h1>
    <language-selection></language-selection>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import LanguageSelection from '@/components/LanguageSelection.vue'

export default Vue.extend({
  name: 'event-create',
  components: {
    LanguageSelection
  }
})
</script>

<style scoped></style>
