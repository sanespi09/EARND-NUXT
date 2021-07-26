<template>
  <div
    class="flex p-2 pl-6 bg-red-300 border-b-2 border-gray-800 item items-center cursor-pointer"
  >
    <div class="w-40">{{ data.title }}</div>
    <div class="flex !flex-none pl-24 justify-center w-20">
      <div
        class="bg-red-200 px-2 rounded font-mono text-sm flex-none items-center leading-6"
      >
        {{ data.category }}
      </div>
    </div>
    <div class="w-20 ml-24 mr-4 flex !flex-none justify-end">
      <div>{{ amountMoney }}</div>
    </div>
    <div
      class="opacity-0 buttons !flex-grow-0 flex ml-auto items-center justify-center transition-opacity"
    >
      <Edit />
      <Delete />
    </div>
  </div>
</template>

<script>
import { numberToMoney } from "../../utils/moneyConversion";
import Edit from "../Buttons/Edit";
import Delete from "../Buttons/Delete";

export default {
  components: {
    Edit,
    Delete
  },
  props: {
    data: Object
  },
  computed: {
    amountMoney() {
      return numberToMoney(this.data.amount);
    }
  }
};
</script>

<style scoped>
.item:hover .buttons {
  opacity: 1;
}
</style>
