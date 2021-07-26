<template>
  <div
    class="cursor-pointer add-container flex-initial shadow justify-center items-center bg-gray-600 p-6 pb-4 w-auto rounded-b-lg transition-transform"
    @click="$emit('add-click')"
  >
    <div
      class="relative plus-sign border-b-4 bottom-1/2 border-white-300 w-4 h-4 transition-transform transform"
    />
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.plus-sign::after {
  content: "";
  position: absolute;
  width: 1rem;
  height: 1rem;
  left: calc(50% - 2px);
  top: 50%;
  border-left: 3px solid white;
}

.add-container:hover .plus-sign {
  transform: scale(1.1);
}
</style>
