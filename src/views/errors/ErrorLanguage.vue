<template>
  <div id="error-language" class="padding-view flex flex-column flex-center">
    <h2>{{ $t('views.errors.error-language.title') }}</h2>
    <h3>
      {{ $t('views.errors.error-language.text') }}
    </h3>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'error-language'
})
</script>

<style scoped>
#error-language {
  background-color: var(--background-primary);
  min-height: 70vh;
}
</style>
