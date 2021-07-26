<template>
  <div>
    <OutcomeItem
      v-for="outcome in outcomes"
      :key="outcome.id"
      :data="outcome"
    />
  </div>
</template>

<script>
import OutcomeItem from './OutcomeItem.vue'

export default {
  components: { OutcomeItem },
  computed: {
    outcomes () {
      return this.$store.state.outcomes
    }
  }
}
</script>
