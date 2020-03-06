<template>
  <div class="generated-route">
    <router-link
      :to="{
        //name: locale + '-home'
        path: route
      }"
    >
      {{ route }}
    </router-link>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'generated-route',
  props: {
    route: {
      type: String
    }
  }
})
</script>

<style scoped>
.generated-route:hover {
  cursor: pointer;
}

@media screen and (min-width: 0px) {
  .generated-route * {
    font-size: 70%;
  }
}

@media screen and (min-width: 650px) {
  .generated-route * {
    font-size: 160%;
  }
}
</style>
