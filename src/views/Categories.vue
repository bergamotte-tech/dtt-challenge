<template>
  <div id="categories" class="padding-view">
    <h1>{{ $t('views.categories.title') }}/</h1>

    <div class="items-wrapper flex flex-center">
      <loader v-if="categories.length < 1"> </loader>
      <category-box
        v-for="category in categories"
        :key="category.id"
        :category="category"
      ></category-box>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { CategoryClass } from '@/data/BeerInterface'
import BeerService from '@/data/BeerService'
import CategoryBox from '@/components/others/CategoryBox.vue'
import Loader from '@/components/others/Loader.vue'

export default Vue.extend({
  name: 'categories',
  components: {
    Loader,
    CategoryBox
  },
  data() {
    return {
      categories: Array<CategoryClass>()
    }
  },
  created(): void {
    BeerService.getCategories().then(
      categories => (this.categories = categories)
    )
  }
})
</script>

<style scoped>
/* GENERAL */

#categories {
  background-color: blueviolet;
  min-height: 100%;
}

.items-wrapper {
  width: 100%;
  display: grid;
  grid-gap: 0px;
}

/* RESPONSIVE */

@media screen and (min-width: 0px) {
  .items-wrapper {
    grid-template-columns: 100%;
  }
}

@media screen and (min-width: 300px) {
}

@media screen and (min-width: 650px) {
}

@media screen and (min-width: 900px) {
  .items-wrapper {
    grid-template-columns: 50% 50%;
  }
}

@media screen and (min-width: 1400px) {
}
</style>
