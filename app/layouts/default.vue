<template>
  <main :class="[$route.name]" class="px-4 md:px-0">
    <div class="mt-1 md:mt-4">
      <the-header class="mx-4 md:mx-10 xl:mx-16 2xl:mx-20" />
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
