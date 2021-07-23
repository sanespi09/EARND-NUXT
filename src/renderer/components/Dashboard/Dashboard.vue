<template>
  <div class="mx-auto flex flex-col max-w-xs w-5/6">
    <div class="relative flex text-white gap-1">
      <Tab
        text="Ingresos"
        :is-pressed="selectedTab === 'IncomeView'"
        @tab-click="onTabChange('IncomeView')"
      />
      <Tab
        text="Gastos"
        :is-pressed="selectedTab === 'OutcomeView'"
        @tab-click="onTabChange('OutcomeView')"
      />
    </div>
    <div
      class="relative z-0 rounded-b-lg rounded-tr-lg w-full h-96 bg-gray-600 shadow overflow-hidden"
    >
      <keep-alive>
        <component :is="selectedTab" :props="user" />
      </keep-alive>
    </div>
    <div class="flex flex-none justify-end relative bottom-4">
      <AddButton @add-click="toggleAddModal" />
    </div>
  </div>
</template>

<script>
import Tab from "./Tab.vue";
import IncomeView from "../Income/IncomeView.vue";
import OutcomeView from "../Outcome/OutcomeView.vue";
import AddButton from "./AddButton.vue";

export default {
  components: { Tab, IncomeView, OutcomeView, AddButton },
  props: {
    user: Object
  },
  data() {
    return {
      selectedTab: "IncomeView"
    };
  },
  methods: {
    onTabChange(tab) {
      this.selectedTab = tab;
    },
    toggleAddModal() {
      this.$store.commit("ui/toggleModal");
    }
  }
};
</script>
