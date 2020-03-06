<template>
  <div id="error-language" class="padding-view flex flex-column flex-center">
    <h2>{{ $t('views.errors.error-language.title') }}</h2>
    <h3>
      Cheer up with one of our beers !
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
  background-color: darkviolet;
  min-height: 100vh;
}
</style>
