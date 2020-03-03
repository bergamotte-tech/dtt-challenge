<template>
  <div id="random" class="padding-view">
    <h1>{{ $t('views.random.title') }}/</h1>
    <div class="introduction-wrapper flex flex-row"></div>
    <h2>Whatever:</h2>
    <div class="items-wrapper flex flex-row"></div>
    <h2>Whatever:</h2>
  </div>
</template>

<script lang="ts">
export default {
  name: 'random'
}
</script>

<style scoped>
#random {
  background-color: blueviolet;
  min-height: 100%;
}

.introduction-wrapper {
  background-color: cornflowerblue;
  width: 100%;
  height: 400px;
}
.items-wrapper {
  background-color: darkcyan;
  width: 100%;
  height: 400px;
}
</style>
