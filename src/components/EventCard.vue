<template>
  <router-link
    :to="{
      name: locale + '-event-show',
      params: { id: event.id }
    }"
  >
    <div class="event-card -shadow">
      <span class="eyebrow">@{{ event.time }} on {{ event.date }}</span>
      <h4 class="title">{{ event.title }}</h4>
      <base-icon svgName="users"
        >{{ event.attendees.length }} attending</base-icon
      >
    </div>
  </router-link>
</template>

<script>
import i18n from '@/i18n'
import BaseIcon from '@/components/BaseIcon'

export default {
  components: {
    BaseIcon
  },
  data() {
    return {
      locale: i18n.locale
    }
  },
  updated() {
    this.locale = i18n.locale
  },
  props: {
    event: {
      type: Object
    }
  }
}
</script>

<style scoped>
h4 {
  color: green;
}

.event-card {
  padding: 20px;
  margin-bottom: 24px;
  transition: all 0.2s linear;
  cursor: pointer;
}
.event-card:hover {
  transform: scale(1.01);
  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2), 0 1px 15px 0 rgba(0, 0, 0, 0.19);
}
.event-card > .title {
  margin: 0;
}

.event-link {
  color: black;
  text-decoration: none;
  font-weight: 100;
}
</style>
