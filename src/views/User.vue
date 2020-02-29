<template>
  <div>
    <h1>{{ $t('views.user.title') }} {{ username }}</h1>
  </div>
</template>

<script lang="ts">
export default {
  name: 'user',
  props: ['username']
}
</script>

<style scoped></style>
