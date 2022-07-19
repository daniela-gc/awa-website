<template>
  <header
    :class="isMenuOpen ? 'h-full' : ''"
    class="w-full sticky top-0 left-0 right-0 z-50 py-5 bg-white"
  >
    <div class="flex justify-between items-center">
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
              width="64"
              height="64"
              class="w-8 sm:w-9 md:w-10 max-w-xs"
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

      <!-- Mobile Menu Button - start -->
      <button
        @click="toggleMenu"
        aria-hidden="true"
        class="inline-flex items-center lg:hidden text-gray-500 active:text-gray-600 text-xs md:text-base font-semibold"
      >
        <div v-if="isMenuOpen">
          <IconClose />
        </div>
        <div v-else>
          <IconMenu />
        </div>
      </button>
      <!-- Mobile Menu Button - end -->
    </div>

    <!-- Mobile Menu - start -->
    <div :class="isMenuOpen ? 'block' : 'hidden'" class="lg:hidden">
      <nav class="p-10 sm:pt-14 w-full min-h-screen">
        <ul
          @click="toggleMenu"
          aria-hidden="true"
          class="flex flex-col text-gray-600 text-base md:text-lg font-bold uppercase tracking-wider space-y-3"
        >
          <li>
            <nuxt-link to="/"> Home </nuxt-link>
          </li>
          <li class="link-active">
            <nuxt-link to="/portfolio"> Portfolio </nuxt-link>
          </li>
          <li class="link-active">
            <nuxt-link to="/team"> Team </nuxt-link>
          </li>
          <li class="link-active">
            <nuxt-link to="/monthly_showcase"> Monthly Showcase </nuxt-link>
          </li>
          <li class="link-active">
            <nuxt-link to="/join_us"> Join Us </nuxt-link>
          </li>
          <li class="link-active">
            <nuxt-link to="/request_art"> Request Art </nuxt-link>
          </li>
        </ul>
      </nav>
    </div>
    <!-- Mobile Menu - end -->
  </header>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';
import IconMenu from '@/components/commons/icons/IconMenu.vue';
import IconClose from '@/components/commons/icons/IconClose.vue';

@Component({
  components: {
    IconMenu,
    IconClose,
  },
})
export default class TheHeader extends Vue {
  isMenuOpen = false;

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
</script>

<style lang="scss" scoped>
.link-active {
  a {
    &.nuxt-link-active {
      @apply font-bold text-primary;
    }
  }
}
</style>
