<template>
  <div>
    <div class="main-wrapper">
      <hero-index />
      <div class="is-flex-grow-1"></div>
    </div>
    <Nuxt />
    <the-footer />
  </div>
</template>

<script>
import TheFooter from '@/components/partials/TheFooter.vue';
import HeroIndex from '@/components/partials/HeroIndex.vue';

export default {
  components: {
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
    width: 100%;
    min-height: 100vh !important;
    display: flex;
    flex-direction: column;
  }
}
</style>
