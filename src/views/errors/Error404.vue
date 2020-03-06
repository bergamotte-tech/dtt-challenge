<template>
  <div id="error-404" class="padding-view flex flex-column flex-center">
    <h2>{{ $t('views.errors.error-404.title') }}</h2>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam iusto,
      molestias, esse nam hic dolorem sed ut voluptas delectus totam velit
      pariatur veritatis saepe illum dicta ratione. Laudantium, quam
      repellendus.
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
  background-color: darkviolet;
  min-height: 100vh;
}
</style>
