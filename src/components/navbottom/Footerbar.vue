<template>
  <div id="footerbar">
    <h3>{{ $t('components.navbottom.footer.title-credits') }}:</h3>
    <p>
      Credits here Lorem ipsum dolor sit amet consectetur adipisicing elit.
      Dicta, eum? Inventore, quod recusandae velit porro dignissimos, quasi et
      dolore aspernatur deleniti impedit, repellat voluptatem! Adipisci maiores
      cumque cum labore laboriosam.
    </p>
    <h3>{{ $t('components.navbottom.footer.title-sitemap') }}:</h3>
    <div class="routes-wrapper">
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
#footerbar p {
  margin-bottom: 2rem;
}

.routes-wrapper {
  height: auto;
  width: auto;
  max-width: 100%;
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: 30% 30% 30%;
}
</style>
