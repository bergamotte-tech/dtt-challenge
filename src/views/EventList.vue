<template>
  <div>
    <h1>{{ $t('views.event-list.title') }}</h1>
    <event-card v-for="event in events" :key="event.id" :event="event" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import EventService from '@/data/EventService.ts'
import i18n from '@/i18n'
import EventCard from '@/components/EventCard.vue'

export default Vue.extend({
  name: 'event-list',
  components: {
    EventCard
  },
  data() {
    return {
      locale: i18n.locale,
      events: []
    }
  },
  created() {
    EventService.getEvents() // Does a get request
      .then(response => {
        this.events = response.data
      })
      .catch(error => {
        console.log('There was an error:', error.response) // Logs out the error
      })
  },
  updated() {
    this.locale = i18n.locale
  }
})
</script>

<style scoped></style>
