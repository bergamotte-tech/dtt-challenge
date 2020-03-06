<template>
  <div id="error-404" class="padding-view flex flex-column flex-center">
    <h2>{{ $t('views.errors.error-404.title') }}</h2>
    <p>
      {{ $t('views.errors.error-404.text') }}
    </p>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'error-404'
})
</script>

<style scoped>
#error-404 {
  background-color: var(--background-primary);
  min-height: 70vh;
}
</style>
