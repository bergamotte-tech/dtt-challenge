<template>
  <div id="category-details" class="padding-view">
    <h1>
      {{ $t('views.categories-details.title') }}:
      {{ toNormalName($route.params.idcat) }}
    </h1>

    <div class="items-wrapper flex flex-center">
      <loader v-if="beers.length < 1"> </loader>
      <item-box v-for="item in beers" :key="item.id" :item="item"></item-box>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import BeerService from '@/data/BeerService'
import ItemBox from '@/components/others/ItemBox.vue'
import { SimplifiedBeer } from '@/data/BeerInterface'
import Loader from '@/components/others/Loader.vue'

export default Vue.extend({
  name: 'category-details',
  components: {
    Loader,
    ItemBox
  },
  data() {
    return {
      beers: Array<SimplifiedBeer>(),
      catName: String
    }
  },
  created(): void {
    BeerService.getBeersByCategory(this.$route.params.idcat, 10).then(
      beers => (this.beers = beers)
    )
  },
  methods: {
    toNormalName(normalizedName: string): string {
      return normalizedName.replace(/\+/g, ' ')
    }
  }
})
</script>

<style scoped>
#category-details {
  background-color: darkviolet;
  min-height: 100%;
}
</style>
