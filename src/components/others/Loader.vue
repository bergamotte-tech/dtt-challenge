<template>
  <div class="loader flex flex-center">
    <div class="balls">
      <div></div>
      <div></div>
      <div></div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'loader'
})
</script>

<style scoped>
.loader {
  position: absolute;
  width: 100%;
  height: auto;
}
.balls {
  width: 4em;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: space-between;
}

.balls div {
  width: 0.8em;
  height: 0.8em;
  border-radius: 50%;
  background-color: #fc2f70;
}

.balls div:nth-of-type(1) {
  transform: translateX(-100%);
  animation: left-swing 0.5s ease-in alternate infinite;
}

.balls div:nth-of-type(3) {
  transform: translateX(-95%);
  animation: right-swing 0.5s ease-out alternate infinite;
}

@keyframes left-swing {
  50%,
  100% {
    transform: translateX(95%);
  }
}

@keyframes right-swing {
  50% {
    transform: translateX(-95%);
  }
  100% {
    transform: translateX(100%);
  }
}
</style>
