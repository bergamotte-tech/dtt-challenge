<template>
  <div
    class="category-box flex flex-center"
    @click="goToCategory(category.cat_name)"
  >
    <img
      src="https://kwc.ge/wp-content/uploads/2017/09/7c4486a1ffc963faa4416cb846ade68c.png"
      v-bind:alt="$t('alt.image-barrel')"
    />
    <div class="description flex flex-center flex-column">
      <h2>{{ category.cat_name }}</h2>
    </div>
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
    goToCategory(rawName: string) {
      const transformedName = rawName.replace(/\s/g, '+')
      this.$router.push({ path: this.$route.path + '/' + transformedName })
    }
  }
})
</script>

<style scoped>
.category-box {
  padding: 2rem;
  height: auto;
  background-color: pink;
}
.category-box:nth-child(odd) {
  background-color: sandybrown;
}

.category-box:hover {
  cursor: pointer;
}

.category-box img {
  width: auto;
  display: block;
  margin: 0 auto 0 0;
}

.category-box .description {
  position: relative;
  margin: 0 auto;
}

/* RESPONSIVE */

@media screen and (min-width: 0px) {
  .category-box img {
    display: none;
  }

  .category-box .description {
    height: auto;
  }
}

@media screen and (min-width: 300px) {
}

@media screen and (min-width: 650px) {
}

@media screen and (min-width: 900px) {
  .category-box .description {
    height: auto;
  }

  .category-box img {
    display: flex;
    height: 40vh;
  }
}

@media screen and (min-width: 1300px) {
  .category-box img {
    height: 50vh;
  }
}
</style>
