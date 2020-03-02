<template>
  <div class="icon-wrapper">
    <svg class="icon" :width="width" :height="height">
      <use
        v-bind="{ 'xlink:href': '../assets/feather-sprite.svg#' + svgName }"
      />
    </svg>
    <slot></slot>
  </div>
</template>

<script lang="ts">
export default {
  name: 'base-icon',
  props: {
    svgName: {
      type: String,
      default: 'users'
    }
  },
  data() {
    return {
      width: 50,
      height: 50
    }
  }
}
</script>

<style scoped></style>
