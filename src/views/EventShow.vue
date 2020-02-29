<template>
  <div>
    <h1>{{ $t('views.event-show.title') }}</h1>
    <event-card />
  </div>
</template>

<script lang="ts">
import EventCard from '@/components/EventCard.vue'

export default {
  name: 'event-show',
  props: ['id'],
  components: {
    EventCard
  }
}
</script>

<style scoped></style>
