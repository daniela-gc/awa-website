<template>
  <main class="mt-1 md:mt-4">
    <the-header class="px-8 md:px-12 xl:px-16 2xl:px-24" />
    <div class="main-wrapper">
      <hero-index />
      <div class="is-flex-grow-1"></div>
    </div>
    <Nuxt />
    <the-footer />
  </main>
</template>

<script>
import TheFooter from '@/components/partials/TheFooter.vue';
import HeroIndex from '@/components/partials/HeroIndex.vue';
import TheHeader from '@/components/partials/TheHeader.vue';

export default {
  components: {
    TheHeader,
    HeroIndex,
    TheFooter,
  },
};
</script>

<style lang="scss" scoped>
.main-wrapper {
  padding: 0 25px 0;
  @screen sm {
    padding: 0 35px 0;
  }
  @screen md {
    padding: 0 50px 0;
  }
  @screen xl {
    padding: 0 90px 0;
  }
  @screen 2xl {
    padding: 0 120px 0;
  }
}
</style>
