<template>
  <div id="beer-details" class="padding-view">
    <h1>
      {{ $t('views.beer-details.title') }}:
      {{ toNormalName(beerName) }}
    </h1>
    <item-box :beer="selectedBeer" :displayDetails="true"></item-box>
    <div class="flex flex-row flex-center">
      <loader v-if="similarBeers.length < 1"> </loader>
      <item-box
        v-for="beer in similarBeers"
        :key="beer.id"
        :beer="beer"
      ></item-box>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import ItemBox from '@/components/others/ItemBox.vue'
import { SimplifiedBeerClass } from '@/data/BeerInterface'
import BeerService from '@/data/BeerService'
import Loader from '@/components/others/Loader.vue'

export default Vue.extend({
  name: 'beer-details',
  components: {
    Loader,
    ItemBox
  },
  props: {
    beerId: {
      type: String
    },
    beerName: {
      type: String
    }
  },
  data() {
    return {
      selectedBeer: new SimplifiedBeerClass(),
      similarBeers: Array<SimplifiedBeerClass>()
    }
  },
  methods: {
    toNormalName(normalizedName: string): string {
      return normalizedName.replace(/\+/g, ' ')
    }
  },
  created(): void {
    BeerService.getSingleBeer(this.beerId).then(
      beer => (this.selectedBeer = beer)
    )
    BeerService.getBeers(3).then(beers => (this.similarBeers = beers))
    //getSimilarBeers
  }
})
</script>

<style scoped>
#details {
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
