<template>
  <header class="sticky top-0 left-0 right-0 z-50 flex justify-between items-center py-5 bg-white">
    <!-- logo - start -->
    <a
      href="/"
      class="font-display tracking-wide inline-flex items-center text-gray-700 text-2xl md:text-3xl xl:text-4xl"
      aria-label="logo"
    >
      <div class="flex items-end">
        <div class="mb-1">
          <img
            src="~assets/images/awa_logos/fox-icon.png"
            alt="fox-icon"
            class="w-8 md:w-10 max-w-xs"
          />
        </div>
        <div class="ml-3">Art While Apart</div>
      </div>
    </a>
    <!-- logo - end -->

    <nav class="nav hidden font-bold lg:flex text-gray-700 text-md xl:text-lg">
      <ul class="flex flex-row items-center sm:mt-4 sm:pt-4 md:mt-0 md:pt-0">
        <li class="hover:text-primary transition-all">
          <nuxt-link to="/" class="block px-2 lg:px-4"> Home </nuxt-link>
        </li>
        <li class="link-active hover:text-primary transition-all">
          <nuxt-link to="/portfolio" class="block px-2 lg:px-4"> Portfolio </nuxt-link>
        </li>
        <li class="link-active hover:text-primary transition-all">
          <nuxt-link to="/team" class="block px-2 lg:px-4"> Team </nuxt-link>
        </li>
        <li class="link-active hover:text-primary transition-all">
          <nuxt-link to="/monthly_showcase" class="block px-2 lg:px-4">
            Monthly Showcase
          </nuxt-link>
        </li>
        <li class="link-active hover:text-primary transition-all">
          <nuxt-link to="/join_us" class="block px-2 lg:px-4"> Join Us </nuxt-link>
        </li>
        <li class="link-active hover:text-primary transition-all">
          <nuxt-link to="/request_art" class="block pl-2 lg:pl-4"> Request Art </nuxt-link>
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

<style lang="scss" scoped>
.link-active {
  a {
    &.nuxt-link-active {
      color: $bluise;
      @apply font-bold;
    }
  }
}
</style>
