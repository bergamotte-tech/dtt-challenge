<template>
  <div class="item-box flex flex-center">
    <div class="color-line"></div>
    <button v-if="!displayDetails" class="clicker" @click="openCan()">
      <img v-bind:src="this.getNextImage()" v-bind:alt="$t('alt.image-beer')" />
    </button>

    <img
      v-if="displayDetails"
      v-bind:src="this.getNextImage()"
      v-bind:alt="$t('alt.image-beer')"
    />

    <div class="description flex flex-center flex-column">
      <h2 v-if="!displayDetails">{{ beer.name }}</h2>
      <p>{{ beer.country }}</p>
      <p v-if="displayDetails">
        {{ $t('components.other.itembox.text-city') }}: {{ beer.city }}
      </p>
      <p>{{ beer.style_name }}</p>
      <p>{{ $t('components.other.itembox.text-ibu') }}: {{ beer.ibu }}</p>
      <p v-if="displayDetails">{{ beer.website }}</p>
      <p v-if="displayDetails">
        {{ $t('components.other.itembox.text-product-id') }}: {{ beer.id }}
      </p>
    </div>

    <div class="similar-display-name flex flex-center">
      <p>{{ beer.name }}</p>
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
  background-color: transparent;
}

.item-box * {
  z-index: 2;
}

.item-box .clicker {
  margin: 0 auto;
}

.item-box img {
  width: auto;
  height: 100%;
  display: block;
}

.description {
  margin: 0 2rem;
  height: 95%;
}

.color-line {
  position: absolute;
  margin: auto;
  z-index: 1;
  background-color: var(--text-secondary);

  width: 100%;
  box-sizing: border-box;
}

.item-box:nth-child(odd) .color-line {
  background-color: var(--button-primary);
}

.description * {
  color: var(--background-primary);
}

.item-box:nth-child(odd) .description * {
  color: var(--text-secondary);
}

.details img {
  transform: rotate(-10deg);
}

.similar-display {
  flex-direction: column;
}

.similar-display .description {
  display: none;
}

.similar-display-name {
  display: none;
}

.similar-display .similar-display-name {
  display: block;
}

.similar-display {
  width: 100%;
  background-color: transparent !important;
}

/* RESPONSIVE */
@media screen and (min-width: 0px) {
  .color-line {
    height: 100%;
  }

  .similar-display .color-line {
    height: 15%;
  }

  .item-box .description {
    opacity: 1;
  }
  .item-box img {
    transform: rotate(-10deg);
  }

  .item-box img:hover {
    cursor: pointer;
  }
}

@media screen and (min-width: 300px) {
}

@media screen and (min-width: 650px) {
}

@media screen and (min-width: 900px) {
  /* END OF "MOBILE LIKE" DISPLAY FOR ITEMS */

  .item-box .description {
    overflow: hidden;
    opacity: 0;
    width: auto;
    max-width: 0;
    transition: max-width linear 0.3s 0.2s, opacity linear 0.2s;
  }

  .item-box img {
    transform: none;
    transition: linear 0.2s;
  }

  .color-line {
    height: 15%;
    transition: ease-in 0.3s;
  }

  .item-box:hover .color-line {
    height: 100%;
    transition: ease-out 0.4s;
    border-radius: 10px;
  }

  .item-box:hover .description {
    max-width: 100%;
    opacity: 1;
    transition: max-width linear 0.4s, opacity ease-out 0.2s 0.4s;
  }
  .item-box:hover img {
    transform: rotate(-10deg);
    transition: linear 0.1s;
  }
}

@media screen and (min-width: 0px) {
  .spinning .color-line {
    height: 100%;
  }

  .spinning img {
    transform: none;
    transition: none;
  }

  .spinning .description {
    max-width: 0;
    opacity: 0;
    transition: none;
  }
}

@media screen and (min-width: 900px) {
  .spinning .color-line {
    height: 15%;
  }

  .spinning:hover .color-line {
    height: 15%;
  }

  .spinning:hover .color-line {
    transition: none;
    border-radius: 0px;
  }
  .spinning:hover .description {
    max-width: 0;
    opacity: 0;
    transition: none;
  }
  .spinning:hover img {
    transform: none;
    transition: none;
  }
}
</style>
