<template>
  <div class="item-box flex flex-center" @click="openCan()">
    <img
      src="https://uploads-ssl.webflow.com/5c11655d98d64953510d3830/5c893a6a4793fa2a05a455a5_21A-ElSully-12oz.png"
      v-bind:alt="$t('alt.image-beer')"
    />
    <div class="description flex flex-center flex-column">
      <h2>{{ item.name }}</h2>
      <p>{{ item.cat_name }}</p>
      <p>{{ item.country }}</p>
      <p>{{ item.style_name }}</p>
      <p>{{ item.ibu }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'item-box',
  props: {
    item: {
      type: Object
    }
  },
  methods: {
    openCan(): void {
      const audio = new Audio('http://bergamotte.tech/sounds/openingcan.mp3')
      audio.play()
    }
  }
})
</script>

<style scoped>
.item-box {
  background-color: pink;
}
.item-box:nth-child(3n + 1) {
  background-color: sandybrown;
}

.item-box:hover {
  cursor: pointer;
}

.item-box img {
  width: auto;
  display: block;
  margin: 0 auto;
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
    transition: width linear 0.3s, opacity ease-in 0.1s;
  }

  .item-box img {
    height: 80%;
    transform: none;
    transition: linear 0.2s;
  }

  .item-box:hover .description {
    width: 100%;
    opacity: 1;
    transition: width linear 0.4s, opacity ease-out 0.2s 0.2s;
  }
  .item-box:hover img {
    transform: rotate(-10deg);
    transition: linear 0.1s;
  }
}
</style>
