<template>
  <div id="age-verification" class="age-verification">
    <div class="language">
      <language-selection></language-selection>
    </div>
    <div class="padding-view content-wrapper flex flex-column flex-center">
      <h2>{{ $t('views.age-verification.title') }}</h2>
      <div class="choices-wrapper flex flex-center">
        <div class="choice flex flex-column">
          <img
            src="https://uploads-ssl.webflow.com/5c11655d98d64953510d3830/5c893a6a4793fa2a05a455a5_21A-ElSully-12oz.png"
            v-bind:alt="$t('alt.image-beer')"
          />
          <button @click="setIsUnderAge('false')">
            {{ $t('buttons.yes') }}
          </button>
        </div>

        <div v-if="!isUnderage" class="choice flex flex-column">
          <img
            src="https://uploads-ssl.webflow.com/5c11655d98d64953510d3830/5e27771504715a93a1be0816_21A-Peets-1966-CoffeeIPA-12oz-1.png"
            v-bind:alt="$t('alt.image-juice')"
          />
          <button @click="setIsUnderAge('true')">
            {{ $t('buttons.no') }}
          </button>
        </div>

        <div v-if="isUnderage" class="choice">
          <p>
            It's ok, cheer up and wait to get older ! You might as well visit
            <a href="https://www.en.d-tt.nl/" target="_blank">DTT's website</a>
            while you're here !
          </p>
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
  data() {
    return {
      isUnderage: true
    }
  },
  methods: {
    setIsUnderAge(strBool: string): void {
      if (strBool === 'true') this.isUnderage = true
      else this.isUnderage = false
      localStorage.setItem('isUnderage', strBool)
      this.displayComponent(this.isUnderage)
    },
    displayComponent(isUnderage: boolean): void {
      const target = document.getElementById('age-verification')
      if (target != null) {
        if (isUnderage) {
          target.style.display = 'block'
        } else target.style.display = 'none'
      }
    }
  },
  mounted(): void {
    if (localStorage.getItem('isUnderage') == 'true') {
      this.isUnderage = true
      //not affecting the display for demonstration purposes : every page refresh will display this AgeVerification vue
    } else this.isUnderage = false
  }
})
</script>

<style scoped>
.content-wrapper {
  padding-top: 3rem;
}

a {
  text-decoration: underline var(--text-primary);
}

.age-verification {
  position: fixed;
  z-index: 2000;
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

.language {
  position: absolute !important;
  z-index: 10;
  top: 1rem;
  left: 1rem;
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
  border-radius: 0.3rem;
  background-color: var(--background-primary);
}
.choice button::before {
  content: '';
  border-radius: 0.3rem;
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

@media screen and (min-width: 0px) {
  .choice img {
    height: 40vh;
    width: auto;
  }

  .choices-wrapper {
    flex-direction: column;
  }
}
@media screen and (min-width: 900px) {
  .choice img {
    height: 70vh;
    width: auto;
  }

  .choices-wrapper {
    flex-direction: row;
  }
}
</style>
