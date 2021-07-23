<template>
  <div
    class="animate-fade flex items-center justify-center fixed top-0 left-0 w-screen h-screen bg-gray-900 bg-opacity-25"
    v-if="showModal"
    @click="closeModal"
  >
    <div class="flex-none w-1/3 bg-blue-200 p-4 rounded-lg">
      <div>
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    showModal: Boolean
  },
  methods: {
    closeModal(e) {
      this.$store.commit("ui/toggleModal");
    }
  }
};
</script>
