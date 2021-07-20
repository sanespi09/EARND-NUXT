<template>
  <div>
    <IncomeItem v-for="income in incomes" :key="income.id" :income="income" />
  </div>
</template>

<script>
import IncomeItem from "./IncomeItem.vue";

export default {
  components: { IncomeItem },
  computed: {
    incomes() {
      return this.$store.state.incomes;
    }
  }
};
</script>
