<template>
  <div
    class="animate-fade flex items-center justify-center fixed top-0 left-0 w-screen h-screen "
    v-if="showModal"
  >
    <div
      class="absolute w-full h-full z-5 bg-gray-900 bg-opacity-25"
      @click="closeModal"
    ></div>
    <div class="absolute z-10 flex-none bg-blue-200 p-8 rounded-lg">
      <PortalTarget name="modal-content"></PortalTarget>
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
      console.log(e.currentTarget);
      this.$store.commit("ui/toggleModal");
    }
  }
};
</script>
