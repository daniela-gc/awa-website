<template>
  <header class="flex justify-between items-center py-6 md:py-8">
    <!-- logo - start -->
    <a
      href="/"
      class="inline-flex items-center text-gray-800 text-lg md:text-2xl font-bold"
      aria-label="logo"
    >
      Art While Apart
    </a>
    <!-- logo - end -->

    <nav class="nav hidden lg:flex font-bold text-gray-700 text-md xl:text-lg">
      <ul class="flex flex-row items-center sm:mt-4 sm:pt-4 md:mt-0 md:pt-0">
        <!-- <li>
          <nuxt-link to="/blog" class="block px-2 lg:px-4"> Home </nuxt-link>
        </li>

        <li v-for="(page, index) in pages" :key="index" class="block px-2 lg:px-4">
          <nuxt-link :to="`/${page.slug}`">{{ page.title }}</nuxt-link>
        </li> -->

        <li>
          <a href="#" class="block px-2 lg:px-4"> Home </a>
        </li>
        <li>
          <a href="#" class="block px-2 lg:px-4"> Portfolio </a>
        </li>
        <li>
          <a href="#" class="block px-2 lg:px-4"> Team </a>
        </li>
        <li>
          <a href="#" class="block px-2 lg:px-4"> Artist Showcase </a>
        </li>
        <li>
          <a href="#" class="block px-2 lg:px-4"> Join Us </a>
        </li>
        <li>
          <a href="#" class="block px-2 lg:px-4"> Request Art </a>
        </li>
      </ul>
    </nav>

    <!-- Mobile Menu - start -->
    <button
      type="button"
      class="inline-flex items-center lg:hidden bg-gray-200 hover:bg-gray-300 focus-visible:ring ring-indigo-300 text-gray-500 active:text-gray-700 text-xs md:text-base font-semibold rounded-lg gap-2 px-2 py-1 md:py-2"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-5 w-5"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fill-rule="evenodd"
          d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
          clip-rule="evenodd"
        />
      </svg>

      Menu
    </button>
    <!-- Mobile Menu - end -->
  </header>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';
import settings from '@/content/settings/general.json';

@Component
export default class TheHeader extends Vue {
  get pages(): Page[] {
    return this.$store.state.pages;
  }

  logo = settings.logo;
}
</script>

<style lang="scss">
.nav {
  ul li > a {
    &.nuxt-link-active {
      color: $bluise;
      @apply font-bold;
    }
  }
}
</style>
