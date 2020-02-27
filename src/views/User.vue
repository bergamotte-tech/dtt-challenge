<template>
  <div>
    <h1>{{ $t('views.user.title') }} {{ username }}</h1>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'user',
  props: ['username']
})
</script>

<style scoped></style>
