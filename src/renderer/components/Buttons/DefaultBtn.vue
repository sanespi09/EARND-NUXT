<template>
  <div
    class="text-sm font-bold cursor-pointer rounded-lg px-4 py-2 text-white bg-blue-900 active:scale-95 transform shadow"
  >
    {{ title }}
  </div>
</template>

<script>
export default {
  props: {
    title: String
  }
};
</script>
