<template>
  <div>
    <div class="main-wrapper">
      <HeroIndex />
      <div class="is-flex-grow-1"></div>
    </div>
    <Nuxt />
    <TheFooter />
  </div>
</template>

<script>
import TheFooter from '@/components/partials/footer.vue';
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
  padding: 0 150px 0;
  width: 100%;
  min-height: 100vh !important;
  display: flex;
  flex-direction: column;
}
</style>
