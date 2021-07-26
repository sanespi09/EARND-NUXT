<template>
  <div
    class="item flex p-2 pl-6 bg-green-300 border-b-2 border-gray-800 items-center justify-between cursor-pointer"
  >
    <div class="w-40">{{ income.title }}</div>
    <div class="flex !flex-none pl-24 justify-center w-20">
      <div
        class="bg-green-200 px-2 rounded font-mono text-sm flex-initial w-auto items-center leading-6"
      >
        {{ income.category }}
      </div>
    </div>
    <div class="ml-24 mr-4 flex !flex-none justify-end">
      <div>{{ amountMoney }}</div>
    </div>
    <div
      class="opacity-0 buttons !flex-grow-0 gap-1 flex items-center justify-center transition-opacity"
    >
      <Edit />
      <Delete />
    </div>
  </div>
</template>

<script>
import Edit from "../Buttons/Edit";
import Delete from "../Buttons/Delete";
import { numberToMoney } from "../../utils/moneyConversion";

export default {
  components: {
    Edit,
    Delete
  },
  props: {
    income: Object
  },
  computed: {
    amountMoney() {
      return numberToMoney(this.income.amount);
    }
  }
};
</script>

<style scoped>
.item:hover .buttons {
  opacity: 1;
}
</style>
