<template>
  <main :class="[$route.name]" class="main px-4 md:px-0">
    <div class="container mx-auto">
      <the-header />
      <nuxt class="nuxt" />
    </div>

    <!-- <svg class="" width="100%" viewBox="0 0 10 1">
      <polygon stroke="none" stroke-width="0" fill="#ED8937" points="0,0.6 0,1 10,1 10,0" />
    </svg> -->

    <the-footer />
  </main>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';
import TheHeader from '@/components/partials/TheHeader.vue';
import TheFooter from '@/components/partials/TheFooter.vue';

@Component({
  components: {
    TheHeader,
    TheFooter,
  },
})
export default class DefaultLayout extends Vue {}
</script>

<style lang="scss">
.divider {
  position: relative;
  min-width: 100vw;
  margin-top: auto;
}

.nuxt {
  transition: all 0.5s cubic-bezier(0.55, 0, 0.1, 1);
}
</style>
