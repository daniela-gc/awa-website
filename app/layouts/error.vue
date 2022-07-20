<template>
  <div class="error-page">
    <div class="h-full flex flex-col items-center space-y-3 px-4 pt-32">
      <div class="mb-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="100"
          height="100"
          fill="#d3d3d3"
          viewBox="0 0 48 48"
        >
          <path
            d="M22 30h4v4h-4zm0-16h4v12h-4zm1.99-10C12.94 4 4 12.95 4 24s8.94 20 19.99 20S44 35.05 44 24 35.04 4 23.99 4zM24 40c-8.84 0-16-7.16-16-16S15.16 8 24 8s16 7.16 16 16-7.16 16-16 16z"
          ></path>
        </svg>
      </div>
      <h1
        v-if="error.statusCode === 404"
        class="text-base md:text-xl lg:text-2xl text-gray-600 text-center"
      >
        Sorry, this page could not be found!
      </h1>
      <h1 v-else class="text-base md:text-xl lg:text-2xl text-gray-600 text-center">
        Sorry, an error has occurred
      </h1>
      <NuxtLink to="/" class="text-base md:text-lg hover:underline text-primary text-center"
        >Back to the Home page</NuxtLink
      >
    </div>
  </div>
</template>

<script lang="ts">
export default {
  props: {
    error: {
      type: Object,
      default: null,
    },
  },
  layout: 'error', // you can set a custom layout for the error page
};
</script>

<style>
.error-page {
  height: 35rem;
}
</style>
