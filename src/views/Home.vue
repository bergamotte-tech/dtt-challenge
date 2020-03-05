<template>
  <div id="home" class="padding-view">
    <h1>{{ $t('views.home.title') }}/</h1>
    <div class="introduction-wrapper flex">
      <div class="introduction-beer flex">
        <div class="beer-shape flex flex-center">
          <img
            src="https://uploads-ssl.webflow.com/5c11655d98d64953510d3830/5c893a6a4793fa2a05a455a5_21A-ElSully-12oz.png"
            v-bind:alt="$t('alt.image-beer')"
          />
          <div class="bubble bubble1"></div>
          <div class="bubble bubble2"></div>
          <div class="bubble bubble3"></div>
          <div class="bubble bubble4"></div>
          <div class="bubble bubble5"></div>
          <div class="text-scroll flex flex-center"><p>scroll -></p></div>
        </div>
      </div>
      <div class="introduction-speech">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint facere
          quis rem saepe alias molestias, fugiat deserunt nulla pariatur dolorem
          vero laboriosam suscipit dicta omnis ratione dolorum. Veritatis,
          necessitatibus deleniti! Lorem ipsum, dolor sit amet consectetur
          adipisicing elit. Voluptatum quaerat aliquid tempora?
        </p>
        <h3>CHEERS !</h3>
      </div>
    </div>
    <h2>{{ $t('views.home.on-tap') }}:</h2>

    <div class="items-wrapper flex flex-center">
      <loader v-if="beers.length < 1"> </loader>
      <item-box v-for="item in beers" :key="item.id" :item="item"></item-box>
    </div>

    <h2>{{ $t('views.home.thirsty') }}:</h2>
    <button-categories></button-categories>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import ItemBox from '@/components/others/ItemBox.vue'
import ButtonCategories from '@/components/others/ButtonCategories.vue'
import { SimplifiedBeer } from '@/data/BeerInterface'
import BeerService from '@/data/BeerService'
import Loader from '@/components/others/Loader.vue'

export default Vue.extend({
  name: 'home',
  components: {
    Loader,
    ButtonCategories,
    ItemBox
  },
  data() {
    return {
      beers: Array<SimplifiedBeer>()
    }
  },
  created(): void {
    BeerService.getBeers(10).then(beers => (this.beers = beers))
  }
})
</script>

<style scoped>
/* GENERAL */

#home {
  background-color: blueviolet;
  min-height: 100%;
}

.text-scroll {
  position: absolute;
  z-index: 800;
  text-transform: uppercase;
  line-height: 0;
  white-space: nowrap;
  padding: 0.2rem;
  background-color: black;

  top: 50%;
  left: 100%;

  transform-origin: 0 0;
  transform: rotate(90deg) translate(-50%, -0%);

  animation: floating 2s ease infinite;
}
@keyframes floating {
  0% {
    top: 55%;
  }
  50% {
    top: 45%;
  }
  100% {
    top: 55%;
  }
}

.introduction-wrapper {
  width: 100%;
  height: auto;
  justify-content: space-between;
  align-items: center;
}

.introduction-beer {
  justify-content: center;
  align-items: center;
  height: fit-content;
  min-width: fit-content;
  margin: 0 2rem;
}

.beer-shape {
  z-index: 1;
  position: relative;
  overflow: hidden;
}

.beer-shape img {
  height: 100%;
  width: unset;
  display: block; /* remove extra space below image */
}

.beer-shape:hover {
  cursor: pointer;
}

.introduction-speech h3 {
  float: right;
}

.bubble {
  position: absolute;
  z-index: 2;
  -webkit-animation-name: bubble;
  -webkit-animation-iteration-count: infinite;
  -webkit-animation-timing-function: linear;
  animation-name: bubble;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
  background-color: rgba(255, 255, 255, 0.2);
  bottom: 0;
  border-radius: 50%;
  height: 1vw;
  width: 1vw;
}
@keyframes bubble {
  0% {
    bottom: 0;
  }

  50% {
    background-color: rgba(255, 255, 255, 0.2);
    bottom: 50%;
  }

  100% {
    background-color: rgba(255, 255, 255, 0);
    bottom: 100%;
  }
}

.bubble1 {
  left: 10%;
  -webkit-animation-delay: 1000ms;
  -webkit-animation-duration: 1000ms;
  animation-delay: 1000ms;
  animation-duration: 1000ms;
}

.bubble2 {
  left: 50%;
  -webkit-animation-delay: 700ms;
  -webkit-animation-duration: 1100ms;
  animation-delay: 700ms;
  animation-duration: 1100ms;
}

.bubble3 {
  left: 60%;
  -webkit-animation-delay: 1200ms;
  -webkit-animation-duration: 1300ms;
  animation-delay: 1200ms;
  animation-duration: 1300ms;
}

.bubble4 {
  left: 70%;
  -webkit-animation-delay: 1100ms;
  -webkit-animation-duration: 700ms;
  animation-delay: 1100ms;
  animation-duration: 700ms;
}

.bubble5 {
  left: 92%;
  -webkit-animation-delay: 1300ms;
  -webkit-animation-duration: 800ms;
  animation-delay: 1300ms;
  animation-duration: 800ms;
}

/* RESPONSIVE */

@media screen and (min-width: 0px) {
  .beer-shape {
    height: 200px;
    width: 100px;
  }

  .introduction-wrapper {
    flex-direction: column;
  }
}

@media screen and (min-width: 300px) {
  .beer-shape {
    height: 300px;
    width: 150px;
  }
}

@media screen and (min-width: 650px) {
  .beer-shape {
    height: 400px;
    width: 200px;
  }
}

@media screen and (min-width: 900px) {
  .beer-shape {
    height: 600px;
    width: 300px;
  }
}

@media screen and (min-width: 1400px) {
  .beer-shape {
    height: 700px;
    width: 350px;
  }

  .introduction-wrapper {
    flex-direction: row;
  }
}
</style>
