<template>
  <div id="footerbar">
    <div class="routes-wrapper flex flex-center">
      <generated-route
        v-for="route in generatedSitemap"
        :key="route"
        :route="route"
      ></generated-route>
    </div>
  </div>
</template>

<script lang="ts">
// TODO MOBILE NO EMAIL ------------
import Vue from 'vue'
import GeneratedRoute from '@/components/others/GeneratedRoute.vue'
import { sitemap } from '@/router/index'

export default Vue.extend({
  name: 'footerbar',
  components: {
    GeneratedRoute
  },
  data() {
    return {
      generatedSitemap: sitemap
    }
  }
})
</script>

<style scoped>
.routes-wrapper {
  margin: 0 auto;
  height: 100%;
  width: auto;
  flex-direction: column;
  justify-content: space-between;
}
</style>
