<template>
  <div id="age-verification" class="age-verification">
    <div class="menu">
      <!-- TODO improve logo + language selector -->
      <language-selection></language-selection>
    </div>
    <div class="flex flex-column flex-center">
      <h1>{{ $t('views.age-verification.title') }}</h1>
      <div class="choices-wrapper flex flex-center flex-row">
        <div class="choice flex flex-column">
          <img
            src="https://uploads-ssl.webflow.com/5c11655d98d64953510d3830/5c893a6a4793fa2a05a455a5_21A-ElSully-12oz.png"
            v-bind:alt="$t('alt.image-beer')"
          />
          <button @click="setIsLegalAge('true')">
            {{ $t('buttons.yes') }}
          </button>
        </div>
        <div class="choice flex flex-column">
          <img
            src="https://uploads-ssl.webflow.com/5c11655d98d64953510d3830/5e27771504715a93a1be0816_21A-Peets-1966-CoffeeIPA-12oz-1.png"
            v-bind:alt="$t('alt.image-juice')"
          />
          <button @click="setIsLegalAge('false')">
            {{ $t('buttons.no') }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import LanguageSelection from '@/components/navtop/LanguageSelection.vue'

export default Vue.extend({
  name: 'age-verification',
  components: {
    LanguageSelection
  },
  methods: {
    setIsLegalAge(strBool: string): void {
      localStorage.setItem('isLegalAge', strBool)
      this.displayComponent(strBool === 'false')
    },
    displayComponent(isUnderage: boolean): void {
      const target = document.getElementById('age-verification')
      if (target != null) {
        if (isUnderage) target.style.display = 'block'
        else target.style.display = 'block' // 'none'
      }
    }
  },

  mounted(): void {
    localStorage.getItem('isLegalAge') === 'false'
      ? this.displayComponent(true)
      : this.displayComponent(false)
  }
})
</script>

<style scoped>
.age-verification {
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: blueviolet;
  overflow: hidden;

  justify-content: space-around;
  align-items: center;
}
.age-verification * {
  position: relative;
}

.menu {
  position: absolute !important;
  z-index: 10;
  top: 4rem;
  left: 5rem;
}

.choice button {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  -webkit-transform: translate(-50%, -50%);
  z-index: 1;
  font-size: 40px;
  font-family: inherit;
  color: white;
  padding: 0.5em 1em;
  outline: none;
  border: none;
  background-color: var(--bgrd-primary);
}
.choice button::before {
  content: '';
  z-index: -1;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: var(--text-secondary);
  transform-origin: center right;
  transform: scaleX(0);
  transition: transform 0.25s ease-in-out;
}
.choice button:hover {
  cursor: pointer;
}
.choice button:hover::before {
  transform-origin: center left;
  transform: scaleX(1);
}

.choice img {
  height: 70vh;
  width: auto;
}
</style>
