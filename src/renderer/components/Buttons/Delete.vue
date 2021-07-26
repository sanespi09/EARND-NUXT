<template>
  <div
    class="justify-center items-center px-2 py-2 rounded hover:bg-blue-400 button transition-colors"
    @click="$emit('delete-click')"
  >
    <svg
      id="Capa_1"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      height="8px"
      viewBox="0 0 123.05 123.05"
    >
      <g>
        <path
          d="M121.325,10.925l-8.5-8.399c-2.3-2.3-6.1-2.3-8.5,0l-42.4,42.399L18.726,1.726c-2.301-2.301-6.101-2.301-8.5,0l-8.5,8.5
		c-2.301,2.3-2.301,6.1,0,8.5l43.1,43.1l-42.3,42.5c-2.3,2.3-2.3,6.1,0,8.5l8.5,8.5c2.3,2.3,6.1,2.3,8.5,0l42.399-42.4l42.4,42.4
		c2.3,2.3,6.1,2.3,8.5,0l8.5-8.5c2.3-2.3,2.3-6.1,0-8.5l-42.5-42.4l42.4-42.399C123.625,17.125,123.625,13.325,121.325,10.925z"
        />
      </g>
    </svg>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.button:active {
  transform: scale(0.9);
}
</style>
