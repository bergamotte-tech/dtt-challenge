<template>
  <div id="random" class="padding-view">
    <h1>{{ $t('views.random.title') }}:</h1>

    <div class="wrapper flex flex-column flex-center">
      <button id="btn-randomize" @click="showRandomBeer()">
        {{ $t('views.random.randomize') }}
      </button>
      <div
        class="items-wrapper flex flex-center"
        v-bind:class="{ spinning: !this.isDisplayed }"
      >
        <loader v-if="!beer"> </loader>
        <item-box v-if="beer.id != 'default'" :beer="beer"></item-box>
      </div>
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
  name: 'random',
  components: {
    Loader,
    ItemBox
  },
  data() {
    return {
      beer: new SimplifiedBeerClass(),
      trueId: '0',
      isDisplayed: false
    }
  },
  methods: {
    spinTheWheel(): void {
      this.isDisplayed = false
      this.beer.id = '0'
      let index = 1
      const iterations = 20
      const duration = 70
      while (index <= iterations) {
        //less than 2/3 of iterations
        if (index < iterations - iterations / 3)
          setTimeout(this.setFakeId, duration * index * 2)
        else setTimeout(this.setFakeId, duration * index * 2 + 400)
        index++
      }
      setTimeout(this.setGenuineId, duration * index * 2 + 400)
    },

    setFakeId(): void {
      this.beer.id = this.randomId()
    },

    setGenuineId(): void {
      this.beer.id = this.trueId
      this.isDisplayed = true
    },

    randomId(): string {
      //max value hard coded for simplifying reasons, getting the total count of ids in the API would be safer
      return Math.floor(Math.random() * 500).toString()
    },

    showRandomBeer(): void {
      BeerService.getSingleBeer(this.randomId()).then(
        beer => ((this.beer = beer), (this.trueId = beer.id))
      ),
        this.spinTheWheel()
    }
  }
})
</script>

<style scoped>
#btn-randomize {
  margin: 2rem auto;
}

.wrapper {
  min-height: 50vh;
}
</style>
