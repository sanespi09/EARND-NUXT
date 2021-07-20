<template>
  <div
    class="flex p-2 px-6 bg-red-300 border-b-2 border-gray-800 items-center justify-between cursor-pointer"
  >
    <div class="w-40">{{ data.title }}</div>
    <div
      class="bg-red-200 px-2 rounded font-mono text-sm flex-initial w-auto items-center leading-6"
    >
      {{ data.category }}
    </div>
    <div>{{ data.amount }}$</div>
  </div>
</template>

<script>
export default {
  props: {
    data: Object
  }
};
</script>
