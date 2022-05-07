<template>
  <header class="flex justify-between items-center py-4 md:py-8">
    <!-- logo - start -->
    <a
      href="/"
      class="inline-flex items-center text-gray-800 text-xl md:text-2xl font-bold"
      aria-label="logo"
    >
      Art While Apart
    </a>
    <!-- logo - end -->

    <nav class="nav font-bold text-gray-700 text-lg md:text-xl">
      <ul class="flex flex-row items-center sm:mt-4 sm:pt-4 md:mt-0 md:pt-0">
        <li>
          <nuxt-link to="/blog" class="block px-4 py-1 md:p-2 lg:px-4"> Home </nuxt-link>
        </li>

        <li v-for="(page, index) in pages" :key="index" class="block px-4 py-1 md:p-2 lg:px-4">
          <nuxt-link :to="`/${page.slug}`">{{ page.title }}</nuxt-link>
        </li>

        <li>
          <nuxt-link to="#" class="block px-4 py-1 md:p-2 lg:px-4"> Team </nuxt-link>
        </li>
        <li>
          <nuxt-link to="#" class="block px-4 py-1 md:p-2 lg:px-4"> Artist Showcase </nuxt-link>
        </li>
        <li>
          <nuxt-link to="#" class="block px-4 py-1 md:p-2 lg:px-4"> Join Us </nuxt-link>
        </li>
        <li>
          <nuxt-link to="#" class="block px-4 py-1 md:p-2 lg:px-4"> Request Art </nuxt-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';
import settings from '@/content/settings/general.json';

@Component
export default class Header extends Vue {
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
