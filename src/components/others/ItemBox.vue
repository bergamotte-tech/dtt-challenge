<template>
  <div class="item-box flex" @click="openCan()">
    <img
      src="https://uploads-ssl.webflow.com/5c11655d98d64953510d3830/5c893a6a4793fa2a05a455a5_21A-ElSully-12oz.png"
      v-bind:alt="$t('alt.image-beer')"
    />
    <div class="description flex flex-center flex-column">
      <h2>{{ item.name }}</h2>
      <p>{{ item.description }}</p>
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
      // this.splash() //creates a splash on screen, but removed for accessibility reasons
    }
    // createDot(filter: HTMLDivElement, x: number, y: number): void {
    //   const elem = document.createElement('div')
    //   elem.setAttribute('class', 'waterdrop')
    //   elem.setAttribute(
    //     'style',
    //     'left:' +
    //       x +
    //       '%;top:' +
    //       y +
    //       '%; position: absolute; background-color: skyblue; width: 4px; height: 4px; border-radius: 0 50% 50% 50%; transform:rotate(45deg); box-shadow: 1px 1px 7px #212121;'
    //   )

    //   filter.appendChild(elem)
    // }
    // async splash(): Promise<void> {
    //   const filter = document.createElement('div')
    //   filter.setAttribute('id', 'filter')
    //   filter.setAttribute(
    //     'style',
    //     'position : fixed; z-index: 5500; width: 100vw; height: 100vh'
    //   )

    //   for (let index = 0; index < 400; index++) {
    //     this.createDot(
    //       filter,
    //       Math.floor(Math.random() * 100),
    //       Math.floor(Math.random() * 100)
    //     )
    //   }

    //   const app = document.getElementById('app')
    //   if (app != null) {
    //     app.insertBefore(filter, app.childNodes[0])
    //     await new Promise(r => setTimeout(r, 2000))
    //     console.log('its been 2 secs')
    //     filter.parentNode
    //       ? filter.parentNode.removeChild(filter)
    //       : console.log('parentNode is null')
    //   }
    // }
  }
})
</script>

<style scoped>
.item-box {
  background-color: pink;
  height: 65vh;
}
.item-box:nth-child(3n + 1) {
  background-color: sandybrown;
}
.item-box img {
  max-height: 100%;
  width: auto;
  display: block; /* remove extra space below image */
  margin: 0 auto;
  transition: linear 0.2s;
}
.item-box .description {
  width: 0;
  opacity: 0;
  transition: width linear 0.3s, opacity ease-in 0.1s;
}
.item-box:hover {
  cursor: pointer;
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

/* RESPONSIVE */

@media screen and (min-width: 0px) {
}

@media screen and (min-width: 300px) {
}

@media screen and (min-width: 650px) {
}

@media screen and (min-width: 900px) {
}
</style>
