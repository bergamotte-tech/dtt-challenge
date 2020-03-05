<template>
  <div id="beer-details" class="padding-view">
    <h1>
      {{ $t('views.beer-details.title') }}:
      {{ selectedBeer.name }}
    </h1>
    <loader v-if="!selectedBeer"> </loader>
    <item-box
      :beer="selectedBeer"
      :displayDetails="true"
      class="details"
    ></item-box>
    <h2>{{ $t('views.beer-details.similar') }}</h2>
    <div class="similar flex flex-row flex-center">
      <loader v-if="similarBeers.length < 1"> </loader>
      <item-box
        v-for="beer in similarBeers"
        :key="beer.id"
        :beer="beer"
        class="similar"
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
    idbeer: {
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
    },
    init(): void {
      BeerService.getSingleBeer(this.idbeer).then(
        beer => (
          ((this.selectedBeer = beer), console.log(beer.brewery_id)),
          BeerService.getSimilarBeers('1', 3).then(
            beers => (this.similarBeers = beers)
          )
        )
      )

      // TODO pass style id or similar : pbl undefined car async ? undefined dans le reste aussi, ptetre possiblement null ?
      // BeerService.getSimilarBeers('2', 3).then(
      //   beers => (this.similarBeers = beers)
      // )
    }
  },
  created(): void {
    this.init()
  },
  watch: {
    $route() {
      console.log('ha')
      this.init()
    }
  }
})
</script>

<style scoped>
#beer-details {
  background-color: black;
  min-height: 100%;
}
</style>
