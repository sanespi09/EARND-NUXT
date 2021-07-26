<template>
  <div class="flex !flex-none w-full gap-1 items-center">
    <span class="text-sm font-bold mr-2">$</span>
    <input
      class="w-full bg-blue-100 text-sm rounded-lg px-2 py-1 border-2 !border-solid border-transparent focus:outline-none focus:border-blue-900"
      @input="onInput"
      :value="inputValue"
      @blur="onInputBlur"
      :type="type"
      :name="name"
    />
  </div>
</template>

<script>
import { numberToMoney } from "../../utils/moneyConversion";
export default {
  props: {
    name: String,
    type: String,
    onBlur: Function
  },
  data() {
    return {
      inputValue: ""
    };
  },
  methods: {
    onInputBlur: function(event) {
      this.onBlur(event);
    },
    onInput: function(event) {
      let noPointInput = event.target.value.replace(/\./g, "");
      let pointedNew = numberToMoney(noPointInput);
      this.inputValue = pointedNew;
    }
  }
};
</script>
