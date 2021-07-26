<template>
  <div>
    <input
      class="w-full bg-blue-100 text-sm rounded-lg px-2 py-1 border-2 !border-solid border-transparent focus:outline-none focus:border-blue-900"
      v-model="inputValue"
      @blur="onInputBlur"
      :type="type"
      :name="name"
    />
  </div>
</template>

<script>
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
    }
  }
};
</script>
