<template>
  <div class="category-box flex flex-center">
    <button class="clicker" @click="goToCategory()">
      <div class="description flex flex-center flex-column">
        <h3>{{ category.cat_name }}</h3>
      </div>
    </button>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'category-box',
  props: {
    category: {
      type: Object
    }
  },
  methods: {
    goToCategory() {
      const transformedName = this.category.cat_name.replace(/\s/g, '+')

      this.$router.push({
        name: this.$i18n.locale + '-category-details',
        params: { catName: transformedName }
      })
    }
  }
})
</script>

<style scoped>
.category-box {
  height: 100%;
  padding: 0.5rem 0;
  border-radius: 0.3rem;
  background-color: pink;
}
.category-box:nth-child(odd) {
  background-color: sandybrown;
}

.category-box:hover {
  cursor: pointer;
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

@media screen and (min-width: 1300px) {
}
</style>
