<template>
  <h1>{{ $t('errors.error-undefined-language.title') }}</h1>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'error-undefined-language'
})
</script>

<style scoped>
h1 {
  color: blueviolet;
}
</style>
