<template>
  <main :class="[$route.name]">
    <div class="mt-1 md:mt-4">
      <the-header class="px-4 md:px-10 xl:px-16 2xl:px-20" />
      <nuxt class="nuxt" />
    </div>
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

<style lang="scss" scoped>
.nuxt {
  transition: all 0.4s cubic-bezier(0.55, 0, 0.1, 1);
}
</style>
