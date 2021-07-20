<template>
  <div
    :class="style"
    class="transition-colors font-sans px-4 pb-2 pt-2 cursor-pointer rounded-t-lg shadow"
    @click="$emit('tab-click')"
  >
    {{ text }}
  </div>
</template>

<script>
export default {
  props: {
    component: String,
    text: String,
    isPressed: Boolean
  },
  data() {
    return {};
  },
  computed: {
    style() {
      console.log(this.state);
      return {
        "bg-gray-600": this.isPressed,
        "hover:bg-gray-700": !this.isPressed,
        "bg-gray-900": !this.isPressed
      };
    }
  }
};
</script>
