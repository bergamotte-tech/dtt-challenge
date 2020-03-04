<template>
  <div id="nav" class="flex">
    <div class="nav-wrapper flex" id="menuHidden">
      <div class="logo-language-wrapper flex flex-row flex-center">
        <p>LOGO</p>
        <language-selection></language-selection>
      </div>

      <div class="routes-wrapper flex flex-center">
        <div class="route" @click="routeClicked()">
          <router-link
            :to="{
              name: locale + '-home'
            }"
          >
            {{ $t('components.navtop.navbar.title-home') }}
          </router-link>
        </div>

        <div class="route" @click="routeClicked()">
          <router-link
            :to="{
              name: locale + '-categories'
            }"
          >
            {{ $t('components.navtop.navbar.title-categories') }}
          </router-link>
        </div>

        <div class="route" @click="routeClicked()">
          <router-link
            :to="{
              name: locale + '-random'
            }"
          >
            {{ $t('components.navtop.navbar.title-random') }}
          </router-link>
        </div>
      </div>
    </div>

    <div class="hamburger flex flex-center" @click="hamburgerClicked()">
      <i id="hamburger-logo" class="material-icons">
        menu
      </i>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import i18n from '@/i18n'
import LanguageSelection from '@/components/navtop/LanguageSelection.vue'

let hamburgerIsOpen = false

export default Vue.extend({
  name: 'navbar',
  components: {
    LanguageSelection
  },
  data() {
    return {
      locale: i18n.locale
    }
  },
  methods: {
    routeClicked(): void {
      this.reset()
    },
    hamburgerClicked(): void {
      hamburgerIsOpen = !hamburgerIsOpen

      const hamburgerLogo = document.getElementById('hamburger-logo')

      if (hamburgerLogo != null) {
        if (hamburgerIsOpen) {
          this.hideMenu(false)
          hamburgerLogo.innerHTML = 'close'
        } else {
          this.hideMenu(true)
          hamburgerLogo.innerHTML = 'menu'
        }
      }
    },
    hideMenu(bool: boolean): void {
      const menuHiddenElement = document.getElementById('menuHidden')
      if (bool) {
        menuHiddenElement
          ? (menuHiddenElement.style.display = 'none')
          : console.log('error element does not exist')
      } else {
        menuHiddenElement
          ? (menuHiddenElement.style.display = 'flex')
          : console.log('error element does not exist')
      }
    },
    reset(): void {
      window.scrollTo(0, 0)
      this.locale = i18n.locale
      this.hideMenu(true)
      hamburgerIsOpen = true
      this.hamburgerClicked()
    }
  },
  watch: {
    $route(to, from) {
      this.reset()
    }
  },
  updated() {
    this.reset()
  }
})
</script>

<style scoped>
.nav-wrapper {
  position: fixed;
  z-index: 800;
  width: 100%;
  background-color: chocolate;
}

.route {
  margin: 0 1rem;
}

/* RESPONSIVE */
@media screen and (min-width: 0px) {
  .hamburger {
    background-color: crimson;
    z-index: 801;
    position: fixed;
    bottom: 4vh;
    right: 4vh;
    border-radius: 50%;
    width: 72px;
    height: 72px;
  }
  .hamburger i {
    transform: scale(1.8);
  }
  .hamburger:hover {
    cursor: pointer;
  }

  .nav-wrapper {
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    height: 100%;
  }

  .logo-language-wrapper {
    width: 100%;
    height: 5rem;
    background-color: aqua;
  }
  .logo-language-wrapper .language-selection {
    margin: 0 0 0 auto;
  }

  .routes-wrapper {
    margin: 0 auto;
    height: 100%;
    width: auto;
    flex-direction: column;
  }

  #menuHidden {
    display: none;
  }
}

@media screen and (min-width: 300px) {
}

@media screen and (min-width: 650px) {
  .hamburger {
    margin: 0;
    display: none;
  }

  .nav-wrapper {
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    height: 5rem;
  }

  .logo-language-wrapper {
    width: auto;
    background-color: transparent;
  }
  .logo-language-wrapper .language-selection {
    margin: auto;
  }

  .routes-wrapper {
    margin: 0 0 0 auto;
    flex-direction: row;
  }

  #menuHidden {
    display: flex !important;
  }
}

@media screen and (min-width: 900px) {
}
</style>
