<template>
  <div id="app">
    <age-verification />
    <navbar />
    <transition name="fade" mode="out-in">
      <router-view />
    </transition>
    <footerbar />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Navbar from '@/components/navtop/Navbar.vue'
import Footerbar from '@/components/navbottom/Footerbar.vue'
import AgeVerification from '@/components/others/AgeVerification.vue'

export default Vue.extend({
  name: 'app',
  components: {
    Footerbar,
    Navbar,
    AgeVerification
  },
  mounted() {
    if (!localStorage.getItem('isLegalAge'))
      localStorage.setItem('isLegalAge', 'false')
  }
})
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Patrick+Hand&display=swap');
@import url('https://fonts.googleapis.com/css?family=Noticia+Text&display=swap');
/* @import url('https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap'); */

.fade-enter-active,
.fade-leave-active {
  transition-duration: 0.3s;
  transition-property: opacity;
  transition-timing-function: ease;
}

.fade-enter,
.fade-leave-active {
  opacity: 0;
}

:root {
  font-size: 16px;
  --beer-blue: #04d9d9;
  --beer-green: #02734a;
  --beer-yellow: #f2d338;
  --beer-orange: #f25c05;
  --beer-red: #f23838;

  --text-primary: #ffffff;
  --text-secondary: #ff671b;
  --bgrd-primary: #191919;
  --bgrd-secondary: #f9f9f9;
}

::selection,
::-moz-selection,
::-webkit-selection {
  color: var(--text-secondary);
  background-color: var(--bgrd-primary);
}

::-webkit-scrollbar {
  width: 0.25rem;
}
::-webkit-scrollbar-thumb {
  background: var(--text-secondary);
}

::-webkit-scrollbar-track {
  background: var(--bgrd-secondary);
}

* {
  margin: 0;
  padding: 0;
}

html {
  width: 100%;
  min-height: 100%;
}

body {
  scrollbar-face-color: var(--text-secondary);
  scrollbar-track-color: var(--bgrd-secondary);
}

#app {
  min-height: 100vh;
  width: 100%;
  box-sizing: border-box;
  padding: 0;
  margin: 0;

  font-family: 'Patrick Hand', cursive;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;

  background-color: var(--bgrd-primary);
  color: var(--text-primary);
}

.hidden {
  display: none;
}

.flex {
  display: flex;
}

.flex-center {
  justify-content: center;
  align-items: center;
}

.flex-column {
  flex-direction: column;
}

.flex-row {
  flex-direction: row;
}

body * {
  margin: 0;
  font-family: 'Patrick Hand', cursive;
  font-weight: 400;
  font-size: 16px;
  line-height: 1.5;
}

hr {
  box-sizing: content-box;
  height: 0;
}

a {
  color: var(--text-primary);
  font-weight: 600;
  background-color: transparent;
  text-decoration: none;
}
img {
  border-style: none;
  width: 100%;
}
h1,
h2,
h3,
h4,
h5,
h6,
#nav .route * {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-family: 'Noticia Text', serif;
}

/* RESPONSIVE */
@media screen and (min-width: 0px) {
  h1 {
    font-size: 40px;
  }
  h2 {
    font-size: 22px;
  }
  h3 {
    font-size: 19px;
  }
  p {
    font-size: 13px;
  }
  a {
    font-size: 30px;
  }
  .padding-view {
    padding: 1rem 1rem 2rem 1rem;
  }
}

@media screen and (min-width: 300px) {
  h1 {
    font-size: 50px;
  }
  h2 {
    font-size: 25px;
  }
  h3 {
    font-size: 22px;
  }
  p {
    font-size: 16px;
  }
  a {
    font-size: 34px;
  }
}

@media screen and (min-width: 650px) {
  h1 {
    font-size: 62px;
  }
  h2 {
    font-size: 30px;
  }
  h3 {
    font-size: 25px;
  }
  p {
    font-size: 19px;
  }
  a {
    font-size: 37px;
  }

  .padding-view {
    padding: 5rem;
  }
}

@media screen and (min-width: 900px) {
  h1 {
    font-size: 90px;
  }
  h2 {
    font-size: 38px;
  }
  h3 {
    font-size: 28px;
  }
  p {
    font-size: 24px;
  }
  a {
    font-size: 40px;
  }
}

h1,
h2,
h3,
h4,
h5,
h6,
p {
  font-weight: 700;
}

b,
strong {
  font-weight: bolder;
}
small {
  font-size: 80%;
}
.-text-error {
  color: tomato;
}
.-shadow {
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.2), 0 1px 5px 0 rgba(0, 0, 0, 0.13);
}
button,
label,
input,
optgroup,
select,
textarea {
  display: inline-flex;
  font-size: 100%;
  line-height: 1.15;
  margin: 0;
}
button,
input {
  overflow: visible;
}
button,
select {
  text-transform: none;
}
button:hover {
  cursor: pointer;
}
button,
[type='button'],
[type='reset'],
[type='submit'] {
  -webkit-appearance: none;
}
button::-moz-focus-inner,
[type='button']::-moz-focus-inner,
[type='reset']::-moz-focus-inner,
[type='submit']::-moz-focus-inner {
  border-style: none;
  padding: 0;
}
button:-moz-focusring,
[type='button']:-moz-focusring,
[type='reset']:-moz-focusring,
[type='submit']:-moz-focusring {
  outline: 2px solid var(--text-secondary);
}
label {
  color: rgba(0, 0, 0, 0.5);
  font-weight: 700;
}
input,
textarea {
  box-sizing: border-box;
  border: solid 1px rgba(0, 0, 0, 0.4);
}
textarea {
  width: 100%;
  overflow: auto;
  font-size: 20px;
}
[type='checkbox'],
[type='radio'] {
  box-sizing: border-box;
  padding: 0;
}
[type='number']::-webkit-inner-spin-button,
[type='number']::-webkit-outer-spin-button {
  height: auto;
}
[type='search'] {
  -webkit-appearance: textfield;
  outline-offset: -2px;
}
[type='search']::-webkit-search-decoration {
  -webkit-appearance: none;
}
[type='text'],
[type='number'],
[type='search'],
[type='password'] {
  height: 52px;
  width: 100%;
  padding: 0 10px;
  font-size: 20px;
}
[type='text']:focus,
[type='number']:focus,
[type='search']:focus,
[type='password']:focus {
  border-color: var(--text-secondary);
}
::-webkit-file-upload-button {
  -webkit-appearance: button;
  font: inherit;
}
[hidden] {
  display: none;
}

.items-wrapper {
  width: 100%;
  display: grid;
  grid-gap: 0px;
  background-color: inherit;
  color: #444;
}

@media screen and (min-width: 0px) {
  .items-wrapper {
    grid-template-columns: 100%;
  }
}

@media screen and (min-width: 1400px) {
  .items-wrapper {
    grid-template-columns: 50% 50%;
  }
}

.clicker,
.clicker:hover,
.clicker:active {
  overflow: hidden;
  transform: initial;
  width: 100%;
  height: 100%;
  background: none;
  border: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.clicker:active {
  transform: scale(1.05);
  transition: ease-in-out 0.1s;
}
</style>
