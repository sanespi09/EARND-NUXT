<template>
  <div class="w-52">
    <form
      @submit="onAddItem"
      name="addItemForm"
      class="w-full flex flex-col gap-4 items-center"
    >
      <div class="w-full flex !flex-none flex-col gap-1">
        <label class="text-md" htmlFor="addItemForm">Nombre: </label>
        <InputBox name="title" type="text" :onBlur="onBlur" />
        <div class="text-xs text-center text-red-900">{{ errors.title }}</div>
      </div>
      <div>
        <label class="text-md" for="categories">Categoria: </label>
        <select
          class="border-gray-400 border-4 px-2 active:outline-none"
          name="categories"
        >
          <option value="clases">Clases</option>
          <option value="trabajo">Trabajo</option>
        </select>
      </div>
      <div class="w-full flex !flex-none flex-col gap-1">
        <label class="text-md" htmlFor="addItemForm">Monto: </label>
        <div class="flex !flex-none items-center justify-center">
          <MoneyBox name="amount" type="text" :onBlur="onBlur" />
        </div>
        <div class="text-center text-xs text-red-900">{{ errors.amount }}</div>
      </div>
      <div class="mt-2">
        <DefaultBtn title="Agregar" />
      </div>
    </form>
  </div>
</template>

<script>
import InputBox from "./InputBox.vue";
import DefaultBtn from "../Buttons/DefaultBtn.vue";
import MoneyBox from "./MoneyBox.vue";
import { getAddError } from "../../utils/formControl";

export default {
  components: {
    InputBox,
    DefaultBtn,
    MoneyBox
  },
  props: {
    itemType: String
  },
  data() {
    return {
      errors: {}
    };
  },
  methods: {
    onAddItem: function(event) {},
    onBlur: function(e) {
      let error = getAddError(e);
      this.errors = { ...this.errors, [e.target.name]: error };
    }
  }
};
</script>
