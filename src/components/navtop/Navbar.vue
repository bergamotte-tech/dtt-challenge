<template>
  <div id="nav" class="flex">
    <div class="nav-wrapper flex" id="menuHidden">
      <div class="logo-language-wrapper flex flex-row flex-center">
        <img
          src="@/assets/images/Logo.png"
          v-bind:alt="$t('alt.logo')"
          @click="goToHome()"
        />
        <language-selection></language-selection>
      </div>

      <div class="routes-wrapper flex flex-center">
        <div class="route" @click.stop="routeClicked()">
          <router-link
            :to="{
              name: locale + '-home'
            }"
          >
            {{ $t('components.navtop.navbar.title-home') }}
          </router-link>
        </div>

        <div class="route" @click.stop="routeClicked()">
          <router-link
            :to="{
              name: locale + '-categories'
            }"
          >
            {{ $t('components.navtop.navbar.title-categories') }}
          </router-link>
        </div>

        <div class="route" @click.stop="routeClicked()">
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

    <div class="hamburger flex flex-center" @click.stop="hamburgerClicked()">
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
          hamburgerLogo.style.transform = 'scale(2.2)'
          this.hideMenu(false)
          hamburgerLogo.innerHTML = 'close'
        } else {
          hamburgerLogo.style.transform = 'scale(1.8)'
          this.hideMenu(true)
          hamburgerLogo.innerHTML = 'menu'
        }
      }
    },
    hideMenu(bool: boolean): void {
      const menuHiddenElement = document.getElementById('menuHidden')
      if (bool) {
        if (menuHiddenElement) menuHiddenElement.style.display = 'none'
      } else {
        if (menuHiddenElement) menuHiddenElement.style.display = 'flex'
      }
    },
    reset(): void {
      window.scrollTo(0, 0)
      this.locale = i18n.locale
      this.hideMenu(true)
      hamburgerIsOpen = true
      this.hamburgerClicked()
    },
    goToHome(): void {
      this.$router.push({ name: this.$i18n.locale + '-home' })
    }
  },
  watch: {
    $route() {
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
  padding: 0;
}

.route {
  margin: 0 1rem;
}

img:hover {
  cursor: pointer;
}

.logo-language-wrapper {
  padding: 1rem;
}

.logo-language-wrapper * {
  margin: 1rem;
}

.logo-language-wrapper img {
  height: 90%;
  width: auto;
}

/* RESPONSIVE */
@media screen and (min-width: 0px) {
  .hamburger {
    background-color: var(--background-secondary);
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
    transition: ease-in-out 0.3s;
  }

  .nav-wrapper {
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    height: 100%;
    background-color: var(--background-secondary);
  }

  .logo-language-wrapper {
    width: 100%;
    height: 5rem;
    background-color: var(--background-third);
    justify-content: space-between;
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

  .routes-wrapper a {
    font-size: 300%;
  }

  .route a {
    color: var(--text-primary) !important;
  }

  .route .router-link-exact-active {
    color: var(--text-secondary) !important;
  }

  #menuHidden {
    display: none;
  }
}

@media screen and (min-width: 300px) {
}

@media screen and (min-width: 900px) {
  .hamburger {
    margin: 0;
    display: none;
  }

  .nav-wrapper {
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    height: 5rem;
    background-color: var(--background-third);
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

  .routes-wrapper a {
    font-size: 200%;
  }

  #menuHidden {
    display: flex !important;
  }
}

@media screen and (min-width: 900px) {
}
</style>
