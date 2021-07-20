<template>
  <div
    class="flex p-2 px-6 bg-green-300 border-b-2 border-gray-800 items-center justify-between cursor-pointer"
  >
    <div class="w-40">{{ income.title }}</div>
    <div
      class="bg-green-200 px-2 rounded font-mono text-sm flex-initial w-auto items-center leading-6"
    >
      {{ income.category }}
    </div>
    <div>{{ income.amount }}$</div>
  </div>
</template>

<script>
export default {
  props: {
    income: Object
  }
};
</script>
