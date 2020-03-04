<template>
  <div id="home" class="padding-view">
    <h1>{{ $t('views.home.title') }}/</h1>
    <div class="introduction-wrapper flex flex-center">
      <div class="introduction-beer flex">
        <div id="pour"></div>
        <div class="beer-shape">
          <div class="bubble bubble1"></div>
          <div class="bubble bubble2"></div>
          <div class="bubble bubble3"></div>
          <div class="bubble bubble4"></div>
          <div class="bubble bubble5"></div>
        </div>
      </div>
      <div class="introduction-speech">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint facere
          quis rem saepe alias molestias, fugiat deserunt nulla pariatur dolorem
          vero laboriosam suscipit dicta omnis ratione dolorum. Veritatis,
          necessitatibus deleniti! Lorem ipsum, dolor sit amet consectetur
          adipisicing elit. Voluptatum quaerat aliquid tempora? A vitae maiores
          esse praesentium, nobis at alias quae illo reprehenderit blanditiis
          ducimus quia officiis voluptas suscipit. Suscipit.
        </p>
        <h3>CHEERS !</h3>
      </div>
    </div>
    <h2>{{ $t('views.home.on-tap') }}:</h2>
    <div class="items-wrapper flex flex-center">
      <div
        v-for="(item, index) in beers"
        :key="index"
        class="item-box flex"
        @click="openCan(item)"
      >
        <img
          src="https://uploads-ssl.webflow.com/5c11655d98d64953510d3830/5c893a6a4793fa2a05a455a5_21A-ElSully-12oz.png"
          v-bind:alt="$t('alt.image-beer')"
        />
        <div class="description flex flex-center flex-column">
          <h2>{{ item }}</h2>
          <p>Description of the beeeeeer</p>
        </div>
      </div>
    </div>
    <h2>{{ $t('views.home.thirsty') }}:</h2>
  </div>
</template>

<script lang="ts">
export default {
  name: 'home',
  data() {
    return {
      beers: [
        'beer1',
        'beer2',
        'beer3',
        'other',
        'other',
        'other',
        'other',
        'other',
        'other',
        'other'
      ]
    }
  },
  methods: {
    openCan(item: string): void {
      console.log(item)
      //test : https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3
      // const audio = new Audio(
      //   'https://raw.githubusercontent.com/bergamotte-tech/dtt-challenge/master/src/assets/audio/openingcan.mp3?token=ALBAPS7HTHFSVX5OFWT76XC6L4AV6'
      // )
      // audio.play()
      this.splash()
    },
    createDot(filter: HTMLDivElement, x: number, y: number): void {
      const elem = document.createElement('div')
      elem.setAttribute('class', 'waterdrop')
      elem.setAttribute(
        'style',
        'left:' +
          x +
          '%;top:' +
          y +
          '%; position: absolute; background-color: skyblue; width: 4px; height: 4px; border-radius: 0 50% 50% 50%; transform:rotate(45deg); box-shadow: 1px 1px 7px #212121;'
      )

      filter.appendChild(elem)
    },
    async splash(): Promise<void> {
      const filter = document.createElement('div')
      filter.setAttribute('id', 'filter')
      filter.setAttribute(
        'style',
        'position : fixed; z-index: 5500; width: 100vw; height: 100vh'
      )

      for (let index = 0; index < 400; index++) {
        this.createDot(
          filter,
          Math.floor(Math.random() * 100),
          Math.floor(Math.random() * 100)
        )
      }

      const app = document.getElementById('app')
      if (app != null) {
        app.insertBefore(filter, app.childNodes[0])
        await new Promise(r => setTimeout(r, 2000))
        console.log('its been 2 secs')
        filter.parentNode
          ? filter.parentNode.removeChild(filter)
          : console.log('parentNode is null')
      }
    }
  }
}
</script>

<style scoped>
/* GENERAL */

#home {
  background-color: blueviolet;
  min-height: 100%;
}

.introduction-wrapper {
  width: 100%;
  height: auto;
}

.introduction-beer {
  justify-content: center;
  align-items: center;
  height: auto;
  min-width: 30vw;
  margin: auto;
  padding: 2rem;
}

.beer-shape::before {
  content: '';
  z-index: -1;
  position: absolute;
  bottom: 2%;
  left: 0;
  right: 0;
  background-color: yellowgreen;
  width: 92%;
  height: 96%;
  margin: auto;
  transition: transform 0.25s ease-in-out;
  border-radius: 2% / 25%;
}

.beer-shape:hover {
  cursor: pointer;
}

.introduction-speech h3 {
  float: right;
}

.items-wrapper {
  width: 100%;
  display: grid;
  grid-gap: 0px;
  background-color: #fff;
  color: #444;
}

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
.beer-shape {
  z-index: 1;
  position: relative;
  background-color: darkgrey;
  border-radius: 2% / 25%;
}

@media screen and (min-width: 0px) {
  .beer-shape {
    height: 200px;
    width: 100px;
  }

  .introduction-wrapper {
    flex-direction: column;
  }

  .items-wrapper {
    grid-template-columns: 100%;
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

  .introduction-wrapper {
    flex-direction: row;
  }

  .items-wrapper {
    grid-template-columns: 50% 50%;
  }
}
</style>
