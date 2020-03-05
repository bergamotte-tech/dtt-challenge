<template>
  <div class="item-box flex flex-center">
    <button v-if="!displayDetails" class="clicker" @click="openCan()">
      <img v-bind:src="this.getNextImage()" v-bind:alt="$t('alt.image-beer')" />
    </button>

    <img
      v-if="displayDetails"
      v-bind:src="this.getNextImage()"
      v-bind:alt="$t('alt.image-beer')"
    />

    <div class="description flex flex-center flex-column">
      <h2>{{ beer.name }}</h2>
      <p>{{ beer.cat_name }}</p>
      <p>{{ beer.country }}</p>
      <p>{{ beer.style_name }}</p>
      <p>IBU: {{ beer.ibu }}</p>
      <p v-if="displayDetails">City: {{ beer.city }}</p>
      <p v-if="displayDetails">{{ beer.website }}</p>
      <p v-if="displayDetails">ID: {{ beer.id }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'item-box',
  props: {
    beer: {
      type: Object
    },
    displayDetails: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    openCan(): void {
      const audio = new Audio('http://bergamotte.tech/sounds/openingcan.mp3')
      audio.play()

      this.$router.push({
        name: this.$i18n.locale + '-details',
        params: { idbeer: this.beer.id }
      })
    },
    getNextImage(): string {
      const listOfImages: string[] = [
        'https://uploads-ssl.webflow.com/5c11655d98d64953510d3830/5c87f2063af90361ec6e78c9_21A-BrewFreeOrDie-12oz.png',
        'https://uploads-ssl.webflow.com/5c11655d98d64953510d3830/5c87e9e3b774e464f4203493_21A-BrewFreeBloodOrange-12oz.png',
        'https://uploads-ssl.webflow.com/5c11655d98d64953510d3830/5c8983d7372666468a9690c4_21A-Sparkale-12oz.png',
        'https://uploads-ssl.webflow.com/5c11655d98d64953510d3830/5c893a6a4793fa2a05a455a5_21A-ElSully-12oz.png',
        'https://uploads-ssl.webflow.com/5c11655d98d64953510d3830/5c7ec4fec110bf46b686441f_21A-BlahBlahBlah-12oz.png',
        'https://uploads-ssl.webflow.com/5c11655d98d64953510d3830/5c89872ae1917deb25a6f079_21A-HellorHighWatermelon-Can.png',
        'https://uploads-ssl.webflow.com/5c11655d98d64953510d3830/5c13e9e1aad968540738870a_21A-TastyIPA-12oz.png',
        'https://uploads-ssl.webflow.com/5c11655d98d64953510d3830/5c89858de1917d2586a6ee5f_21A-FiresideChat-Can.png',
        'https://uploads-ssl.webflow.com/5c11655d98d64953510d3830/5e27771504715a93a1be0816_21A-Peets-1966-CoffeeIPA-12oz-1.png',
        'https://uploads-ssl.webflow.com/5c11655d98d64953510d3830/5d927982c092fb4d31647359_21A-MonksBlood-12oz.png'
      ]
      const item = listOfImages[this.beer.id % listOfImages.length]
      return item
    }
  }
})
</script>

<style scoped>
.item-box {
  background-color: pink;
}

.item-box:nth-child(odd) {
  background-color: sandybrown;
}

.item-box .clicker {
  margin: 0 auto;
}

.item-box img {
  width: auto;
  display: block;
}

/* RESPONSIVE */

@media screen and (min-width: 0px) {
  .item-box .description {
    width: 100%;
    opacity: 1;
    margin: 0 2rem;
  }
  .item-box img {
    height: 50vw;
    transform: rotate(-10deg);
  }
}

@media screen and (min-width: 300px) {
}

@media screen and (min-width: 650px) {
}

@media screen and (min-width: 900px) {
  /* END OF "MOBILE LIKE" DISPLAY FOR ITEMS */

  .item-box {
    height: 600px;
  }

  .item-box .description {
    overflow: hidden;
    width: 0;
    opacity: 0;
    transition: width linear 0.3s 0.2s, opacity linear 0.2s;
  }

  .item-box img {
    height: 80%;
    transform: none;
    transition: linear 0.2s;
  }

  .item-box:hover .description {
    width: 100%;
    opacity: 1;
    transition: width linear 0.4s, opacity ease-out 0.2s 0.4s;
  }
  .item-box:hover img {
    transform: rotate(-10deg);
    transition: linear 0.1s;
  }
}

.similar .description {
  display: none;
}

.details .description {
  width: 100%;
  opacity: 1;
  margin: 0 2rem;
}
.details img {
  transform: rotate(-10deg);
}
</style>
