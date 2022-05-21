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

<style scoped>
.main-wrapper {
  padding: 0 50px 0;
  @screen md {
    padding: 0 60px 0;
  }
  @screen lg {
    padding: 0 80px 0;
  }
  @screen xl {
    padding: 0 150px 0;
  }
  width: 100%;
  min-height: 100vh !important;
  display: flex;
  flex-direction: column;
}
</style>
