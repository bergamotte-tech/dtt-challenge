<template>
  <div id="category-details" class="padding-view">
    <h1>{{ $t('views.categories-details.title') }}:</h1>

    <h3>
      {{ this.toBasicName(this.catName) }}
    </h3>

    <div class="items-wrapper flex flex-center">
      <loader v-if="beers.length < 1"> </loader>
      <item-box v-for="beer in beers" :key="beer.id" :beer="beer"></item-box>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import BeerService from '@/data/BeerService'
import ItemBox from '@/components/others/ItemBox.vue'
import { SimplifiedBeerClass } from '@/data/BeerInterface'
import Loader from '@/components/others/Loader.vue'

export default Vue.extend({
  name: 'category-details',
  components: {
    Loader,
    ItemBox
  },
  props: {
    catName: {
      type: String
    }
  },
  data() {
    return {
      beers: Array<SimplifiedBeerClass>()
    }
  },
  methods: {
    toNormalizedName(basicName: string): string {
      return basicName.replace(/\s/g, '+')
    },
    toBasicName(normalizedName: string): string {
      return normalizedName.replace(/\+/g, ' ')
    },
    init(): void {
      BeerService.getBeersByCategory(
        this.toNormalizedName(this.catName),
        3
      ).then(beers => (this.beers = beers))
    }
  },
  created(): void {
    this.init()
  },
  watch: {
    $route() {
      this.init()
    }
  }
})
</script>

<style scoped>
#category-details {
  background-color: darkviolet;
}
</style>
